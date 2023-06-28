// @ts-ignore
import {v4 as uuidv4} from 'uuid'
export class Task {
  id: number | undefined
  name: string = "";
  description: string = "";
  createdAt: Date = new Date();
  dueDate: Date = new Date();
  complete: boolean = false;
  constructor(data: any) {
    Object.assign(this, data)
  }


}

// class Item {
//   public id: number;
//   public updatedAt?: number;
//   public createdAt?: number;
//   constructor(data: Pick<Item, "id" | "updatedAt" | "createdAt">) {
//     Object.assign(this, data);
//   }
//   method() {}
// }
