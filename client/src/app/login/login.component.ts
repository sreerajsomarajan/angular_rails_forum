import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    user: any = {};
    loading = false;
    error = '';
    currentUser = {};

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    ngOnInit() {
      // reset login status
      this.currentUser = null;
      this.authenticationService.logout();
    }

    login() {
      this.loading = true;
      this.authenticationService
          .login(this.user.email, this.user.password)
          .subscribe(
            response => {
              this.currentUser = response;
              this.router.navigate(['/']);
            },
            error => {
              console.log('Error!!!');
              this.error = 'Email or password is incorrect';
              this.loading = false;
            }
          );
    }
}
