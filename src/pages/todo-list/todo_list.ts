import { Todo } from '../../models/todo';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { ItemSliding } from 'ionic-angular/umd';
import { Todos } from '../../mocks/providers/Todos';
import { Store, select } from '@ngrx/store';
import { AppState, selectTodos } from '../../core/reducers/todo.reducer';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'todo_list',
  templateUrl: 'todo_list.html'
})
export class TodosPage {
  currentTodos: Observable<Todo>;
  public press: number = 0;

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public todos: Todos,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private store: Store<AppState>
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

  addTodo() {
    let addModal = this.modalCtrl.create('TodoCreatePage');
    addModal.onDidDismiss(todo => {
      if (todo) {
        console.log(todo);
        this.todos.add(todo);
      }
    });
    addModal.present();
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
              this.todos.delete(todo);
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
}
