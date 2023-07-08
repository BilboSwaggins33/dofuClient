import { Component } from "@angular/core";
import { Dofu } from "../core/models/dofu.model";
import { add } from "date-fns";

@Component({
  selector: "app-calendar-view",
  templateUrl: "./calendar-view.component.html",
  styleUrls: ["./calendar-view.component.css"]
})
export class CalendarViewComponent {
  dofus: Dofu[];
  d: Date;

  constructor() {
    this.d = new Date(new Date().toLocaleDateString());
    this.dofus = this.getDates(this.d);
  }

  getDates(d: Date) {
    return [new Dofu(add(d, {days: -1})), new Dofu(d), new Dofu(add(d, {days: 1})),
      new Dofu(add(d, {days: 2})), new Dofu(add(d, {days: 3}))];
  }

}
