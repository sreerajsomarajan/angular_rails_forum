import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/apis/users', this.setHeader())
                        .map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/apis/users/' + id, this.setHeader())
                        .map((response: Response) => response.json());
    }

    create(user) {
      let data = {
        user: {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation,
        }
      };
      let body = JSON.stringify(data);
      let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/forum.v1' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('/apis/users.json', body, options)
                      .map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/apis/users/' + user.id, user, this.setHeader())
                        .map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/apis/users/' + id, this.setHeader())
                        .map((response: Response) => response.json());
    }

    // private helper methods

    private setHeader() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
