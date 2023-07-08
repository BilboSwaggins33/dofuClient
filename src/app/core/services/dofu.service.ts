import { BehaviorSubject, Subject } from "rxjs";
import { Task } from "../models/task.model";
import { Injectable } from "@angular/core";

@Injectable()
export class DofuService {

  selectedTask: Subject<Task> = new Subject<Task>();

  constructor() {}

  public setCurrentTask(task: Task) {
    this.selectedTask.next(task)
  }

}
