import { Injectable, signal, OnDestroy } from '@angular/core';

export interface RamadanCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  isStarted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class RamadanService implements OnDestroy {
  // Ramadan 1448 AH estimated start: February 8, 2027
  readonly targetDate = new Date(2027, 1, 8, 0, 0, 0);

  countdown = signal<RamadanCountdown>(this.calculateRemaining());
  private timerId: ReturnType<typeof setInterval> | null = null;

  constructor() {
    this.startTimer();
  }

  private calculateRemaining(): RamadanCountdown {
    const now = new Date();
    const diff = this.targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalSeconds: 0,
        isStarted: true,
      };
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      totalSeconds,
      isStarted: false,
    };
  }

  private startTimer() {
    this.countdown.set(this.calculateRemaining());
    this.timerId = setInterval(() => {
      this.countdown.set(this.calculateRemaining());
    }, 1000);
  }

  // Russian pluralization helper
  getPluralRu(n: number, one: string, few: string, many: string): string {
    const abs = Math.abs(n) % 100;
    const num = abs % 10;
    if (abs > 10 && abs < 20) return many;
    if (num > 1 && num < 5) return few;
    if (num === 1) return one;
    return many;
  }

  // Unit labels
  getDayLabel(isRu: boolean, count: number): string {
    return isRu ? this.getPluralRu(count, 'день', 'дня', 'дней') : count === 1 ? 'day' : 'days';
  }

  getHourLabel(isRu: boolean, count: number): string {
    return isRu ? this.getPluralRu(count, 'час', 'часа', 'часов') : count === 1 ? 'hour' : 'hours';
  }

  getMinuteLabel(isRu: boolean, count: number): string {
    return isRu ? this.getPluralRu(count, 'минута', 'минуты', 'минут') : count === 1 ? 'min' : 'mins';
  }

  getSecondLabel(isRu: boolean, count: number): string {
    return isRu ? this.getPluralRu(count, 'секунда', 'секунды', 'секунд') : count === 1 ? 'sec' : 'secs';
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
