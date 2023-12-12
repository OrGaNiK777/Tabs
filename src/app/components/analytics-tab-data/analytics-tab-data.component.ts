import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnalyticsTabData } from 'src/app/models/AnalyticsTabData';
import { tabs } from 'src/app/constants/tabs';

@Component({
  selector: 'app-analytics-tab-data',
  templateUrl: './analytics-tab-data.component.html',
  styleUrls: ['./analytics-tab-data.component.css'],
})
export class AnalyticsTabDataComponent implements OnInit {
  currentTabId!: string;
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
