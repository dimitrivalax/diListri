webpackJsonp([0],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosPageModule", function() { return TodosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_list__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_todo_effect__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_todo_reducer__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_core_core_module__ = __webpack_require__(284);
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
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["j" /* StoreModule */].forFeature(__WEBPACK_IMPORTED_MODULE_7__core_todo_reducer__["a" /* TODO_KEY */], {
                    todoReducer: __WEBPACK_IMPORTED_MODULE_7__core_todo_reducer__["c" /* todoReducer */],
                }, { metaReducers: __WEBPACK_IMPORTED_MODULE_8__app_core_core_module__["b" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_5__core_todo_effect__["a" /* TodoEffects */]])
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

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TodoActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UpdateTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeleteTodo; });
/* unused harmony export StoreTodoState */
var TodoActionTypes;
(function (TodoActionTypes) {
    TodoActionTypes["STORE_TODO_STATE"] = "[Todo] Store todo state";
    TodoActionTypes["ADD_TODO"] = "[Todo] Add";
    TodoActionTypes["UPDATE_TODO"] = "[Todo] Update";
    TodoActionTypes["DELETE_TODO"] = "[Todo] Delete";
})(TodoActionTypes || (TodoActionTypes = {}));
var AddTodo = /** @class */ (function () {
    function AddTodo(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.ADD_TODO;
    }
    return AddTodo;
}());

var UpdateTodo = /** @class */ (function () {
    function UpdateTodo(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.UPDATE_TODO;
    }
    return UpdateTodo;
}());

var DeleteTodo = /** @class */ (function () {
    function DeleteTodo(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.DELETE_TODO;
    }
    return DeleteTodo;
}());

var StoreTodoState = /** @class */ (function () {
    function StoreTodoState(payload) {
        this.payload = payload;
        this.type = TodoActionTypes.STORE_TODO_STATE;
    }
    return StoreTodoState;
}());

//# sourceMappingURL=todo.actions.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TODO_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectTodos; });
/* unused harmony export selectTodoState */
/* harmony export (immutable) */ __webpack_exports__["c"] = todoReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_actions__ = __webpack_require__(468);


var TODO_KEY = 'todo_feature';
var selectTodos = function (state) { return state[TODO_KEY].todoReducer.items; };
var selectTodoState = function (state) { return state[TODO_KEY].todoReducer; };
var initialState = { items: [] };
function todoReducer(state, action) {
    if (state === void 0) { state = initialState; }
    console.log(action);
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__todo_actions__["c" /* TodoActionTypes */].ADD_TODO:
            action.payload.id = Object(__WEBPACK_IMPORTED_MODULE_0_uuid__["v4"])();
            state.items = state.items.concat(action.payload);
            return state;
        case __WEBPACK_IMPORTED_MODULE_1__todo_actions__["c" /* TodoActionTypes */].UPDATE_TODO:
            return state.items.concat(action.payload);
        case __WEBPACK_IMPORTED_MODULE_1__todo_actions__["c" /* TodoActionTypes */].DELETE_TODO:
            return state.items.filter(function (todo) { return todo.id !== action.payload; });
        default:
            return state;
    }
}
//# sourceMappingURL=todo.reducer.js.map

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 471:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_todo_actions__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_todo_reducer__ = __webpack_require__(469);
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
    function TodosPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, store, datePicker, localNotifications) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.store = store;
        this.datePicker = datePicker;
        this.localNotifications = localNotifications;
        this.press = 0;
        this.currentTodos = this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_store__["n" /* select */])(__WEBPACK_IMPORTED_MODULE_7__core_todo_reducer__["b" /* selectTodos */]));
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
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__core_todo_actions__["a" /* AddTodo */](todo));
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
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__core_todo_actions__["b" /* DeleteTodo */](id));
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
    TodosPage.prototype.updateToto = function (todo) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__core_todo_actions__["d" /* UpdateTodo */](todo));
    };
    TodosPage.prototype.setLocalNotification = function (todo, date) {
        this.localNotifications.schedule({
            title: todo.title.toString(),
            text: todo.content.toString(),
            trigger: { at: date },
            led: 'FF0000',
            sound: null
        });
    };
    TodosPage.prototype.openDatePicker = function (todo) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'datetime',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            _this.updateToto(todo);
            _this.setLocalNotification(todo, date);
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    TodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'todo_list',template:/*ion-inline-start:"/home/travis/build/dimitrivalax/diListri/src/pages/todo-list/todo_list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Todo List\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="openAddTodoModal()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="getTodos($event)" placeholder="{{ \'Search Todo\' | translate }}"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding class="cssForRoundSLidingItems" *ngFor="let todo of currentTodos | async" #slidingItem>\n      <ion-item (click)="openTodo(todo)" (press)="pressEvent($event)">\n        <h2>{{todo.title}}</h2>\n        <p>{{todo.content}}</p>\n        <p>{{todo.dueDate | date: "\'le\' dd/MM/yyyy \'à\' HH:mm"}}</p>\n        <ion-icon class="tick" item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="dark" icon-start (click)="openDatePicker(todo)" >\n          <ion-icon name="alarm"></ion-icon>\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="left">\n        <button ion-button color="dark" (click)="deleteTodo(todo,slidingItem)" icon-start>\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/travis/build/dimitrivalax/diListri/src/pages/todo-list/todo_list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], TodosPage);
    return TodosPage;
}());

//# sourceMappingURL=todo_list.js.map

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(485);
var v4 = __webpack_require__(486);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(470);
var bytesToUuid = __webpack_require__(471);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(470);
var bytesToUuid = __webpack_require__(471);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_actions__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_local_storage_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_reducer__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_withLatestFrom__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_withLatestFrom__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TodoEffects = /** @class */ (function () {
    function TodoEffects(actions$, localStorageService, store$) {
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.store$ = store$;
    }
    TodoEffects.prototype.persistTodos = function () {
        var _this = this;
        return (this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__todo_actions__["c" /* TodoActionTypes */].ADD_TODO)
            .withLatestFrom(this.store$)
            .switchMap(function (_a) {
            var action = _a[0], storeState = _a[1];
            _this.localStorageService.setItem(__WEBPACK_IMPORTED_MODULE_6__todo_reducer__["a" /* TODO_KEY */], storeState[__WEBPACK_IMPORTED_MODULE_6__todo_reducer__["a" /* TODO_KEY */]]);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of();
        }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])
    ], TodoEffects.prototype, "persistTodos", null);
    TodoEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_5__app_core_local_storage_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], TodoEffects);
    return TodoEffects;
}());

//# sourceMappingURL=todo.effect.js.map

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var withLatestFrom_1 = __webpack_require__(145);
Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ })

});
//# sourceMappingURL=0.js.map