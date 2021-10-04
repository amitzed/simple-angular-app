import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      console.log('token-1:', localStorage.getItem('token'));
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/responses']);
        console.log('Auth Guard')
        //  const token = localStorage.getItem('token');
        // const payload = atob(token.split('.')[1]);
        // const parsedPayload = JSON.parse(payload);

        console.log('token-2:', localStorage.getItem('token'));
        // console.log('payload:', payload);
        // console.log('parsedPayload:', parsedPayload);

        return false;
      }

    return true;
  }

}
