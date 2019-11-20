import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as material from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    material.MatButtonModule,
    material.MatToolbarModule,
    material.MatSidenavModule,
    material.MatFormFieldModule,
    material.MatOptionModule,
    material.MatSelectModule,
    material.MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
