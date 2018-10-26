import { TestStore } from './../../mocks/store/test-store';
import { ROOT_REDUCER } from './../../app/core/reducers/reducers';
import { TodosPage } from './todo_list';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Platform, NavController, NavParams, ModalController, ToastController, AlertController, LoadingController, Config } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Store, StoreModule } from '@ngrx/store';
import { DatePicker } from '@ionic-native/date-picker';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { TodoActionTypes } from './core/todo.actions';

const platformStub = {
  vibrate: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
};

const NavControllerStub = {
  vibrate: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
};

const NavParamsStub = {
  vibrate: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
};

class TranslateServiceStub {
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

let initialState = [
  {
    id: '1',
    title: 'Todo 1',
    content: 'Something to do 1',
    dueDate: new Date()
  },
  {
    id: '2',
    title: 'Todo 2',
    content: 'Something to do 2',
    dueDate: new Date()
  },
  {
    id: '3',
    title: 'Todo 3',
    content: 'Something to do 3',
    dueDate: new Date()
  },
  {
    id: '4',
    title: 'Todo 4',
    content: 'Something to do 4'
  },
  {
    id: '5',
    title: 'Todo 5',
    content: 'Something to do 5',
    dueDate: new Date()
  },
  {
    id: '6',
    title: 'Todo 6',
    content: 'Something to do 6',
    dueDate: new Date()
  },
  {
    id: '7',
    title: 'Todo 7',
    content: 'Something to do 7',
    dueDate: new Date()
  }
];

const newTodo = {
  id: '8',
  title: 'new Todo 8',
  content: 'new Something to do 8',
  dueDate: new Date()
};

class StoreStub {

  public pipe(key: any): any {
    return Observable.of(initialState);
  }

  public dispatch(action: any): any {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        return initialState.push(newTodo);
      case TodoActionTypes.DELETE_TODO:
        return initialState.splice(action.payload - 1 , 1);
      default:{
        break; 
      }
    }      
  }

}

class vibrationStub {}

class DatePickerStub {}

class LocalNotificationStub {}


describe('TodosPage', () => {
  let instance: TodosPage;
  let fixture: ComponentFixture<TodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TranslateModule.forRoot(), StoreModule.forRoot(ROOT_REDUCER)],
      declarations: [TodosPage],
      providers: [
        { provide: Platform, useValue: platformStub },
        { provide: Vibration, useValue: vibrationStub },
        { provide: DatePicker, useValue: DatePickerStub },
        { provide: LocalNotifications, useValue: LocalNotificationStub },
        { provide: NavController, useValue: NavControllerStub },
        { provide: NavParams, useValue: NavParamsStub },
        { provide: ModalController, useValue: NavParamsStub },
        { provide: ToastController, useValue: NavParamsStub },
        { provide: AlertController, useValue: NavParamsStub },
        { provide: LoadingController, useValue: NavParamsStub },
        { provide: TranslateService, useClass: TranslateServiceStub },
        { provide: Store, useClass: StoreStub }
      ]
    }).compileComponents();
  }));

  let store: TestStore<any>;

  beforeEach(inject([Store], (testStore: TestStore<any>) => {
    fixture = TestBed.createComponent(TodosPage);
    instance = fixture.debugElement.componentInstance;

    //store = testStore; // save store reference for use in tests
    //store.setState(initialState);
  }));

  it('should create the TodosPage component', () => {
    expect(instance).toBeTruthy();
  });

  it('should create the TodosPage component with 8 items from initial state', () => {
    expect(instance).toBeTruthy();
    instance.currentTodos.subscribe(data => {
      expect(data[6].title).toBe(initialState[6].title);
      expect(data[6].dueDate).toBe(initialState[6].dueDate);
    });
  });

  it('should create the TodosPage component with the possibilty to add todo', () => {
    expect(instance).toBeTruthy();
    instance.addTodo(newTodo);
    instance.currentTodos.subscribe(data => 
      expect(data[7]).toBe(newTodo));
  });

  it('should create the TodosPage component with the possibilty to delete todo', () => {
    expect(instance).toBeTruthy();

    instance.deleteTodoAction('3');

    instance.currentTodos.subscribe(
      data => 
      expect(data[2].id).toBe('4')
      );
  });
});
