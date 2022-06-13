import { Component, Input, OnInit } from '@angular/core';
import { LableService } from 'src/app/services/labelservices.service';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class EditLableComponent implements OnInit {
  @Input() GetLable: any;
  labelName: any
  LabelArray: any
  isLable: boolean = false;
  isDelete: boolean = false;
  label: any;
  constructor(private labelservice: LableService,) { }

  hideAndShow() {
    console.log("calling hide")
    this.isLable = !this.isLable

  }
  show() {
    this.isDelete = !this.isDelete
  }


  ngOnInit(): void {
    this.getlabel()
  }

  getlabel() {
    this.labelservice.getAllLable().subscribe((result: any) => {
      console.log(result);
      this.LabelArray = result.data;
      console.log(this.LabelArray);
    })
  }


  onCreate() {


    //stop

    let reqdata = {
      LabelName: this.labelName
    };
    console.log(reqdata, "inside label.ts")
    this.labelservice.createLabel(reqdata).subscribe((response: any) => {
      console.log(response);


    });


    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.noteForm.value));
  }
  delete(Labels: any) {

    let reqdata = {
      LabelId:Labels,

    }
    console.log(reqdata)

    this. labelservice.DeleteLabel(reqdata).subscribe((response: any) =>{
      console.log("lable")
      console.log(response);

      
    });

  }
}

