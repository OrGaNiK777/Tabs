import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AnalyticsTabData } from 'src/app/models/AnalyticsTabData';
import { tabs } from '../../consctants/tabs';

@Component({
  selector: 'app-analytics-tab-data',
  templateUrl: './analytics-tab-data.component.html',
  styleUrls: ['./analytics-tab-data.component.css'],
})
export class AnalyticsTabDataComponent implements OnInit {
  currentTabId!: string;
  currentContent!: string;
  public tabs: AnalyticsTabData[] = [];

  ngOnInit(): void {
    this.getTabs();
  }
  getTabs() {
    this.tabs = tabs;
  }

  public async onClickTab(i: any): Promise<void> {
    this.currentTabId = this.tabs[i].tabId;
    this.currentContent = this.tabs[i].selectContent;
    console.log(this.currentTabId);
    console.log(this.currentContent)
  }
}
