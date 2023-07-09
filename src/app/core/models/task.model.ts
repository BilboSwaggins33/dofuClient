export class Task {
  id: number | undefined
  name: string = "";
  description: string = "";
  createdAt: Date = new Date(new Date().toLocaleDateString());
  dueDate: Date = new Date(new Date().toLocaleDateString());
  complete: boolean = false;
  constructor(data: any) {
    Object.assign(this, data)
  }


}

