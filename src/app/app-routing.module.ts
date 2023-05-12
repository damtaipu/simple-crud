import { Route } from '@angular/router';
import { LoginComponent } from './presentation/pages/login/login.component';
import { AuthGuard } from './data/auth/auth.guard';
import { AuthGuardLogin } from './data/auth/auth-login.guard';

//const routes: Routes = [];

export const ROUTES: Route[] = [
  {
    path: 'home', 
    loadComponent: () => import('./presentation/pages/home/home.component').then(mod => mod.HomeComponent),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'login', 
    loadComponent: () => import('./presentation/pages/login/login.component').then(mod => mod.LoginComponent),
    canActivate: [AuthGuardLogin]
  },
  { 
    path: '',   
    redirectTo: '/login', 
    pathMatch: 'full' },
  {
    path: '**',
    component: LoginComponent,
  }
];



/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */
