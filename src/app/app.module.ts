import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./todos/todos.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AboutComponent } from "./about/about.component";
import { ListService } from "./list.service";
import { AddTodoComponent } from "./add-todo/add-todo.component";
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    NavBarComponent,
    AboutComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: "",
        component: TodosComponent
      },
      {
        path: "about",
        component: AboutComponent
      }
    ])
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
