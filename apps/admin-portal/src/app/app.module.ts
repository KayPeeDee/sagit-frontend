import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, DataAccessModule } from '@sagit-frontend/shared';
import { FormsModule } from '@angular/forms';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, AppContainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    DataAccessModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
