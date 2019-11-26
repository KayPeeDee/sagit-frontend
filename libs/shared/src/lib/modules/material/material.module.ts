import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatInputModule,
  MatTabsModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
    
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
