import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/Todo';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  inputText: string;
  beforeEditeCaches: string;
  constructor() {}

  ngOnInit() {
    this.beforeEditeCaches = '';
    this.inputText = '';
    this.todos = [
      {
        id: 1,
        title: 'Study Angular',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Study React',
        completed: false,
        editing: false,
      },
      {
        id: 3,
        title: 'Study Vue.js',
        completed: false,
        editing: false,
      },
    ];
  }

  addTodo(): void {
    if (this.inputText === '') {
      return;
    }
    this.todos.push({
      id: 4,
      title: this.inputText,
      completed: false,
      editing: false,
    });
    this.inputText = '';
  }

  editeTodo(todo: Todo): void {
    this.beforeEditeCaches = todo.title;
    todo.editing = true;
  }

  doneEdite(todo: Todo): void {
    if (todo.title === '') {
      todo.title = this.beforeEditeCaches;
    }
    todo.editing = false;
  }

  cancelEditeByEsc(todo: Todo): void {
    todo.title = this.beforeEditeCaches;

    todo.editing = false;
  }

  deleteTodo(id): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  remain(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter((todo) => todo.completed).length > 0;
  }
  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}
