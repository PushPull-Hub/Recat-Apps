import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { FailedAlertComponent } from './components/failed-alert/failed-alert.component';

@NgModule({
  declarations: [AppComponent, SuccessAlertComponent, FailedAlertComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
