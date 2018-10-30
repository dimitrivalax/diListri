import { Action } from "@ngrx/store";
import { Todo } from "../../../models/todo";
import { TodoState } from "./todo.reducer";

export enum TodoActionTypes {
  STORE_TODO_STATE = '[Todo] Store todo state',
  ADD_TODO = '[Todo] Add',
  UPDATE_TODO = '[Todo] Update',
  DELETE_TODO = '[Todo] Delete'
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.ADD_TODO;
  constructor(public payload: Todo) {}
}

export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO;
  constructor(public payload: Todo) {}
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DELETE_TODO;
  constructor(public payload: String) {}
}

export class StoreTodoState implements Action {
  readonly type = TodoActionTypes.STORE_TODO_STATE;
  constructor(public payload: TodoState) {}
}

export type TodoActions = AddTodo | DeleteTodo | StoreTodoState;