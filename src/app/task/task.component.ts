import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Task } from "../core/models/task.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {TaskService} from "../core/services/task.service";
import { take } from "rxjs";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  @Input() id!: number;
  task: Task = new Task({});


  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    // this.taskService.getTaskById(this.id).pipe(take(1)).subscribe((task: Task) => {
    //   this.task = task;
    //  });
    if (this.id != null) {
      this.taskService.getTaskById((this.id)).subscribe((task: Task) => {
        this.task = task
      })
    }
  }

}
