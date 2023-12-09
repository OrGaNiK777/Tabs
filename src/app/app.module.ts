import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnalyticsTabDataComponent } from './components/analytics-tab-data/analytics-tab-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsTabDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
