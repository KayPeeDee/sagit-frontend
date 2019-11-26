import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminInstitutionsService } from '../../services/admin-institutions.service';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { AdminCreateInstitutionComponent } from '../admin-create-institution/admin-create-institution.component';


export interface Institution {
  address: string;
  cellphone: string;
  country: string
  createdBy: string;
  createdDate: string;
  name: string;
  stateOrCity: string;
  telephone: string;
  website: string;
}


@Component({
  selector: 'sagit-frontend-admin-list-institutions',
  templateUrl: './admin-list-institutions.component.html',
  styleUrls: ['./admin-list-institutions.component.scss']
})
export class AdminListInstitutionsComponent implements OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  
  displayedColumns: string[] = ['address', 'cellphone', 'country', 'createdBy','createdDate','name','stateOrCity','telephone','website'];

  institutions: Institution[]=[];

  dataSource: any;

  constructor(
    private institutionService: AdminInstitutionsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getInstitutions();
  }

  getInstitutions(){
    this.institutionService.getInstitutions().subscribe(
      res => {
        console.log(res);
        // this.institutions = res;
        this.dataSource = new MatTableDataSource<Institution>(res);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  openCreateInstitutionDialog() {
    const dialogRef = this.dialog.open(AdminCreateInstitutionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
  
  
}

