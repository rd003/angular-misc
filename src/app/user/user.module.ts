import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
  declarations: [
    LoginComponent,RegistrationComponent
  ],
  imports: [CommonModule,UserRoutingModule]
})
export class UserModule { }
