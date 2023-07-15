import { Component, OnInit } from "@angular/core";
import { Dofu } from "../core/models/dofu.model";
import { add } from "date-fns";
import { DofuService } from "../core/services/dofu.service";

@Component({
  selector: "app-calendar-view",
  templateUrl: "./calendar-view.component.html",
  styleUrls: ["./calendar-view.component.css"],
})
export class CalendarViewComponent implements OnInit {
  dofus: Dofu[];
  date: Date;

  constructor(private dofuService: DofuService) {
    this.date = new Date(new Date().toLocaleDateString());
    this.dofus = this.getDates(this.date);
  }

  ngOnInit() {
    this.dofuService.selectedDate.subscribe((date: Date) => {
      this.date = date;
      this.dofus = this.getDates(date)
    })
  }

  getDates(d: Date) {
    return [new Dofu(add(d, {days: -1})), new Dofu(d), new Dofu(add(d, {days: 1})),
      new Dofu(add(d, {days: 2})), new Dofu(add(d, {days: 3}))];
  }

  isLast(dofu: Dofu) {
    return dofu.date == this.dofus.at(-1)!.date;
  }


}
