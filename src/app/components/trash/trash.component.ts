import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  noteList: any;

  constructor(private note: NoteserviceService) { }

  ngOnInit(): void {
    this.getNote();
  }
  getNote() {
    this.note.getallnote().subscribe((response: any) => {
      console.log(response);
      this.noteList = response.data;
      this.noteList = this.noteList.filter((object: any) => {
        return object.isTrash === true
      })

    })

    console.log("call api");

  }
}




