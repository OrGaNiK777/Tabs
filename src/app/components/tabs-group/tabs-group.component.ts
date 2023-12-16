import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnalyticsTabData } from 'src/app/models/AnalyticsTabData';
import { tabs } from 'src/app/constants/tabs';

@Component({
  selector: 'app-tabs-group',
  templateUrl: './tabs-group.component.html',
  styleUrls: ['./tabs-group.component.css'],
})
export class TabGroup implements OnInit {
  currentTabId!: string;
  currentContent!: string;
  public tabs: AnalyticsTabData[] = [];

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(id: string) {
    this.newItemEvent.emit(id);
  }

  ngOnInit(): void {
    this.tabs = tabs;
  }

  public async onClickTab(i: any): Promise<void> {
    this.currentTabId = this.tabs[i].tabId;
    this.addNewItem(this.currentTabId);
  }
}
