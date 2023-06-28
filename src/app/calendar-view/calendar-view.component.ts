import { Component } from '@angular/core';
import { D } from "@angular/cdk/keycodes";

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent {
  dates: Date[]

  constructor() {
    this.dates = [new Date(), new Date, new Date(), new Date()]
  }
}
