import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { ListService } from "../list.service";
import { FILTERTYPE } from "../models/constants";
@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  filterType = FILTERTYPE;
  @Input() todo: Todo;
  @Input() time: String = "not init";
  @Output() updateList = new EventEmitter<string>();

  constructor(private listService: ListService) {}

  public doneTodo(filter): void {
    this.listService.doneTodo(this.todo);
    this.updateList.emit(filter);
  }

  public deleteTodo(filter): void {
    this.listService.deleteTodo(this.todo);
    this.updateList.emit(filter);
  }
  ngOnInit() {}
}
