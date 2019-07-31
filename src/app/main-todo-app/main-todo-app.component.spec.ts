import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTodoAppComponent } from './main-todo-app.component';

describe('MainTodoAppComponent', () => {
  let component: MainTodoAppComponent;
  let fixture: ComponentFixture<MainTodoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTodoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTodoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
