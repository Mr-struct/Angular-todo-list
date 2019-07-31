import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/Todo";
import { ListService } from "../list.service";
@Component({
  selector: "app-main-todo-app",
  templateUrl: "./main-todo-app.component.html",
  styleUrls: ["./main-todo-app.component.css"]
})
export class MainTodoAppComponent implements OnInit {
  constructor(private listService: ListService) {}

  ngOnInit() {}
}
