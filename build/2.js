webpackJsonp([2],{

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosPageModule", function() { return TodosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_list__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TodosPageModule = /** @class */ (function () {
    function TodosPageModule() {
    }
    TodosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__todo_list__["a" /* TodosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__todo_list__["a" /* TodosPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__todo_list__["a" /* TodosPage */]
            ]
        })
    ], TodosPageModule);
    return TodosPageModule;
}());

//# sourceMappingURL=todo_list.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_actions_todo_actions__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mocks_providers_Todos__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_reducers_todo_reducer__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_actions_todo_actions__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TodosPage = /** @class */ (function () {
    function TodosPage(vibration, navCtrl, navParams, todos, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, store, datePicker, localNotifications) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todos = todos;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.store = store;
        this.datePicker = datePicker;
        this.localNotifications = localNotifications;
        this.press = 0;
        this.currentTodos = this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_store__["k" /* select */])(__WEBPACK_IMPORTED_MODULE_8__core_reducers_todo_reducer__["a" /* selectTodos */]));
    }
    /**
     * Perform a service for the proper items.
     */
    TodosPage.prototype.getTodos = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            return;
        }
    };
    /**
     * Navigate to the detail page for this item.
     */
    TodosPage.prototype.openTodo = function (todo) {
        this.navCtrl.push('ItemDetailPage', {
            todo: todo
        });
    };
    TodosPage.prototype.openAddTodoModal = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (todo) {
            if (todo) {
                console.log(todo);
                _this.addTodo(todo);
            }
        });
        addModal.present();
    };
    TodosPage.prototype.addTodo = function (todo) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__core_actions_todo_actions__["b" /* AddTodo */](todo));
    };
    TodosPage.prototype.pressEvent = function (ev) {
        this.press++;
        this.vibration.vibrate(150);
        var toast = this.toastCtrl.create({
            message: 'please slide to get the options .',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    TodosPage.prototype.deleteTodoAction = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__core_actions_todo_actions__["d" /* DeleteTodo */](id));
    };
    TodosPage.prototype.deleteTodo = function (todo, slidingItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Do you want to delete this todo?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        slidingItem.close();
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                            _this.deleteTodoAction(todo.id);
                            var toast = _this.toastCtrl.create({
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
    };
    TodosPage.prototype.openDatePicker = function (todo) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'datetime',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__core_actions_todo_actions__["f" /* UpdateTodo */](todo));
            _this.localNotifications.schedule({
                title: todo.title.toString(),
                text: todo.content.toString(),
                trigger: { at: date },
                led: 'FF0000',
                sound: null
            });
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    TodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'todo_list',template:/*ion-inline-start:"/home/travis/build/dimitrivalax/diListri/src/pages/todo-list/todo_list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Todo List\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="openAddTodoModal()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="getTodos($event)" placeholder="{{ \'Search Todo\' | translate }}"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding class="cssForRoundSLidingItems" *ngFor="let todo of currentTodos | async" #slidingItem>\n      <ion-item (click)="openTodo(todo)" (press)="pressEvent($event)">\n        <h2>{{todo.title}}</h2>\n        <p>{{todo.content}}</p>\n        <p>{{todo.dueDate}}</p>\n        <ion-icon class="tick" item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="dark" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n\n        </button>\n        <button ion-button color="dark" icon-start>\n          <ion-icon name="text"></ion-icon>\n\n        </button>\n        <button ion-button color="dark" icon-start (click)="openDatePicker(todo)" >\n          <ion-icon name="call"></ion-icon>\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="left">\n        <button ion-button color="dark" (click)="deleteTodo(todo,slidingItem)" icon-start>\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/travis/build/dimitrivalax/diListri/src/pages/todo-list/todo_list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__mocks_providers_Todos__["a" /* Todos */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], TodosPage);
    return TodosPage;
}());

//# sourceMappingURL=todo_list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map