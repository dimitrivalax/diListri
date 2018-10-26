import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LocalStorageService } from './local-storage/local-storage.service';
import { initStateFromLocalStorage } from './reducers/init-state-from-local-storage.reducer';
import { ROOT_REDUCER } from './reducers/reducers';
import { TodoEffects } from '../../pages/todo-list/core/todo.effect';
import { debug } from './reducers/debug.reducer';


export const metaReducers: MetaReducer<any>[] = [initStateFromLocalStorage];

metaReducers.unshift(debug);

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(ROOT_REDUCER,
      { metaReducers }),
    EffectsModule.forRoot([TodoEffects])
  ],
  declarations: [],
  providers: [LocalStorageService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
