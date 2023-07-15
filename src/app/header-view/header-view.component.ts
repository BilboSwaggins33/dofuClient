import { Component, OnInit } from "@angular/core";
import { DofuService } from "../core/services/dofu.service";
import { add, format } from "date-fns";
import { AuthService } from "../core/services/auth.service";
@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.css'],
})
export class HeaderViewComponent implements OnInit {

  headerRange: string = ""
  date: Date
  constructor(private dofuService: DofuService, private authStateService: AuthService) {
    this.date = new Date(new Date().toLocaleDateString());

  }

  ngOnInit() {
    this.dofuService.selectedDate.subscribe((d: Date) => {
      this.date = d;
      this.setHeaderRange()
    })
  }

  nextDate() {
    this.dofuService.setCurrentDate(add(this.date, {days: 1}))
  }

  beforeDate() {
    this.dofuService.setCurrentDate(add(this.date, {days: -1}))
  }

  setHeaderRange() {
    this.headerRange = `${format(add(this.date, {days: -1}), "MMMM")}  ${format(add(this.date, {days: -1}), "d")}-${format(add(this.date, {days: 3}), "d")}, ${format(add(this.date, {days: -1}), "yyyy")}`
  }

  logout() {
    this.authStateService.logout();
  }

}
