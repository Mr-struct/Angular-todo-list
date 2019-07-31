import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ListService } from "../list.service";
import { Todo } from "../models/Todo";
@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"]
})
export class AddTodoComponent implements OnInit {
  @Output() updateList = new EventEmitter<boolean>();
  item: Todo;
  public checkoutForm;
  constructor(
    private formBuilder: FormBuilder,
    private listService: ListService
  ) {
    this.checkoutForm = this.formBuilder.group({
      text: ""
    });
  }

  onSubmit(customerData) {
    var today = new Date();

    let todo = {
      id: this.listService.getList().length,
      text: customerData.text,
      done: false,
      time:
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
      date: today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear()
    };
    this.listService.addTodo(todo);
    this.checkoutForm.reset();
    this.updateList.emit(true);
  }

  ngOnInit() {}
}
