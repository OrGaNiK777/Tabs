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
  tab1: boolean = false;
  tab2: boolean = false;
  tab3: boolean = false;
  tab4: boolean = false;
  tab5: boolean = false;

  addTab(id: string) {
    this.currentTabId = id;
    if (+this.currentTabId === 1) {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
      this.tab5 = false;
    }
    if (+this.currentTabId === 2) {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.tab4 = false;
      this.tab5 = false;
    }
    if (+this.currentTabId === 3) {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
      this.tab5 = false;
    }
    if (+this.currentTabId === 4) {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
      this.tab5 = false;
    }
    if (+this.currentTabId === 5) {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
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
  ngDoCheck() {this.setCurrentClasses()}
}
