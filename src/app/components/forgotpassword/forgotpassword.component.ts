import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    });
  }
  OnSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgotpasswordForm.valid) {
      let reqData = {
        email: this.forgotpasswordForm.value.email,

      }
      this.user.forgotpassword(reqData).subscribe((response: any) => {
        console.log(response);
      })
      //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
  }
}