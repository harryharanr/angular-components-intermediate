import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 20;
  private countdownEndSubscription: Subscription = new Subscription();
  private countdownSubscription: Subscription = new Subscription();
  public countdown: number = 0;

  get progress() {
    console.log("getting progress");
    return (this.init-this.countdown)/this.init*100;
  }
  constructor(public timerService: TimerService, private cdRef: ChangeDetectorRef) {
    console.log('Timer Service Created!');
   }

  ngOnInit(): void {
    this.countdownSubscription = this.timerService.countdown$.subscribe(data => {
      this.countdown = data;
      this.cdRef.markForCheck();
    });

    this.timerService.restartCountdown(this.init);

    this.countdownEndSubscription = this.timerService.countdownEnd$.subscribe(() => {
      this.onComplete.emit();
    });
  }

  ngOnDestroy() {
    this.timerService.destroy();
    this.countdownEndSubscription.unsubscribe();
    this.countdownSubscription.unsubscribe();
  }

}