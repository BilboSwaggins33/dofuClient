import { Component } from "@angular/core";
import { Task } from "./core/models/task.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "dofuCli";
  task: Task

  constructor() {
    this.task = new Task({name: "task 1", description: 'description 1'});
  }
}
