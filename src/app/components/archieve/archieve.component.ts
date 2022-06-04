import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
noteList:any
  constructor(private note :NoteserviceService) { }

  ngOnInit(): void {
    this.getnote();
  }
  getnote(){
    this.note.getallnote().subscribe((response:any)=>{
      console.log(response.data);
      this.noteList = response.data;
       this.noteList = this.noteList.filter((object:any)=>{
         return object.isArchieve === true 
       })
    })
  

 console.log("call api");
}

}
