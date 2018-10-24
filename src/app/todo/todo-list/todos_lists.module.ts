import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StoreModule } from "@ngrx/store";
import { ROOT_REDUCER } from '../../core/reducers/reducers';

import { TodosPage } from './todo_list';
import { Todos } from '../../../mocks/providers/Todos';



@NgModule({
  declarations: [
    TodosPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosPage),
    
    TranslateModule.forChild(),
    StoreModule.forRoot(ROOT_REDUCER)
  ],
  exports: [
    TodosPage
  ],
  providers: [
    Todos
  ]
})
export class UsersPageModule { }
