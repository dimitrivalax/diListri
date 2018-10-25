import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo';

@Injectable()
export class Todos {

  todos: Todo[] = [];

  defaultTodo: any = {
    "title": "Todo 1",
    "content": "Something to do 1"
  };


  constructor() {
    let todos = [
      {
        "id": "1",
        "title": "Todo 1",
        "content": "Something to do 1"
      },
      {
        "id": "2",
        "title": "Todo 2",
        "content": "Something to do 2"
      },
      {
        "id": "3",
        "title": "Todo 3",
        "content": "Something to do 3"
      },
      {
        "id": "4",
        "title": "Todo 4",
        "content": "Something to do 4"
      },
      {
        "id": "5",
        "title": "Todo 5",
        "content": "Something to do 5"
      },
      {
        "id": "6",
        "title": "Todo 6",
        "content": "Something to do 6"
      },
      {
        "id": "7",
        "title": "Todo 7",
        "content": "Something to do 7"
      }
    ];

    for (let todo of todos) {
      this.todos.push(todo);
    }
  }

   query(params?: any) {
    if (!params) {
      return this.todos;
    }

    return this.todos.filter((todo) => {
      for (let key in params) {
        let field = todo[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return todo;
        } else if (field == params[key]) {
          return todo;
        }
      }
      return null;
    });
  }

  add(todo: Todo) {
    this.todos.push(todo);
  }

  update(todo: Todo) {
    this.todos.push(todo);
  }

  delete(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  
}
