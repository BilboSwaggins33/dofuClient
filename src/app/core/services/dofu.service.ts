import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Task } from "../models/task.model";
import {format} from 'date-fns'
import {TaskService} from "./task.service";

@Injectable({
  providedIn: 'root'
})
export class DofuService {
  dofuPath = '/api/dofu'
  constructor(private httpClient: HttpClient) { }


  // getDofu(date: Date): Observable<Task[]> {
  //   return this.httpClient.get<Task[]>(`${environment.apiURL}${this.dofuPath}/${format(date, 'yyyy-MM-dd')}`);
  // }

}
