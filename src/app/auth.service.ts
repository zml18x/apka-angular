import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor() { }

  login(login: string, password: string): boolean{
    if(login === 'test' && password === 'test'){
      this.loggedIn = true;
    }
    return this.isLoggedIn();
  }

  logout(): void{
    this.loggedIn = false;
  }

  isLoggedIn(): boolean{
    return this.loggedIn;
  }
}