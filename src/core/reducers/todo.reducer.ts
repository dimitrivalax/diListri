import { Action } from "@ngrx/store";
import * as TodoActions from "../actions/todo.actions";
import { Todo } from '../../models/todo';



export type Action = TodoActions.All;

export const selectTodos = (state: AppState) => state.todos;



export interface AppState {
  todos: Todo[];
}

const initialState = [
];

export function todoReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return [...state, ...action.payload];
    case TodoActions.UPDATE_TODO:
      return [...state, ...action.payload];
    case TodoActions.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}