import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  sec: number = 30;
  min: number = 30;
  hours: number = 20;
  days: number = 8;

  ngOnInit(): void{
    this.timer()
  }

  timer() {
    let intervalId = setInterval(() => {
        this.sec = this.sec - 1;

        if(this.sec == 0 && this.min > 0){
          this.min -= 1;
          this.sec = 60;
        } else if(this.min == 0 && this.hours > 0){
          this.hours -= 1;
          this.min = 60;
        } else if(this.hours == 0 && this.days > 0){
          this.days -=1;
          this.hours = 24;
          this.sec = 60;
        }

        if(this.sec === 0) clearInterval(intervalId)
    }, 1000)
  }
}
