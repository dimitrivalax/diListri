import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosPage } from './todo_list';


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
  ]
})
export class TodosPageModule { }
