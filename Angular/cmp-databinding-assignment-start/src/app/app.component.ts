import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  onCountIncremented(count: number) {
    console.log(count);

    if (count % 2 === 0) {
      this.evenNumbers.push(count);
    } else {
      this.oddNumbers.push(count);
    } 
  }
}
