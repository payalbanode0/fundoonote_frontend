import { Component, Input, OnInit } from '@angular/core';
import { LableService } from 'src/app/services/labelservices.service';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class EditLableComponent implements OnInit {
  @Input()GetLable: any;
  lableName:any;
  isLable:boolean =false;
  isDelete:boolean =false;
  constructor(private lable:LableService,) { }

  hideAndShow(){
    console.log("calling hide")
    this.isLable=!this.isLable
    
  }
  show(){
    this.isDelete=!this.isDelete
  }


  ngOnInit(): void {
  }

  onCreate() {
    

    // stop here if form is invalid
    
      let reqdata = {
        LabelName:this.lableName
      };
      console.log(reqdata,"inside label.ts")
      this.lable.createLabel(reqdata).subscribe((response:any)=>{
        console.log(response);
         
      
      });
      

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.noteForm.value));
    }
  }