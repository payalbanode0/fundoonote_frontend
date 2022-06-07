import { outputAst } from '@angular/compiler';
import { Component, Output, EventEmitter,OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  noteList: any
  
  
  @Output() trashEvent = new EventEmitter<string>();
  constructor(private note: NoteserviceService) { }

  ngOnInit(): void {
    this.getNote();
  }
  getNote() {
    this.note.getallnote().subscribe((response: any) => {
      console.log(response);
      this.noteList = response.data;
      this.noteList.reverse();
      this.noteList = this.noteList.filter((obj: any) => {
        return obj.isTrash === true
      })

    })

    console.log("call api");

  }
  receiveMessage(event: any) {
    this.getNote();
  }
}




