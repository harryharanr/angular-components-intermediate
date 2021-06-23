import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from "./tab.interface";
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

  @Input() title:string;
  @Output() onClick = new EventEmitter<void>();

  public isActive:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickTabContent() {
    this.onClick.emit();
  }

}
