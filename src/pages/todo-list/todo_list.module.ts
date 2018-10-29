import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosPage } from './todo_list';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './core/todo.effect';
import { StoreModule } from '@ngrx/store';
import { TODO_KEY, todoReducer } from './core/todo.reducer';
import { metaReducers } from '../../app/core/core.module';


@NgModule({
  declarations: [
    TodosPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosPage),
    TranslateModule.forChild(),
    StoreModule.forFeature(TODO_KEY, {
      todo: todoReducer,
    },
    { metaReducers }),
    EffectsModule.forFeature([TodoEffects])
  ],
  exports: [
    TodosPage
  ]
})
export class TodosPageModule { }
