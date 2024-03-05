import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginModel = {
    login: '',
    password: ''
  }

  loginFailed = false;

  constructor(private authService: AuthService, private router: Router){}
  
  login(): void{
    if(this.authService.login(this.loginModel.login,this.loginModel.password)){
      this.router.navigate(['/dashboard']);
      console.log("Login successful");
    } else{
      this.loginFailed = true;
      console.log("Invalid Credentials");
    }
  }
}
