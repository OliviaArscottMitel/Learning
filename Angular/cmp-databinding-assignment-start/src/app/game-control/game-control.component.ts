import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() countIncremented = new EventEmitter<number>();

  interval: any;
  count = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

  onStart() {
    this.interval = setInterval( ()=> {
      this.count++;
      this.countIncremented.emit(this.count);
    }, 1000);

    console.log('Start button clicked');
  }

  onStop() {
    clearInterval(this.interval);
  }

}
