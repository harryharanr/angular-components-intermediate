import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimerComponent } from './timer/timer.component';
import { AlertViewComponent } from './alert-view/alert-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ProgressBarComponent,
    TimerComponent,
    AlertViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
