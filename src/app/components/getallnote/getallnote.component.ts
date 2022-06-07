import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {
  noteList: any;

  constructor(private note: NoteserviceService) { }

  ngOnInit(): void {
    this.getNote()
  }
  getNote() {
    this.note.getallnote().subscribe((response: any) => {
      console.log(response);
      this.noteList = response.data;
      this.noteList = this.noteList.filter((object: any) => {
        return object.isArchieve === false && object.isTrash === false
      })
    })
    console.log("call api here");
  }

  receivedMessage(event: any) {
    this.getNote
  }

}
