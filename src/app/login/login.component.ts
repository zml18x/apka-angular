import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginModel = {
    login: '',
    password: ''
  }
  
  login(){
    if(this.loginModel.login === "test" && this.loginModel.password === "test"){
      console.log("Login successful");
    } else{
      console.log("Invalid Credentials");
    }
  }
}
