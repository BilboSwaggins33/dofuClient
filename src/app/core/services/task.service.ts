import { Injectable } from "@angular/core";
import { catchError, map, Observable, retry, Subject, throwError } from "rxjs";
import { Task } from "../models/task.model";
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  taskPath = "/api/task";
  selectedTask: Subject<Task | undefined | null> = new Subject<Task | undefined | null>();

  constructor(public httpClient: HttpClient) {
  }

  public setCurrentTask(task: Task | undefined | null) {
    this.selectedTask.next(task)
  }


  getTaskById(taskId: number): Observable<Task> {
    return this.httpClient.get<Task>(`${environment.apiURL}${this.taskPath}/${taskId}`);

  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${environment.apiURL}${this.taskPath}`, task).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${environment.apiURL}${this.taskPath}`, task).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteTaskById(taskId: number) {
    return this.httpClient.delete(`${environment.apiURL}${this.taskPath}/${taskId}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  findTasksByDate(date: String) {
    const params = new HttpParams().set('date', String(date));
    return this.httpClient.get<Task[]>(`${environment.apiURL}${this.taskPath}/findByDate`, {
      responseType: 'json',
      params
    });
  }

  private handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
