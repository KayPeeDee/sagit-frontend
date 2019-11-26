import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminListInstitutionsComponent } from './components/admin-list-institutions/admin-list-institutions.component';


const routes: Routes = [
  {
    path: 'list',
    component: AdminListInstitutionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionsRoutingModule { }
