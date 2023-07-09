import { Component, Input, OnInit } from "@angular/core";
import { Task } from "../core/models/task.model";
import { TaskService } from "../core/services/task.service";
import { Dofu } from "../core/models/dofu.model";
import { format } from "date-fns";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-dofu-view",
  templateUrl: "./dofu-view.component.html",
  styleUrls: ["./dofu-view.component.css"],
})
export class DofuViewComponent implements OnInit {
  @Input() dofu: Dofu;
  @Input() date!: Date;
  selectedTask: Task | undefined | null;

  constructor(private taskService: TaskService) {
    this.dofu = new Dofu(this.date);
  }

  ngOnInit() {
    this.taskService.findTasksByDate(format(this.date, "yyyy-MM-dd")).subscribe((result) => {
      this.dofu.set(result);
    });


    this.taskService.selectedTask.subscribe((selectedTask) => {
      this.selectedTask = selectedTask;
    })
  }

  taskAdded(task: Task) {
    task.dueDate = this.date;
    this.taskService.addTask(task).subscribe((result) => {
      this.dofu.addTask(result);
    });
  }

  taskUpdated(task: Task) {
    this.taskService.updateTask(task).subscribe(() => {
      this.dofu.updateTask(task);
    });
  }

  taskDeleted(task: Task) {
    this.taskService.deleteTaskById(task.id!).subscribe(() => {
      this.dofu.deleteTask(task);
    })
  }


  drop(event: CdkDragDrop<Task[]>) {
    if ('id' in event.item.data) {
      const t = {...event.item.data, dueDate: new Date(this.date.toLocaleDateString())};
      this.taskService.updateTask(t).subscribe((result) => {
        this.dofu.addTask(result);
      });
    }

  }

  checkDrag(task: Task) {
    if (task.hasOwnProperty('id') && !(this.selectedTask == null)) {
        if (this.selectedTask.id == this.selectedTask.id) {
          return true;
        }
    } else if (!task.hasOwnProperty('id')) {
      return true;
    }
    return false;
  }

  dragDropped(task: Task) {
    this.dofu.deleteTask(task);
  }


}
