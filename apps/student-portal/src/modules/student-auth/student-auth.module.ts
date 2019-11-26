import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAuthRoutingModule } from './student-auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule, AccountSettingsModule } from '@sagit-frontend/shared';


@NgModule({
  declarations: [SigninComponent, SignupComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    StudentAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AccountSettingsModule

  ]
})
export class StudentAuthModule { }
