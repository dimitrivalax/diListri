import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TodosPage } from './todo_list';
import { todoReducer } from '../core/todo.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    TodosPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosPage),
    TranslateModule.forChild(),
    StoreModule.forRoot(todoReducer)
  ],
  exports: [
    TodosPage
  ]
})
export class TodosPageModule { }
