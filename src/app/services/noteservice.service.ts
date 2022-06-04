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
  getallnote() {
    console.log();
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservices.getServices('Note/GetAllNote', true, headerOption);
  }
  update(reqdata: any, noteId: any) {
    console.log("token", this.token);
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservices.putServices(`Note/Update/${noteId}`, reqdata, true, headerOption);
  }
  deleteNote(noteId: any) {
    console.log("token", this.token);
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservices.deleteServices(`Note/Delete/${noteId}`, true, headerOption);
  }
  trashNote(noteId: any) {
    console.log("token", this.token);
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservices.putServices(`Note/IsTrash/${noteId}`, {}, true, headerOption);
  }
  arcieveNote(noteId : any){
    {
      console.log("token", this.token);
  
      let header = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        })
      }
      return this.httpservices.putServices(`Note/ArchieveNote/${noteId}`, {}, true, header)
    }
  }
  colourpallete(noteId: any, colour:any){
    console.log("token",this.token);
  
   let header ={
     headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
     })
   }
   return this.httpservices.putServices( `Note/ChangeColour/${noteId}/${colour}`,{},true,header)
  }
}

