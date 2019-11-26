import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { InstitutionsModule } from '../modules/institutions/institutions.module';


const routes: Routes = [
    {
        path: '',
        component: AppContainerComponent,
        data: {title: 'Dashboard'},
        children: [
          {
            path: 'institutions',
            loadChildren: '../modules/institutions/institutions.module#InstitutionsModule'
          }
          
    
        ]
    
    },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
      InstitutionsModule
    
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }