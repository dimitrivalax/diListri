import { Todos as TodosStub, Todos} from '../../mocks/providers/Todos';
import { TodosPage } from './todo_list';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Platform, NavController, NavParams, ModalController, ToastController, AlertController, LoadingController, Config } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';


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


describe('TodosPage', () => {
  let instance: TodosPage;
  let fixture: ComponentFixture<TodosPage>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TranslateModule.forRoot()],
      declarations: [TodosPage],
      providers: [
        { provide: Platform, useValue: platformStub },
        { provide: Vibration, useValue: vibrationStub },
        { provide: NavController, useValue: NavControllerStub },
        { provide: NavParams, useValue: NavParamsStub },
        { provide: ModalController, useValue: NavParamsStub },
        { provide: ToastController, useValue: NavParamsStub },
        { provide: AlertController, useValue: NavParamsStub },
        { provide: LoadingController, useValue: NavParamsStub },
        { provide: Todos, useValue: new TodosStub },
        { provide: TranslateService, useClass: TranslateServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosPage);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the TodosPage component', () => {
    expect(instance).toBeTruthy();
  });



  it('should create the TodosPage component with 8 items', () => {
    expect(instance).toBeTruthy();
    expect(instance.currentTodos[0].title).toStrictEqual('Todo 1');
    expect(instance.currentTodos[1].title).toStrictEqual('Todo 2');
    expect(instance.currentTodos[2].title).toStrictEqual('Todo 3');
    expect(instance.currentTodos[3].title).toStrictEqual('Todo 4');
    expect(instance.currentTodos[4].title).toStrictEqual('Todo 5');
    expect(instance.currentTodos[5].title).toStrictEqual('Todo 6');
    expect(instance.currentTodos[6].title).toStrictEqual('Todo 7');
  });
});
