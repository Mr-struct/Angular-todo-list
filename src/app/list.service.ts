import { Injectable } from "@angular/core";
import { Todo } from "./models/Todo";
@Injectable({
  providedIn: "root"
})
export class ListService {
  public list = [];
  constructor() {}

  getList() {
    return this.list;
  }
  addTodo(item: Todo) {
    item.id = this.list.length;
    item.done = false;
    this.list.push(item);
  }

  doneTodo(id: number) {
    this.list[id].done = true;
  }

  deleteTodo(id: number) {
    this.list.splice(id, 1);
  }
}
