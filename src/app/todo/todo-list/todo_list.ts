import { DeleteTodo, UpdateTodo } from '../core/todo.actions';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { DatePicker } from '@ionic-native/date-picker';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ItemSliding } from 'ionic-angular/umd';
import { Store, select } from '@ngrx/store';
import { AppState, selectTodos } from '../core/todo.reducer';
import { Observable } from 'rxjs';
import { AddTodo } from '../core/todo.actions';
import { Todo } from '../../../models/todo';
import { Todos } from '../../../mocks/providers/Todos';

@IonicPage()
@Component({
  selector: 'todo_list',
  templateUrl: 'todo_list.html'
})
export class TodosPage {
  currentTodos: Observable<Todo[]>;
  public press: number = 0;

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private store: Store<AppState>,
    private datePicker: DatePicker,
    private localNotifications: LocalNotifications
  ) {
    this.currentTodos = this.store.pipe(select(selectTodos))
  }

  /**
   * Perform a service for the proper items.
   */
  getTodos(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      return;
    }
  }

  /**
   * Navigate to the detail page for this item.
   */
  openTodo(todo: Todo) {
    this.navCtrl.push('ItemDetailPage', {
      todo: todo
    });
  }

  openAddTodoModal() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(todo => {
      if (todo) {
        console.log(todo);
        this.addTodo(todo)
      }
    });
    addModal.present();
  }

  addTodo(todo: Todo) {
    this.store.dispatch(new AddTodo(todo));
  }

  pressEvent(ev) {
    this.press++;
    this.vibration.vibrate(150);
    let toast = this.toastCtrl.create({
      message: 'please slide to get the options .',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  deleteTodoAction(id : String) {
    this.store.dispatch(new DeleteTodo(id));
  }

  deleteTodo(todo, slidingItem: ItemSliding) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Do you want to delete this todo?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            slidingItem.close();
          }
        },
        {
          text: 'Yes',
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: 'Please wait...'
            });
            loading.present();
            setTimeout(() => {
              loading.dismiss();
              this.deleteTodoAction(todo.id)
              let toast = this.toastCtrl.create({
                message: 'You have deleted ' + todo['title'] + ' successfully .',
                duration: 2000,
                position: 'top'
              });
              toast.present();
            }, 1000);
          }
        }
      ]
    });
    alert.present();
  }

  updateToto(todo : Todo){
    this.store.dispatch(new UpdateTodo(todo));
  }

  setLocalNotification(todo: Todo, date: Date){
    this.localNotifications.schedule({
      title: todo.title.toString(),
      text: todo.content.toString(),
      trigger: {at: date},
      led: 'FF0000',
      sound: null
    });
  }


  openDatePicker(todo: Todo){
    this.datePicker.show({
      date: new Date(),
      mode: 'datetime',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        this.updateToto(todo)
        this.setLocalNotification(todo, date)
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
