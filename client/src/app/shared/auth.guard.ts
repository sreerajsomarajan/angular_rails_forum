import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    loggedIn: boolean;
    currentUser: any = {};

    constructor(private router: Router) {
      this.loggedIn = false;
      this.currentUser = {};
    }

    canActivate() {
      let user = localStorage.getItem('currentUser')
      if (user) {
        this.currentUser = user;
        this.loggedIn = true;
        // logged in so return true
        return true;
      }
      // not logged in so redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
}
