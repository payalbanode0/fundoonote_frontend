import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path: 'forgotpassword', component:ForgotpasswordComponent},
{path:'resetpassword',component:ResetpasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
