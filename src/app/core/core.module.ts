import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaReducer, StoreModule } from '@ngrx/store';

import { LocalStorageService } from './local-storage/local-storage.service';
import { initStateFromLocalStorage } from './reducers/init-state-from-local-storage.reducer';
import { debug } from './reducers/debug.reducer';
import { IonicStorageModule } from '@ionic/storage';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


export const metaReducers: MetaReducer<any>[] = [initStateFromLocalStorage];

metaReducers.unshift(debug);

@NgModule({
  imports: [
    // angular
    CommonModule,
    // ngrx
    StoreModule.forRoot(
      {},
      { metaReducers }
    ),
    EffectsModule.forRoot([]),
    IonicStorageModule.forRoot(),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
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
