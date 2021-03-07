import { Component } from '@angular/core';

@Component (
  {
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
  }
)

export class toDoListComponent {
  todoList: String[] = ['Coffee', 'Breakfast'];
  task: String;

  addTask() {
    this.todoList.push(this.task);
  }
}
