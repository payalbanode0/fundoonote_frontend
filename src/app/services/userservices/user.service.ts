import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token:any;
  constructor(private httpservice:HttpService) { 
    this.token =localStorage.getItem("token")
  }
registration(reqdata: any){
  console.log(reqdata);

  let header={
    headers:new HttpHeaders({
      'content-type':'application/json',
       
    })
  }
  return this.httpservice.postServices('/User/register',reqdata,false, header)
}
}
