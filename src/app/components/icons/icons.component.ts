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
  
  
  trashcomponent = false;
  displaynotecomponent = false;
  archieveComponent =false;

  constructor(private router: ActivatedRoute, private note: NoteserviceService, public dialog: MatDialog, private snackbar: MatSnackBar) { }

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

}
