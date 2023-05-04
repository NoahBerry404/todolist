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
      console.log(response);
    })
  }

  login(username: string, password: string){
    var data = {"user_name": username, "password": password};
    console.log(data)
    return this.http.post('http://137.184.152.154/api/login',data,{observe: 'response'}).subscribe(response => {
      console.log(response);
    })
  }
}
