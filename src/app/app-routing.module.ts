import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TrashComponent } from './components/trash/trash.component';
import { AuthguardnameGuard } from './authguardname.guard';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'reset-password/:token', component: ResetpasswordComponent },
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardnameGuard],
    children: [
      { path: 'notes', component: GetallnoteComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'archieve', component: ArchieveComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
