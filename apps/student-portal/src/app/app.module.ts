import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { MaterialModule } from '@sagit-frontend/shared';
import { LoginComponent } from './components/login/login.component';
import { StudentAuthModule } from '../modules/student-auth/student-auth.module';
import { DataAccessModule } from '@sagit-frontend/shared';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    data: {title: 'Dashboard'},
    children: [
      {
        path: '',
        loadChildren: '../modules/student-dashboard/student-dashboard.module#StudentDashboardModule'
      }
      

    ]

  },
]

@NgModule({
  declarations: [
    AppComponent, 
    AppContainerComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    StudentAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    DataAccessModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
