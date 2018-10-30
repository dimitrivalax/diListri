import { TodoActionTypes, AddTodo } from './todo.actions';
import { Injectable } from '@angular/core';
import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import { LocalStorageService } from '../../../app/core/local-storage/local-storage.service';
import { TODO_KEY, TodoState, selectTodoState } from './todo.reducer';



@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private store$: Store<TodoState>
  ) {}

  @Effect({ dispatch: false })
  persistTodos(): Observable<Action> {
    return this.actions$
      .ofType(TodoActionTypes.ADD_TODO)
      // https://blog.angularindepth.com/start-using-ngrx-effects-for-this-e0b2bd9da165
      .withLatestFrom(this.store$.pipe(select(selectTodoState))),
      map([payload, todoState] => {
        this.localStorageService.setItem(TODO_KEY, todoState)
      })
      
  }
}
