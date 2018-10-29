import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaReducer } from '@ngrx/store';

import { LocalStorageService } from './local-storage/local-storage.service';
import { initStateFromLocalStorage } from './reducers/init-state-from-local-storage.reducer';
import { debug } from './reducers/debug.reducer';


export const metaReducers: MetaReducer<any>[] = [initStateFromLocalStorage];

metaReducers.unshift(debug);

@NgModule({
  imports: [
    // angular
    CommonModule

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
