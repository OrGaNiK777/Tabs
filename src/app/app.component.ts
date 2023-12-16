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

  tabs: AnalyticsTabData[] = [];

  addItem(id: string) {
    this.currentTabId = id;
  }

  ngOnInit(): void {
  }
}
