import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) {}

  isAuthenticated(){
    const token = sessionStorage.getItem('token-session');
    return token ? true : false;
  }

  logOut(){
    sessionStorage.removeItem('token-session');
    this.router.navigate(['login']);
  }
}
