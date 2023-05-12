import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardLogin implements CanActivate {

  constructor(
    private auth: LoginService,
    private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const loggedIn = this.auth.isAuthenticated();
  
    if(loggedIn){
      this.router.navigate(['home']);
      return false;
    }

    return true;
  }
  
}
