import { TodoActionTypes } from './todo.actions';
import { Injectable } from '@angular/core';
import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../../../app/core/local-storage/local-storage.service';
import { TODO_KEY, TodoState } from './todo.reducer';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions<Action>, private localStorageService: LocalStorageService, private store$: Store<TodoState>) {}

  @Effect({ dispatch: false })
  persistTodos(): Observable<Action> {
    return (
      this.actions$
        .ofType(TodoActionTypes.ADD_TODO)
        // https://blog.angularindepth.com/start-using-ngrx-effects-for-this-e0b2bd9da165
        .withLatestFrom(this.store$)
        .switchMap(([action, storeState]) => {
          this.localStorageService.setItem(TODO_KEY, storeState[TODO_KEY]);
          return Observable.of();
        })
    );
  }
}
