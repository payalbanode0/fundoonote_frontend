import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  
  isTrashComponent = false;
  isDisplayNoteComponent = false;
  isArchieveComponent = false;
  colorsArr = [{ Colorcode: "pink" }, { Colorcode: "yellow" }, { Colorcode: "orange" }, { Colorcode: "rgb(255,99,71)" }, { Colorcode: "rgb(152,251,152)" }, { Colorcode: "Teal" }, { Colorcode: "rgb(106,90,205)" }, { Colorcode: "rgb(240,230,140)" }, { Colorcode: "rgb(238,130,238)" }, { Colorcode: "rgb(255,160,122)" }];

  constructor(private router: ActivatedRoute, private note: NoteserviceService, public dialog: MatDialog, private snackbar: MatSnackBar,) { }

  ngOnInit(): void {
    let Compo = this.router.snapshot.component;

    if (Compo == GetallnoteComponent) {
      this.isDisplayNoteComponent = true;
    }

    if (Compo == TrashComponent) {
      this.isTrashComponent = true;
    }
    if (Compo == ArchieveComponent) {
      this.isArchieveComponent = true;

    }
  }

  trash(note: any) {
    this.note.trashNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.refresh.emit("hello")
      this.snackbar.open('Note trashed successfully..', '', {
        duration: 2000,
      })
    })
  }

  delete() {
    this.note.deleteNote(this.notedata.noteId).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.refresh.emit("hello")
      this.snackbar.open('Note Deleted Successfully', '', {
        duration: 2000,
      })
    })
  }

  archieve() {
    this.note.archieveNote(this.notedata.noteId).subscribe((response: any) => {
      console.log("archieve sucessfully", response);
      this.refresh.emit("hello")
      this.snackbar.open('archieve suceefully', '', {
        duration: 2000,
      })
    })
  }
  changeColor(colour: any) {
    console.log(colour);

    this.note.colourpallete(this.notedata.noteId, colour).subscribe((response: any) => {
      console.log(response);

      this.refresh.emit("hello")
      this.snackbar.open('Note Background Color Changed Successfully!!!', '', {
        duration: 3000,

      })
    })
  }
  unarchieve() {

    this.note.archieveNote(this.notedata.noteId).subscribe((res: any) => {
      console.log(res);
      this.refresh.emit("Hello")
      this.snackbar.open('Note unArchived', '', {
        duration: 3000,

      })
    })
  }
  restore(note: any) {
    this.note.trashNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.refresh.emit("hello")
      this.snackbar.open('Note restore successfully..', '', {
        duration: 2000,
      })
    })
  }
}


