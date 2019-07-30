import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ListService } from "../list.service";
import { Todo } from "../models/Todo";
@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"]
})
export class AddTodoComponent implements OnInit {
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
    // Process checkout data here
    console.warn("Your order has been submitted", customerData);
    this.checkoutForm.reset();
  }

  ngOnInit() {}
}
