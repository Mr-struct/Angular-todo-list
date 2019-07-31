import { Injectable } from "@angular/core";
import { Todo } from "./models/Todo";
import { Map } from "immutable";
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
    this.list.push(item);
  }

  doneTodo(todo: Todo) {
    const index = this.list.indexOf(todo);
    this.list[index].done = true;
  }

  deleteTodo(todo) {
    const index = this.list.indexOf(todo);
    this.list.splice(index, 1);
  }

  filterByNotDoneTodo() {
    return this.list.filter(x => !x.done);
  }

  filterByDoneTodo() {
    return this.list.filter(x => x.done);
  }
}
