import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Task } from "../models/task.model";
import { HttpClient, HttpRequest, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  taskPath = "/api/tasks";

  constructor(private httpClient: HttpClient) {

  }

  getTaskById(taskId: number): Observable<Task> {
    return this.httpClient.get<Task>(`${environment.apiURL}${this.taskPath}/${taskId}`);

  }

  addTask(task: Task): Observable<Task> {
    const taskRequest = new Task(task);
    return this.httpClient.post<Task>(`${environment.apiURL}${this.taskPath}/save`, taskRequest).pipe(map((createdTask: Task) => new Task({...taskRequest, ...createdTask})));
  }

  update(task: Task): Observable<Task> {
    const taskRequest = new Task(task);

    return this.httpClient.post<Task>(`${environment.apiURL}${this.taskPath}/save`, taskRequest).pipe(map((updatedTask: Task) => new Task({...taskRequest, ...updatedTask})));
  }

  deleteById(taskId: string) {
    return this.httpClient.delete(`${environment.apiURL}${this.taskPath}/${taskId}`)
  }
}
