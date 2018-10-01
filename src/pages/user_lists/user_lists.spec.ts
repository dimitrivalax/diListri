import { Items } from './../../providers/items/items';
import { UsersPage } from './users_lists';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Platform, NavController, NavParams, ModalController, ToastController, AlertController, LoadingController, Config } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { ItemsStub } from '../../providers';


const platformStub = {
  vibrate: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
};

const NavControllerStub = {
  vibrate: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
};



const NavParamsStub = {
  vibrate: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
};


 class TranslateServiceStub{
  public get(key: any): any {
    return Observable.of(key);
  }
  public setDefaultLang(): any {
    return Observable.of();
  }
  public getBrowserLang(): any {
    return Observable.of();
  }
  public use(): any {
    return Observable.of();
  }
}

 class ConfigStub{

	public get(key: any): any {
		return Observable.of(key);
  }	
  public set(s1: String, s2: String, s3: String): any {
    return Observable.of(s1, s2, s3);
	}
}



 class SettingsStub{

	public get(key: any): any {
		return Observable.of(key);
	}
}

class vibrationStub  {
};


describe('UsersPage', () => {
  let instance: UsersPage;
  let fixture: ComponentFixture<UsersPage>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TranslateModule.forRoot()],
      declarations: [UsersPage],
      providers: [
        { provide: Platform, useValue: platformStub },
        { provide: Vibration, useValue: vibrationStub },
        { provide: NavController, useValue: NavControllerStub },
        { provide: NavParams, useValue: NavParamsStub },
        { provide: ModalController, useValue: NavParamsStub },
        { provide: ToastController, useValue: NavParamsStub },
        { provide: AlertController, useValue: NavParamsStub },
        { provide: LoadingController, useValue: NavParamsStub },
        { provide: Items, useValue: new ItemsStub },
        { provide: TranslateService, useClass: TranslateServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPage);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the UsersPage component', () => {
    expect(instance).toBeTruthy();
  });
});