import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  register(username: string, password: string){
    var data = {"user_name": username, "password": password};
    console.log(data)

    return this.http.post('http://137.184.152.154/api/register',data,{observe: 'response'}).subscribe(response => {
      console.log(response.status);
      if(response.status==201){
        window.location.href='/login';
      }
    })
  }

  login(username: string, password: string){
    var data = {"user_name": username, "password": password};
    console.log(data)
    return this.http.post('http://137.184.152.154/api/login',data,{observe: 'response'}).subscribe(response => {
      if(response?.body){
        console.log(response);
        var token= 'token' as keyof typeof response.body;
        console.log(response.body[token]);
        var val = response.body[token].toString();
        if(response.status==200){
          localStorage.setItem('token',val);
          window.location.href='/view-list';
        }
      }
    })
  }
}
