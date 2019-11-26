import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRoutingModule } from './institutions-routing.module';
import { AdminListInstitutionsComponent } from './components/admin-list-institutions/admin-list-institutions.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '@sagit-frontend/shared';
import { AdminCreateInstitutionComponent } from './components/admin-create-institution/admin-create-institution.component';


@NgModule({
  declarations: [AdminListInstitutionsComponent, AdminCreateInstitutionComponent],
  imports: [
    CommonModule,
    InstitutionsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  entryComponents: [AdminCreateInstitutionComponent]
})
export class InstitutionsModule { }
