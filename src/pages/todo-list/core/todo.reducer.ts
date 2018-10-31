import { v4 as uuid } from 'uuid';
import { Todo } from "../../../models/todo";
import { TodoActionTypes } from './todo.actions';

export const TODO_KEY = 'todo_feature';

export const selectTodos = (state: TodoState) => state[TODO_KEY].todoReducer.items;
export const selectTodoState = (state: TodoState) => state[TODO_KEY].todoReducer;

export interface TodoState {
  items: Todo[];
}

const initialState = {items : []};

export function todoReducer(state = initialState, action) {
  console.log(action);
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        action.payload.id = uuid();
        state.items = [...state.items, ...action.payload]
        return state;
      case TodoActionTypes.UPDATE_TODO:
        return [...state.items, ...action.payload];
      case TodoActionTypes.DELETE_TODO:
        return state.items.filter(todo => todo.id !== action.payload);  
      default:
        return state;
    }
  
}