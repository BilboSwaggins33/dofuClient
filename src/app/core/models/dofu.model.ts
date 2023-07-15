import { Task } from "./task.model";
export class Dofu {
  default = 10
  tasks: Task[]
  constructor(public date: Date) {
    this.tasks = new Array<Task>(this.default).fill(new Task({}));
  }

  set(arr: Task[]) {
    this.tasks = new Array<Task>(this.default).fill(new Task({}));
    for (let i = 0; i < arr.length; i++) {
      this.tasks[i] = arr[i];

    }
  }

  addTask(task: Task) {
    const arr = this.tasks.filter((t) => 'id' in t)
    arr.push(task)
    this.set(arr)
  }

  updateTask(updatedTask: Task) {
    const existingTask = this.tasks.find((t) => t.id == updatedTask.id)!;
    Object.assign(existingTask, updatedTask);
  }

  deleteTask(task: Task) {
    const arr = this.tasks.filter((t) => 'id' in t)
    this.set(arr.filter((t) => t.id != task.id))
  }


}
