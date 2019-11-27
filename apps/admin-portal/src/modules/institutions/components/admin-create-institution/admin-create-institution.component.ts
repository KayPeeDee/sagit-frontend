import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AdminInstitutionsService } from '../../services/admin-institutions.service';

@Component({
  selector: 'sagit-frontend-admin-create-institution',
  templateUrl: './admin-create-institution.component.html',
  styleUrls: ['./admin-create-institution.component.scss']
})
export class AdminCreateInstitutionComponent implements OnInit {

  institutionForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AdminCreateInstitutionComponent>,
    private institutionService: AdminInstitutionsService

  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.institutionForm = new FormGroup({
      address: new FormControl('', Validators.required), 
      cellphone: new FormControl('', Validators.required), 
      country: new FormControl('', Validators.required), 
      createdBy: new FormControl('', Validators.required),
      // createdDate: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      stateOrCity: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required)
    });
  }

  save() {
    this.institutionService.createInstitution(this.institutionForm.value).subscribe(
      res => {
        console.log(res);
        this.dialogRef.close(res);
      }
    );
    
  }

  close() {
      this.dialogRef.close();
  }

}
