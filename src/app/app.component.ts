import { Component } from "@angular/core";
import { Task } from "./core/models/task.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "dofuCli";

  constructor() {
  }
}
