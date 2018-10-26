import { Action } from "@ngrx/store";
import { Todo } from "../../../models/todo";

export enum TodoActionTypes {
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

export type TodoActions = AddTodo | DeleteTodo ;