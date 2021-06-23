import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  public isAddTimerVisible: boolean = false;
  public isEndTimerAlertVisible: boolean = false;
  public time: number = 0;
  public timers: Array<number> = [];

  @ViewChild(SimpleAlertViewComponent, { static: true }) simpleAlert: SimpleAlertViewComponent;

  constructor() {
    this.timers = [3, 3, 185];
  }

  ngAfterContentInit() {
    console.log(this.simpleAlert);
    this.simpleAlert.show();
    this.simpleAlert.title = 'Hi';
    this.simpleAlert.message = 'Hello World';
  }

  logCountDownEnd() {
    console.log('Countdown ended!');
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
  }

  public hideAddTimer() {
    this.isAddTimerVisible = false;
  }

  public showEndTimerAlert() {
    this.isEndTimerAlertVisible = true;
  }

  public hideEndTimerAlert() {
    this.isEndTimerAlertVisible = false;
  }

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }

}
