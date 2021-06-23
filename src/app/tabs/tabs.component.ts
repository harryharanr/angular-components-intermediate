import { Component, ContentChildren, QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabComponent } from '../tab/tab.component';
import { Tab } from '../tab/tab.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit, OnDestroy {

  @ContentChildren(TabComponent) public tabs:QueryList<TabComponent>;
  
  private tabClickSubscriptions: Subscription[] = [];

  ngOnDestroy() {
    if(this.tabClickSubscriptions) {
      this.tabClickSubscriptions.forEach(subscription => {
        subscription.unsubscribe();
      });
    }
  }

  ngAfterContentInit() {
    this.tabs.forEach(tab => {
      let subscription = tab.onClick.subscribe(() => {
        console.log(`tab ${tab.title} content clicked`);
      })
      this.tabClickSubscriptions.push(subscription);
    });
    this.selectTab(this.tabs.first);
  }

  selectTab(tab:Tab) {
    this.tabs.forEach(tab => tab.isActive = false);
    tab.isActive = true;
  }
  
}
