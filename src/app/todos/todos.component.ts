import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../models/Todo";
import { ListService } from "../list.service";
import { FILTERTYPE } from "../models/constants";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Array<Todo>;
  filter: string;

  constructor(private listService: ListService) {
    this.todos = listService.getList();
  }

  setFilter(type) {
    this.filter = type;
    console.log(type);
    switch (type) {
      case FILTERTYPE.NOT_DONE_TODOS: {
        this.todos = this.listService.getList();
        this.todos = this.listService.filterByNotDoneTodo();
        break;
      }
      case FILTERTYPE.DONE_TODOS: {
        this.todos = this.listService.getList();
        this.todos = this.listService.filterByDoneTodo();
        break;
      }
      case FILTERTYPE.ALL_TODOS:
        this.todos = this.listService.getList();
        break;
      default:
        this.todos = this.todos;
        break;
    }
  }

  onUpdateList(event: boolean) {
    event ? (this.todos = this.listService.getList()) : alert();
  }
  ngOnInit() {}
}
