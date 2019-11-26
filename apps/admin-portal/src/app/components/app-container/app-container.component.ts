import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sagit-frontend-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {

  title = 'Admin Portal';

  opened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
