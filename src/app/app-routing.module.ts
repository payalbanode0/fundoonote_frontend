import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallarchieveComponent } from './components/getallarchieve/getallarchieve.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { GetalltrashnoteComponent } from './components/getalltrashnote/getalltrashnote.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path: 'forgotpassword', component:ForgotpasswordComponent},
{path:'reset-password/:token',component:ResetpasswordComponent},
{path:'dashboard',component:DashboardComponent,
children:[
  {path: 'notes',component:GetallnoteComponent},
  {path: 'trash',component:GetalltrashnoteComponent},
  {path: 'archieve',component:GetallarchieveComponent},
  


  

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
