import { Component, OnInit } from '@angular/core';
import { tabs } from 'src/app/constants/tabs';
import { AnalyticsTabData } from './models/AnalyticsTabData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentTabId!: string;
  currentTabId1!: string;
  currentTabId2!: string;
  currentTabId3!: string;
  currentTabId4!: string;
  currentTabId5!: string;
  currentTabId6!: string;
  currentTabId7!: string;
  currentTabId8!: string;
  currentTabId9!: string;
  currentTabId10!: string;

  tabs: AnalyticsTabData[] = [];

  addItem(id: string) {
    this.currentTabId = id;
  }

  ngOnInit(): void {
    this.tabs = tabs;
    this.currentTabId1 = this.tabs[0].tabId;
    this.currentTabId2 = this.tabs[1].tabId;
    this.currentTabId3 = this.tabs[2].tabId;
    this.currentTabId4 = this.tabs[3].tabId;
    this.currentTabId5 = this.tabs[4].tabId;
    this.currentTabId6 = this.tabs[5].tabId;
    this.currentTabId7 = this.tabs[6].tabId;
    this.currentTabId8 = this.tabs[7].tabId;
    this.currentTabId9 = this.tabs[8].tabId;
    this.currentTabId10 = this.tabs[9].tabId;
  }
}
