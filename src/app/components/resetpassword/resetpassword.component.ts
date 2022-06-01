import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'src/app/services/userservices/user.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;
  token: any


  constructor(private forrmBuilder: FormBuilder, private user: UserService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activateRoute.snapshot.paramMap.get('token');

    this.resetPasswordForm = this.forrmBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });

    console.log(this.token);
  }
  OnSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetPasswordForm.valid) {
      let reqData = {
        password: this.resetPasswordForm.value.password,
        confirmPassword: this.resetPasswordForm.value.confirmPassword


      }
      this.user.resetpassword(reqData, this.token).subscribe((Response: any) => {
        console.log(Response)
      });
    }

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetPasswordForm.value))
  }

}

