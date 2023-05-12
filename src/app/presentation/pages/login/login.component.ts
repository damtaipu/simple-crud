import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthUseCase } from 'src/app/core/usecases/auth.usecase';
import { Login } from 'src/app/core/domain/login-model/login.model';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserImpl } from 'src/app/core/domain/firebase-model/firebase.model';
import { LoginService } from 'src/app/shared/services/login.service';


@Component({
  selector: 'dg-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loading: boolean = false;
  authForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthUseCase,
    private authCheck: LoginService,
    private messageService: MessageService
  ) {

    if (this.authCheck.isAuthenticated) {
      this.router.navigate(['home']);
      return;
    }
    
  }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get user() {
    return this.authForm.get('user');
  }

  get password() {
    return this.authForm.get('password');
  }

  onSubmit() {
    this.loading = true;

    let login: Login = {
      email: this.user.value,
      passWord: this.password.value
    }

    this.auth.execute(login).subscribe({
      next: (v: any) => {
        this.loading = false;
        let token: UserImpl = v.data[0].user;
        this.messageService.add({ key: 'login-success', severity: 'success', summary: 'Sucesso', detail: 'Redirecionando...' });
        sessionStorage.setItem('token-session', token.accessToken);
      },
      error: (e) => {
        this.loading = false;
        this.messageService.add({ key: 'login-error', severity: 'error', summary: 'Erro no login', detail: 'Não foi possível logar.' });
      }
    })
  }

  closeLoginSuccess() {
    this.router.navigate(['home']);
  }

  closeLoginError() {  
    //behavious here  
  }
}


