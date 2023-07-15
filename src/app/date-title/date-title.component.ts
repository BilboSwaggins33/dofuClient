import { Component, Input, OnInit } from "@angular/core";
import { format } from "date-fns";

@Component({
  selector: 'app-date-title',
  templateUrl: './date-title.component.html',
  styleUrls: ['./date-title.component.css']
})
export class DateTitleComponent implements OnInit{
  @Input() date!: Date
  day!: string
  dayOfWeek!: string
  month!: string
  year!: string
  color: string
  constructor() {
    this.color = '#3b46a7'
  }

  ngOnInit() {
    [this.month, this.day, this.dayOfWeek, this.year] = format(this.date, "MMMM/d/eeee/yyyy").split(`/`)
  }

  isToday() {
    return format(this.date, "M/d/yyyy") == new Date().toLocaleDateString()
  }
}
