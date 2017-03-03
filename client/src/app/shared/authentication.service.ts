import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public authToken: string;

    constructor(private http: Http) {
        // set authToken if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.authToken = currentUser && currentUser.authToken;
    }

    login(email: string, password: string) {
      // let data = { user: { email: "sreeraj@mobomo.com", password: "password" } };
      let data = { user: { email: email, password: password } };
      let body = JSON.stringify(data);
      let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/forum.v1' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('/apis/login.json', body, options)
                 .map(response => {
                    if(response.status < 200 || response.status >= 300) {
                      throw new Error('This request has failed ' + response.status);
                    }
                    else {
                      let authToken = response.json() && response.json().authentication_token;
                      if (authToken) {
                          this.authToken = authToken;
                          let user = JSON.stringify({ email: email, authToken: authToken });
                          localStorage.setItem('currentUser', user);
                      }
                      return response.json();
                    }
                  });
    }

    logout(): void {
        // clear authToken remove user from local storage to log user out
        this.authToken = null;
        localStorage.removeItem('currentUser');
    }
}
