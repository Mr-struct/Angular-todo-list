import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/Todo";
import { ListService } from "../list.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Array<Todo>;
  constructor(private listService: ListService) {
    this.todos = listService.getList();
  }

  ngOnInit() {}
}
