import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { IconsComponent } from './components/icons/icons.component';

import { AuthguardserviceService } from './services/guardservice/authguardservice.service';
import { MatCardModule } from '@angular/material/card';
import { UpdateComponent } from './components/update/update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TrashComponent } from './components/trash/trash.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ArchieveComponent } from './components/archieve/archieve.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FilterPipe } from './pipes/filter.pipe';
import { EditLableComponent } from './components/label/label.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    GetallnoteComponent,
    DisplaynoteComponent,
    IconsComponent,

    UpdateComponent,
    TrashComponent,
    ArchieveComponent,
    FilterPipe,
    EditLableComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    BrowserAnimationsModule, MatFormFieldModule,
    MatInputModule, MatDialogModule,
    FormsModule, MatMenuModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule, MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSidenavModule,MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,


  ],
  providers: [
    AuthguardserviceService
  ],
  bootstrap: [AppComponent],
  entryComponents: [UpdateComponent],
  
})



export class AppModule { }
