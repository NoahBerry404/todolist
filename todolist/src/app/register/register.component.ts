import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  pawprint = "Drew Clutes, AACK2F";
  constructor(public LoginService: LoginService){}
  onRegister(form: NgForm){
    if(form.invalid){
      return;
    }
    console.log(form.value.password);
    console.log(form.value.username);
    this.LoginService.register(form.value.username,form.value.password);
    form.resetForm();
  }
}
