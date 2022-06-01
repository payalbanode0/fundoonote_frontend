import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    this.getallnote()
  }
  getallnote(){
    console.log("here call api")
  }
}



