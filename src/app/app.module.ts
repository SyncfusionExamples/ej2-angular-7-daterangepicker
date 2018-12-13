import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
