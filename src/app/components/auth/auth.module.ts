import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule
  ]
})
export class AuthModule { }
