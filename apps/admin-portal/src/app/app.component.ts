import { Component } from '@angular/core';

@Component({
  selector: 'sagit-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-portal';

  longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
    'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor' +
    ' in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur' +
    ' sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id ' +
    'est laborum.';

  selected = '';
  items = [
    {text: 'Refresh'},
    {text: 'Settings'},
    {text: 'Help', disabled: true},
    {text: 'Sign Out'}
  ];

  iconItems = [
    {text: 'Redial', icon: 'dialpad'},
    {text: 'Check voicemail', icon: 'voicemail', disabled: true},
    {text: 'Disable alerts', icon: 'notifications_off'}
  ];

  select(text: string) { this.selected = text; }
}
