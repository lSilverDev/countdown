import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  counter: number = 60;

  ngOnInit(): void{
    this.timer()
  }

  timer() {
    let intervalId = setInterval(() => {
        this.counter = this.counter - 1;
        console.log(this.counter)
        if(this.counter === 0) clearInterval(intervalId)
    }, 1000)
  }
}
