import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createnoteform!: FormGroup;
  isShow = false;
  submitted = false;
  constructor(private forrmBuilder: FormBuilder, private note: NoteserviceService) { }

  ngOnInit(): void {
    this.createnoteform = this.forrmBuilder.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],
    });
  }
  noteshow() {
    this.isShow = true;
  }

  noteclose() {
    this.isShow = false;
  }
  OnSubmit() {
    this.submitted = true;
    console.log("api call")

    // stop here if form is invalid
    if (this.createnoteform.valid) {
      let reqData = {
        title: this.createnoteform.value.title,
        description: this.createnoteform.value.description,
        colour:"blue"
      }
      this.note.createNote(reqData).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.data)
      })
    }

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetPasswordForm.value))
  }

}
