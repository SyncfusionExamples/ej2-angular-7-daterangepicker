import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Imported DateRangePicker module from ej2-angular-calendars package
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    //Registering DateRangePicker Module 
    DateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
