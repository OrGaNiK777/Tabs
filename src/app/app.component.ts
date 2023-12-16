import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { AnalyticsTabData } from './models/AnalyticsTabData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  currentTabId!: string;
  currentContext!: string;

  tabs: AnalyticsTabData[] = [];

  currentClasses: Record<string, boolean> = {};
  tab1!: boolean;
  tab2!: boolean;
  tab3!: boolean;
  tab4!: boolean;
  tab5!: boolean;

  addTab(id: string) {
    this.currentTabId = id;
    if (+this.currentTabId === 1) {
      this.tab1 = true;
    }
    if (+this.currentTabId === 2) {
      this.tab2 = true;
    }
    if (+this.currentTabId === 3) {
      this.tab3 = true;
    }
    if (+this.currentTabId === 4) {
      this.tab4 = true;
    }
    if (+this.currentTabId === 5) {
      this.tab5 = true;
    }
  }

  setCurrentClasses() {
    this.currentClasses = {
      tab1: this.tab1,
      tab2: this.tab2,
      tab3: this.tab3,
      tab4: this.tab4,
      tab5: this.tab5,
    };
  }

  addContent(id: string) {
    this.currentContext = id;
  }

  ngOnInit(): void {}
  ngDoCheck() {
    this.setCurrentClasses();
    this.tab1 = false;
    this.tab2 = false;
    this.tab3 = false;
    this.tab4 = false;
    this.tab5 = false;
  }
}
