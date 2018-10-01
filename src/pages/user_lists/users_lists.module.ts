import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { UsersPage } from './users_lists';
import { Items } from '../../providers/items/items';

@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
    TranslateModule.forChild()
  ],
  exports: [
    UsersPage
  ],
  providers: [
    Items
  ]
})
export class UsersPageModule { }
