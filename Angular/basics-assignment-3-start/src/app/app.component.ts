import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .textColour {
      color: white
    }
  `]
})
export class AppComponent {
  showSecret = false;
  count = 0;
  clickLog = [];

  onClick() {
    this.showSecret =! this.showSecret;
    this.count += 1;
    this.clickLog.push({'count': this.count, 'event': 'click'});
  }

  getBackgroundColour(number: number) {
    if ( number > 5 ) {
      return 'blue'
    } 
  }
}
