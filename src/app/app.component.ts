import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    CommonModule,


    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ml';


  images = [
    '/assets/images/foto1.jpeg',
    '../assets/images/foto2.jpeg',
    '../assets/images/foto3.jpeg',
    '../assets/images/foto4.jpeg',
    '../assets/images/foto5.jpeg',
    '../assets/images/foto6.jpeg',
    '../assets/images/foto7.jpeg',
    '../assets/images/foto8.jpeg',
    '../assets/images/foto10.jpeg',
    '../assets/images/foto11.jpeg',
    '../assets/images/foto13.jpeg',
    '../assets/images/foto14.jpeg',
    '../assets/images/foto15.jpeg',
    '../assets/images/foto16.jpeg',
    '../assets/images/foto17.jpeg',
    '../assets/images/foto18.jpeg',
    '../assets/images/foto19.jpeg',
    '../assets/images/foto20.jpeg',
    '../assets/images/foto21.jpeg',
    '../assets/images/foto22.jpeg',
    '../assets/images/foto23.jpeg',
    '../assets/images/foto24.jpeg',
    '../assets/images/foto25.jpeg',
    '../assets/images/foto26.jpeg',
    '../assets/images/foto27.jpeg',
    '../assets/images/foto28.jpeg',
    '../assets/images/foto29.jpeg',
    '../assets/images/foto30.jpeg',
    '../assets/images/foto31.jpeg',
    '../assets/images/foto32.jpeg',
    '../assets/images/foto33.jpeg',
    '../assets/images/foto34.jpeg',
    '../assets/images/foto35.jpeg',
    '../assets/images/foto36.jpeg',
    '../assets/images/foto37.jpeg'
  ];

  currentIndex = 0;
  startDate: Date = new Date('2024-08-03T00:00:00'); // Data do início do relacionamento
  durationInSeconds: number = 0;
  timerSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      const now = new Date();
      this.durationInSeconds = Math.floor((now.getTime() - this.startDate.getTime()) / 1000);
    });
  }

  formatDuration(): { years: number; months: number; days: number; hours: number; minutes: number; seconds: number } {
    let remainingSeconds = this.durationInSeconds;

    const years = Math.floor(remainingSeconds / (365 * 24 * 60 * 60));
    remainingSeconds %= 365 * 24 * 60 * 60;

    const months = Math.floor(remainingSeconds / (30 * 24 * 60 * 60));
    remainingSeconds %= 30 * 24 * 60 * 60;

    const days = Math.floor(remainingSeconds / (24 * 60 * 60));
    remainingSeconds %= 24 * 60 * 60;

    const hours = Math.floor(remainingSeconds / (60 * 60));
    remainingSeconds %= 60 * 60;

    const minutes = Math.floor(remainingSeconds / 60);
    remainingSeconds %= 60;

    return { years, months, days, hours, minutes, seconds: remainingSeconds };
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
