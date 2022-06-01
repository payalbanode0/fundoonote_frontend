import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  hide: boolean = true;


  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });

  }
  get f() { return this.registerForm.controls; }
  OnSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {

      let reqData = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        address: "nagpur"
      }
      this.user.registration(reqData).subscribe((response: any) => {
        console.log(response);
      })
      //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
  }
  showpassword() {
    this.hide = !this.hide;
  }
}
