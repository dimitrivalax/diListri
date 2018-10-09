import { Action } from "@ngrx/store";
import * as TodoActions from "../actions/todo.actions";
import { Todo } from '../../models/todo';



export type Action = TodoActions.All;

export const selectTodos = (state: AppState) => state.todos;



export interface AppState {
  todos: Todo[];
}

const initialState = [
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

export function todoReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return [...state, ...action.payload];

    case TodoActions.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    default:
      return state;
  }
}