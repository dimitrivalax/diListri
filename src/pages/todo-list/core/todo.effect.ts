import { TodoActionTypes, AddTodo } from './todo.actions';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import { LocalStorageService } from '../../../app/core/local-storage/local-storage.service';
import { TODO_KEY } from './todo.reducer';



@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistTodos(): Observable<Action> {
    return this.actions$
      .ofType(TodoActionTypes.ADD_TODO)
      .pipe(
        tap((action: AddTodo) =>
          this.localStorageService.setItem(TODO_KEY, action.payload.todos)
        )
      );
  }
}
