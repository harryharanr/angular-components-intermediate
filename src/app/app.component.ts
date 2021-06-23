import { Component, ViewChild, AfterContentInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
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

  @ViewChild('timerInput') timerInput: ElementRef;

  constructor(private renderer: Renderer2) {
    this.timers = [3, 3, 185];
  }

  ngAfterViewInit() {
    
    this.renderer.setAttribute(this.timerInput.nativeElement, "placeholder", "Enter Seconds");
    this.renderer.addClass(this.timerInput.nativeElement, "time-in");

    // this.timerInput.nativeElement.setAttribute("placeholder","Enter Seconds");
    // this.timerInput.nativeElement.classList.add("time-in");

  }

  ngAfterContentInit() {
   
  }

  logCountDownEnd() {
    console.log('Countdown ended!');
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
    setTimeout(() => {
      this.renderer.selectRootElement(this.timerInput.nativeElement).focus();
    });
  }

  public hideAddTimer() {
    this.isAddTimerVisible = false;
  }

  public showEndTimerAlert() {
    // this.simpleAlerts.first.show();
  }

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }

}
