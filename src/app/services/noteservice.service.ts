import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  token: any;


  constructor(private httpservices: HttpService) {
    this.token = localStorage.getItem("token")
  }
  createNote(reqdata: any) {
    console.log(reqdata);
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservices.postServices('Note/AddNote', reqdata, true, headerOption);
  }
}
