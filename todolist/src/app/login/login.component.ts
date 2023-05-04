import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public LoginService: LoginService){}
  onLogin(form: NgForm){
    if(form.invalid){
      return;
    }
    this.LoginService.login(form.value.username,form.value.password);
    form.resetForm();
  }
}
