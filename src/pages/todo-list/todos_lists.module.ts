import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TodosPage } from './todo_list';
import { Todos } from '../../mocks/providers/Todos';

@NgModule({
  declarations: [
    TodosPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosPage),
    TranslateModule.forChild()
  ],
  exports: [
    TodosPage
  ],
  providers: [
    Todos
  ]
})
export class UsersPageModule { }
