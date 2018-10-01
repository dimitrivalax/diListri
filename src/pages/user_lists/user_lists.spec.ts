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



  it('should create the UsersPage component with 8 items', () => {
    expect(instance).toBeTruthy();
    expect(instance.currentItems[0].name).toStrictEqual('Burt Bear');
    expect(instance.currentItems[1].name).toStrictEqual('Charlie Cheetah');
    expect(instance.currentItems[2].name).toStrictEqual('Donald Duck');
    expect(instance.currentItems[3].name).toStrictEqual('Eva Eagle');
    expect(instance.currentItems[4].name).toStrictEqual('Ellie Elephant');
    expect(instance.currentItems[5].name).toStrictEqual('Molly Mouse');
    expect(instance.currentItems[6].name).toStrictEqual('Paul Puppy');
  });
});
