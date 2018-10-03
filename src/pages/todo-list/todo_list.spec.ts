import { TestStore } from './../../mocks/store/test-store';
import { ROOT_REDUCER } from './../../core/reducers/reducers';
import { Todos as TodosStub, Todos} from '../../mocks/providers/Todos';
import { TodosPage } from './todo_list';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Platform, NavController, NavParams, ModalController, ToastController, AlertController, LoadingController, Config } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Store, StoreModule } from '@ngrx/store';


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

class vibrationStub  {
};

const initialState = [
  {
    "id": 1,
    "title": "Todo 1",
    "content": "Something to do 1"
  },
  {
    "id": 2,
    "title": "Todo 2",
    "content": "Something to do 2"
  },
  {
    "id": 3,
    "title": "Todo 3",
    "content": "Something to do 3"
  },
  {
    "id": 4,
    "title": "Todo 4",
    "content": "Something to do 4"
  },
  {
    "id": 5,
    "title": "Todo 5",
    "content": "Something to do 5"
  },
  {
    "id": 6,
    "title": "Todo 6",
    "content": "Something to do 6"
  },
  {
    "id": 7,
    "title": "Todo 7",
    "content": "Something to do 7"
  }
];


describe('TodosPage', () => {
  let instance: TodosPage;
  let fixture: ComponentFixture<TodosPage>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        TranslateModule.forRoot(),
        StoreModule.forRoot(ROOT_REDUCER)
      ],
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
        { provide: TranslateService, useClass: TranslateServiceStub },
        { provide: Store, useClass: TestStore }
      ]
    }).compileComponents();
  }));

  let store: TestStore<any>;

  beforeEach(inject([Store], (testStore: TestStore<any>) => {
    fixture = TestBed.createComponent(TodosPage);
    instance = fixture.debugElement.componentInstance;

    store = testStore;                            // save store reference for use in tests                                  
    store.setState(initialState);
  }));

  it('should create the TodosPage component', () => {
    expect(instance).toBeTruthy();
  });



  it('should create the TodosPage component with 8 items from initial state', () => {
    expect(instance).toBeTruthy();
    instance.currentTodos.subscribe(data => 
      expect(data).toBe(initialState)
      )

  });
});
