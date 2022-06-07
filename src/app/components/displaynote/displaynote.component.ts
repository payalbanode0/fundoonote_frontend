import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/Data/data.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

  note: any;
  Msg: string = ""
  @Input() notesArray: any;
  @Output() refreshEvent = new EventEmitter<any>();

  constructor(private data: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message =>
      this.Msg = message)
  }

  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result was closed`);

    });
  }
  receivedMessage(event: any) {
    console.log(event);
    this.refreshEvent.emit("card")
  }
}



