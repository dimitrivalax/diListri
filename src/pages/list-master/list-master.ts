import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Todo } from '../../models/todo';
import { Todos } from '../../mocks/providers/Todos';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Todo[];

  constructor(public navCtrl: NavController, public todos: Todos, public modalCtrl: ModalController) {
    this.currentItems = this.todos.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.todos.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.todos.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Todo) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
