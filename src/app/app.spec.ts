import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Platform, Config } from 'ionic-angular';

import { MyApp } from './app.component';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { Settings } from '../providers';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const platformStub = {
  ready: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
};

const statusBarStub = {
  styleDefault: (): void => undefined
};

const splashScreenStub = {
  hide: (): void => undefined
};

export class TranslateServiceStub{

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

export class ConfigStub{

	public get(key: any): any {
		return Observable.of(key);
  }	
  public set(s1: String, s2: String, s3: String): any {
    return Observable.of(s1, s2, s3);
	}
}



export class SettingsStub{

	public get(key: any): any {
		return Observable.of(key);
	}
}

describe('MyApp', () => {
  let instance: MyApp;
  let fixture: ComponentFixture<MyApp>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MyApp],
      providers: [
        { provide: Platform, useValue: platformStub},
        {provide: TranslateService, useClass: TranslateServiceStub},
        {provide: Settings, useClass: SettingsStub},
        { provide: StatusBar, useValue: statusBarStub },
        { provide: SplashScreen, useValue: splashScreenStub },
        {provide: Config, useClass: ConfigStub}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the root page', () => {
    expect(instance).toBeTruthy();
  });

  it('should create the root page with two pages with title predefined', () => {
    expect(instance.rootPage).toBeTruthy();
    expect(instance.pages[0].title).toStrictEqual('Tutorial');
    expect(instance.pages[1].title).toStrictEqual('Welcome');
    expect(instance.pages[2].title).toStrictEqual('Tabs');
    expect(instance.pages[3].title).toStrictEqual('Cards');
    expect(instance.pages[4].title).toStrictEqual('Content');
    expect(instance.pages[5].title).toStrictEqual('Login');
    expect(instance.pages[6].title).toStrictEqual('Signup');
    expect(instance.pages[7].title).toStrictEqual('Master Detail');
    expect(instance.pages[8].title).toStrictEqual('Menu');
    expect(instance.pages[9].title).toStrictEqual('Settings');
    expect(instance.pages[10].title).toStrictEqual('Search');
  });
});
