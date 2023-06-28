import { Component, Input, OnInit } from "@angular/core";
import {Task} from "../core/models/task.model";
import {TaskService} from "../core/services/task.service";
import { DofuService } from "../core/services/dofu.service";
import { Dofu } from "../core/models/dofu.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-dofu-view',
  templateUrl: './dofu-view.component.html',
  styleUrls: ['./dofu-view.component.css'],
  providers: [TaskService, DofuService]
})
export class DofuViewComponent implements OnInit{
  tasks: Task[] = []
  @Input() date!: Date

  constructor(private dofuService: DofuService) {
  }

  ngOnInit() {
    // this.dofuService.getDofu(this.date).subscribe((result: Task[]) => {
    //   this.tasks = result
    // })
  }

}
