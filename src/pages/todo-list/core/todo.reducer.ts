import { v4 as uuid } from 'uuid';
import { Todo } from "../../../models/todo";
import { TodoActionTypes } from './todo.actions';

export const TODO_KEY = 'STORE_TODO';

export const selectTodos = (state: AppState) => state.todos;

export interface AppState {
  todos: Todo[];
}

const initialState = [
];

export function todoReducer(state = initialState, action) {
  console.log(action);
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        action.payload.id = uuid();
        return [...state, ...action.payload];
      case TodoActionTypes.UPDATE_TODO:
        return [...state, ...action.payload];
      case TodoActionTypes.DELETE_TODO:
        return state.filter(todo => todo.id !== action.payload);  
      default:
        return state;
    }
  
}