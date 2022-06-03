import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  title:any
  description:any
  colour:any
  noteId:any
  constructor(public note:NoteserviceService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    this.title = this.data.title
    this.description = this.data.description
    this.colour = this.data.colour
  }

  onClick(): void{
  let data = {
    title: this.title,
    description: this.description,
    colour:"yellow"
  }
  this.note.update(data,this.data.noteId).subscribe((response: any) => {
    console.log(response);
  })

}
}
