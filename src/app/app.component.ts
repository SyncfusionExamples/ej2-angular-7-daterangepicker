import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public start: Date = new Date ("10/07/2017"); 
  public end: Date = new Date ("11/25/2017");
  constructor () {}
}
