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

  @Output() newTab = new EventEmitter<string>();
  @Output() newContent = new EventEmitter<string>();

  addNewTab(id: string) {
    this.newTab.emit(id);
  }
  addNewContent(id: string) {
    this.newContent.emit(id);
  }

  ngOnInit(): void {
    this.tabs = tabs;
  }

  public async onClickTab(i: any): Promise<void> {
    this.currentTabId = this.tabs[i].tabId;
    this.currentContent = this.tabs[i].selectContent;
    this.addNewTab(this.currentTabId);
    this.addNewContent(this.currentContent);
  }
}
