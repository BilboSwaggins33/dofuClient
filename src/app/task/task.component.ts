import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Task } from "../core/models/task.model";
import { TaskService } from "../core/services/task.service";
@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @Input() id: number | undefined;
  @Output() onTaskAdded = new EventEmitter<Task>
  @Output() onTaskUpdated = new EventEmitter<Task>
  @Output() onTaskDeleted = new EventEmitter<Task>
  task: Task = new Task({});
  hovering = false;
  editMode = false;
  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    if (this.id != undefined) {
      this.taskService.getTaskById((this.id)).subscribe((task: Task) => {
        this.task = task;
      });
    }

  }


  onBlur(value: String) {
    if (!(value?.trim().length === 0) && this.id == undefined) {
      let t = new Task({name: value});
      this.onTaskAdded.emit(t)
    } else if (!(value?.trim().length === 0) && this.id != undefined){
      this.onTaskUpdated.emit(this.task);
    }

    this.taskService.setCurrentTask(null);
    this.editMode = false;
  }

  hoverCheck(event: boolean ) {
    this.hovering = event
  }

  setEditMode(event: boolean) {
    this.editMode = event;
    if (this.task.hasOwnProperty('id')) {
      this.taskService.setCurrentTask(this.task);
    }
  }

  toggleComplete(event: string) {
    if (event == "click") {
      if (!this.editMode && this.task.hasOwnProperty('id')) {
        this.task.complete = !this.task.complete
        this.onTaskUpdated.emit(this.task);
      }
    }

  }


}
