import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { NoteserviceService } from 'src/app/services/noteservice.service';

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
  
  
  trashcomponent = false;
  displaynotecomponent = false;

  constructor(private router: ActivatedRoute, private note: NoteserviceService, public dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    let del = this.router.snapshot.component;
    if (del == GetallnoteComponent) {
      this.displaynotecomponent = true;
    }
    if (del == TrashComponent) {
      this.trashcomponent = true;
    }
  }
  trash(note: any) {
    this.note.trashNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.snackbar.open('note trash sucessfully', '', {
        duration: 2000,
      })
    })
  }
  delete() {
    this.note.deleteNote(this.notedata.noteId).subscribe((response: any) => {
      console.log("note delete sucessfully", response);
      this.snackbar.open('note delete suceefully', '', {
        duration: 2000,
      })
    })
  }

}
