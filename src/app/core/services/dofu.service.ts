import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class DofuService {

  selectedDate: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date(new Date().toLocaleDateString()));

  constructor() {
  }

  public setCurrentDate(date: Date) {
    this.selectedDate.next(date)
  }

}
