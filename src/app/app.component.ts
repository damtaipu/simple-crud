import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ToolbarModule,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'DGSys';

  constructor(
    private auth: LoginService, 
    private router: Router
    ) {}

  logOut(){
    this.auth.logOut();
  }

  showHideToolbar(){
    let route = this.router.url
    let isLogged = sessionStorage.getItem('token-session') ? true : false;

    return (isLogged && route !== '/login') ? true : false;
  }
}