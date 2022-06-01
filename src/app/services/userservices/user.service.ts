import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';

import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem("token")
  }
  registration(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'

      })
    }
    return this.httpservice.postServices('User/register', reqdata, false, header)

  }
  login(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpservice.postServices(`User/login/${reqdata.email}/${reqdata.password}`, reqdata, false, header)
  }
  forgotpassword(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'

      })
    }
    return this.httpservice.postServices(`User/forgotpassword/${reqdata.email}`, reqdata, false, header)
  }
  resetpassword(reqdata: any, token: any) {
    console.log(reqdata)
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.httpservice.putServices('User/Changepassword', reqdata, true, headerOption)
  }
}
