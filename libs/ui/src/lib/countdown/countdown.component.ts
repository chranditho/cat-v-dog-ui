import { Component, input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styles: `
      :host {
          display: block;
      }
  `,
})
export class CountdownComponent implements OnInit, OnDestroy {
  deadline = input<Date>(new Date('2024-06-20T00:00:00Z'));

  days: number = this.deadline().getDay();
  hours: number = this.deadline().getHours();
  minutes: number = this.deadline().getMinutes();
  seconds: number = this.deadline().getMinutes();

  #intervalId: number | undefined;

  ngOnInit() {
    this.calculateTimeDifference();
    this.#intervalId = setInterval(() => {
      this.calculateTimeDifference();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.#intervalId) {
      clearInterval(this.#intervalId);
    }
  }

  private calculateTimeDifference() {
    const now = new Date().getTime();
    const targetTime = new Date(this.deadline()).getTime();
    const difference = targetTime - now;

    if (difference > 0) {
      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    } else {
      // Countdown has finished
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }
}
