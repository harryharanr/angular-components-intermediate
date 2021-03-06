import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-alert-view',
  templateUrl: './simple-alert-view.component.html',
  styleUrls: ['./simple-alert-view.component.scss']
})
export class SimpleAlertViewComponent {
  @Input() public message: string;
  @Input() public title: string;
  public visible: boolean = false;

  public dismiss() {
    this.visible = false;
  }

  public show() {
    this.visible = true;
  }

}
