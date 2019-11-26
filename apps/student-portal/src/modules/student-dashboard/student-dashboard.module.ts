import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDashboardRoutingModule } from './student-dashboard-routing.module';
import { StudentDashboardComponent } from './student-dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '@sagit-frontend/shared';


@NgModule({
  declarations: [StudentDashboardComponent],
  imports: [
    CommonModule,
    StudentDashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class StudentDashboardModule { }
