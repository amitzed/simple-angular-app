import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // public token?: string | null;
  public token?: any;

  constructor() { }

  public isLoggedIn() {
    // const token = localStorage.getItem('token');
    // this.token = localStorage.getItem('token');
    // const payload = atob(this.token.split('.')[1]);
    // const parsedPayload = JSON.parse(payload);

    if (this.token) {
      this.token = localStorage.getItem('token');
      const payload = atob(this.token.split('.')[1]);
      const parsedPayload = JSON.parse(payload);

      console.log('token:', this.token);
      console.log('payload:', payload);
      console.log('parsedPayload:', parsedPayload);

      return parsedPayload.exp > Date.now() / 1000;
    } else {
      return null
    }

    // console.log('token:', this.token);
    // console.log('payload:', payload);
    // console.log('parsedPayload:', parsedPayload);

    // return parsedPayload.exp > Date.now() / 1000;
  }
}
