import { Component} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p>Warning!</p>',
  styles: [
    `p {
      color: red;
    }`
  ]
})
export class WarningAlertComponent {
  constructor() { }
}
