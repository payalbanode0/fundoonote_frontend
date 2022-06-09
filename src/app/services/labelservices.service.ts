import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class LableService {
  token:any;
    constructor(private httpService: HttpService) {
      this.token=localStorage.getItem("token")
    }
  
    createLabel(reqdata: any) {
      console.log(reqdata);
      console.log(this.token);
  
      let header = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization':'Bearer ' + this.token
        })
      }
      return this.httpService.postServices(`Label/createLabel/${reqdata.LabelName}`, reqdata, true, header)
    }
  }