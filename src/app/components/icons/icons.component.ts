import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { ArchieveComponent } from '../archieve/archieve.component';

import { GetallnoteComponent } from '../getallnote/getallnote.component';
import { TrashComponent } from '../trash/trash.component';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any;
  @Input() notedata: any;
  @Output() refresh = new EventEmitter<string>();
  @Output() UpdateNoteEvent = new EventEmitter<any>();
 // @Output() DisplayNoteEvent = new EventEmitter<any>();
  
  
  trashcomponent = false;
  displaynotecomponent = false;
  archieveComponent =false;
  colorArray = [{Colorcode:"white", name:"White"},{Colorcode:"rgb(238, 188, 188)", name:"Red"},{Colorcode:"#fbbc04", name:"Orange"},{Colorcode:"#fff475", name:"Yellow"},{Colorcode:"rgb(175, 215, 175)", name:"Green"},{Colorcode:"aqua", name:"aqua"},
  {Colorcode:"#cbf0f8", name:"Blue"},{Colorcode:"teal", name:"teal"},{Colorcode:"#d7aefb", name:"Purple"},{Colorcode:"#fdcfe8", name:"Pink"},{Colorcode:"#e6c9a8", name:"Brown"},{Colorcode:"#e8eaed", name:"Gray"}];


  constructor(private router: ActivatedRoute, private note: NoteserviceService, public dialog: MatDialog, private snackbar: MatSnackBar, ) { }

  ngOnInit(): void {
    let del = this.router.snapshot.component;
    if (del == GetallnoteComponent) {
      this.displaynotecomponent = true;
    }
    if (del == TrashComponent) {
      this.trashcomponent = true;
    }
    if(del == ArchieveComponent){
      this.archieveComponent=true;
    }
  }
  trash(note: any) {
    this.note.trashNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.refresh.emit("hello")
      this.snackbar.open('note trash sucessfully', '', {
        duration: 2000,
      })
    })
  }
  delete() {
    this.note.deleteNote(this.notedata.noteId).subscribe((response: any) => {
      console.log("note delete sucessfully", response);
      this.refresh.emit("hello")
      this.snackbar.open('note delete suceefully', '', {
        duration: 2000,
      })
    })
  }
  archieve() {
    this.note.arcieveNote(this.notedata.noteId).subscribe((response: any) => {
      console.log("archieve sucessfully", response);
      this.refresh.emit("hello")
      this.snackbar.open('archieve suceefully', '', {
        duration: 2000,
      })
    })
  }
  changeColor(color:any){
    console.log(color);

    this.note.changeColour(this.notedata.noteId,color).subscribe((response: any) => {
      console.log(response);
      
      this.UpdateNoteEvent.emit(response)
      this.snackbar.open('Note Background Color Changed Successfully!!!', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
     }, error=>this.snackbar.open('Note Background Color is not changed', '', {
      duration: 2000,
      verticalPosition: 'bottom'
    })
    )
  }
}


