import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted =false;
  token:any
  users='1'

  constructor(private formBuilder : FormBuilder ,private user:UserService, public router:Router) {
    this.token=localStorage.getItem("token");
   }

  ngOnInit(): void {
    localStorage.setItem('SessionUser',this.users)
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
 
  OnSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.valid) {    
      let reqData = {        
        email: this.loginForm.value.email,       
        password: this.loginForm.value.password,       
      }
      this.user.login(reqData).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem("token",response.data)
        this.router.navigateByUrl("/dashboard/notes");
      }) 
    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
  }
}
