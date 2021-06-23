import { Component, ViewChild, ViewChildren, QueryList,  AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, AfterViewInit {
  public isAddTimerVisible: boolean = false;
  public time: number = 0;
  public timers: Array<number> = [];

  @ViewChildren(SimpleAlertViewComponent) simpleAlerts: QueryList<SimpleAlertViewComponent>;
  @ViewChild('timerInput') timerInput: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) {
    this.timers = [3, 3, 185];
  }

  ngAfterViewInit() {
    console.log(this.timerInput);
    this.timerInput.nativeElement.setAttribute("placeholder","Enter Seconds");
    this.timerInput.nativeElement.classList.add("time-in");
    this.simpleAlerts.forEach(item => {
      if(!item.title) {
        item.title = 'Hi';
        item.message = 'Hello World';
        item.show();
      }
    });

    this.cdRef.detectChanges();
  }

  ngAfterContentInit() {
   
  }

  logCountDownEnd() {
    console.log('Countdown ended!');
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
    setTimeout(() => {
      this.timerInput.nativeElement.focus();
    });
  }

  public hideAddTimer() {
    this.isAddTimerVisible = false;
  }

  public showEndTimerAlert() {
    this.simpleAlerts.first.show();
  }

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }

}
