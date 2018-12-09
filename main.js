(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Main content-->\n<div class=\"container\">\n  <app-side-bar class=\"sideBar\"></app-side-bar>\n  <app-main-bar class=\"mainBar\"></app-main-bar>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background: #2b2f3e;\n  height: 100%;\n  display: flex;\n  justify-content: center; }\n  .container .sideBar {\n    width: 20%;\n    height: 100%; }\n  .container .mainBar {\n    width: 80%;\n    height: 100%;\n    background: #f9f9f9;\n    display: flex;\n    justify-content: center;\n    overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFRlc3RcXFRlc3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osY0FBYTtFQUNiLHdCQUF1QixFQVVGO0VBZHZCO0lBTUksV0FBVTtJQUNWLGFBQVksRUFBRztFQVBuQjtJQVNJLFdBQVU7SUFDVixhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsZUFBYyxFQUFHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMyYjJmM2U7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5zaWRlQmFyIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAubWFpbkJhciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var _main_bar_main_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-bar/main-bar.component */ "./src/app/main-bar/main-bar.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/items.component */ "./src/app/items/items.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _store_app_store_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/app-store.module */ "./src/app/store/app-store.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"],
                _main_bar_main_bar_component__WEBPACK_IMPORTED_MODULE_4__["MainBarComponent"],
                _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _store_app_store_module__WEBPACK_IMPORTED_MODULE_7__["AppStoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Comments #{{(items | async).selected + 1}}</h1>\n<div class=\"showComments\">\n  <div *ngFor=\"let co of (items | async).items[(items | async).selected].comments\" class=\"comment\">\n    <div class=\"avatar\" [ngStyle]=\"{'background': co.color}\"></div>\n    <div class=\"textComment\">{{co.text}}\n    </div>\n  </div>\n</div>\n<div class=\"newComment\">\n  <div class=\"avatarStart\"></div>\n  <textarea class=\"newText\" cols=\"30\" rows=\"10\" [(ngModel)]=\"textComment\" (keyup.control.enter)=\"sendComment()\"></textarea>\n</div>\n<input type=\"button\" value=\"Send\" class=\"sendComment\" (click)=\"sendComment()\">\n"

/***/ }),

/***/ "./src/app/comments/comments.component.sass":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #575b6a;\n  padding-left: 24px; }\n\n.showComments .comment {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 10px 10px 25px;\n  border-bottom: 1px solid #f2f2f2;\n  padding-bottom: 15px; }\n\n.showComments .comment .avatar {\n    width: 50px;\n    height: 50px;\n    margin-right: 15px; }\n\n.showComments .comment .textComment {\n    width: calc(100% - 65px);\n    font-size: 14px;\n    color: #666666;\n    white-space: pre-wrap; }\n\n.newComment {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 10px 10px 25px; }\n\n.newComment .avatarStart {\n    width: 50px;\n    height: 50px;\n    background: #e6e6e6;\n    margin-right: 15px; }\n\n.newComment .newText {\n    width: calc(100% - 65px);\n    height: 100px;\n    resize: none;\n    outline: none; }\n\n.sendComment {\n  width: 100%;\n  border: none;\n  background: #27ccc0;\n  color: #FFFFFF;\n  cursor: pointer;\n  outline: none; }\n\n.sendComment:hover {\n    background: #27efe3; }\n\n.sendComment:active {\n    background: #27ccc0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvRDpcXFRlc3RcXFRlc3Qvc3JjXFxhcHBcXGNvbW1lbnRzXFxjb21tZW50cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxtQkFBa0IsRUFBRzs7QUFFdkI7RUFFSSxjQUFhO0VBQ2IsK0JBQThCO0VBQzlCLHlCQUF3QjtFQUN4QixpQ0FBZ0M7RUFDaEMscUJBQW9CLEVBU1E7O0FBZmhDO0lBUU0sWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0IsRUFBRzs7QUFWM0I7SUFZTSx5QkFBd0I7SUFDeEIsZ0JBQWU7SUFDZixlQUFjO0lBQ2Qsc0JBQXFCLEVBQUc7O0FBRTlCO0VBQ0UsY0FBYTtFQUNiLCtCQUE4QjtFQUM5Qix5QkFBd0IsRUFVSjs7QUFidEI7SUFLSSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFBRzs7QUFSekI7SUFVSSx5QkFBd0I7SUFDeEIsY0FBYTtJQUNiLGFBQVk7SUFDWixjQUFhLEVBQUc7O0FBRXBCO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsY0FBYSxFQUlhOztBQVY1QjtJQVFJLG9CQUFtQixFQUFHOztBQVIxQjtJQVVJLG9CQUFtQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGNvbG9yOiAjNTc1YjZhO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7IH1cblxuLnNob3dDb21tZW50cyB7XG4gIC5jb21tZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDAgMTBweCAxMHB4IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgLmF2YXRhciB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDsgfVxuICAgIC50ZXh0Q29tbWVudCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjVweCk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgfSB9IH1cblxuLm5ld0NvbW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCAxMHB4IDEwcHggMjVweDtcbiAgLmF2YXRhclN0YXJ0IHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7IH1cbiAgLm5ld1RleHQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2NXB4KTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lOyB9IH1cblxuLnNlbmRDb21tZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzI3Y2NjMDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzI3ZWZlMzsgfVxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzI3Y2NjMDsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(store, serv) {
        this.store = store;
        this.serv = serv;
        this.textComment = "";
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.items = this.store.select('items');
    };
    CommentsComponent.prototype.sendComment = function () {
        this.serv.sendComment(this.textComment);
        this.textComment = "";
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.sass */ "./src/app/comments/comments.component.sass")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/items.service.ts":
/*!**********************************!*\
  !*** ./src/app/items.service.ts ***!
  \**********************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_actions_items_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/actions/items.actions */ "./src/app/store/actions/items.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsService = /** @class */ (function () {
    function ItemsService(store) {
        this.store = store;
    }
    ItemsService.prototype.uploadItems = function () {
        var items = localStorage.getItem('items');
        if (items) {
            this.store.dispatch(new _store_actions_items_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateAllItems"](JSON.parse(items)));
        }
        else {
            this.store.select('items').subscribe(function (dataItems) {
                localStorage.setItem('items', JSON.stringify(dataItems));
            });
        }
    };
    ItemsService.prototype.selectItem = function (index) {
        this.store.dispatch(new _store_actions_items_actions__WEBPACK_IMPORTED_MODULE_1__["SelectItem"](index));
        this.updateLocalStorage();
    };
    ItemsService.prototype.addItem = function (text) {
        this.store.dispatch(new _store_actions_items_actions__WEBPACK_IMPORTED_MODULE_1__["AddItem"]({
            title: text,
            comments: []
        }));
        this.updateLocalStorage();
    };
    ItemsService.prototype.removeItem = function (index) {
        this.store.dispatch(new _store_actions_items_actions__WEBPACK_IMPORTED_MODULE_1__["RemoveItem"](index));
        this.updateLocalStorage();
    };
    ItemsService.prototype.sendComment = function (text) {
        this.store.dispatch(new _store_actions_items_actions__WEBPACK_IMPORTED_MODULE_1__["SendComment"](text));
        this.updateLocalStorage();
    };
    ItemsService.prototype.updateLocalStorage = function () {
        this.store.select('items').subscribe(function (data) {
            localStorage.setItem('items', JSON.stringify(data));
        });
    };
    ItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ItemsService);
    return ItemsService;
}());



/***/ }),

/***/ "./src/app/items/items.component.html":
/*!********************************************!*\
  !*** ./src/app/items/items.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Items</h1>\n<div class=\"search\">\n  <input type=\"text\" placeholder=\"Type name here...\" [(ngModel)]=\"textONewItem\">\n  <input type=\"button\" value=\"Add new\" (click)=\"addNewItem()\">\n</div>\n<div *ngFor=\"let item of (items | async).items; let i = index\" class=\"item\" (click)=\"selectItem(i)\">\n  <div class=\"statusItem\" [ngClass]=\"{'activeItem': i === (items | async).selected}\"></div>\n  <div class=\"textButtonItem\">\n    <div class=\"textItem\">{{item.title}} <h4>{{item.comments.length}}</h4></div>\n    <input type=\"button\" value=\"Delete\" (click)=\"removeItem(i)\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/items/items.component.sass":
/*!********************************************!*\
  !*** ./src/app/items/items.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #575b6a;\n  padding-left: 24px; }\n\n.search {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding: 0 15px 0 5%;\n  /*Add new Button*/ }\n\n.search input[type=text] {\n    width: 65%;\n    height: 25px;\n    border: 1px solid #cccccc;\n    border-radius: 3px;\n    padding-left: 7px;\n    outline: none; }\n\n.search ::-webkit-input-placeholder {\n    color: #cccccc; }\n\n.search input[type=button] {\n    width: 30%;\n    height: 29px;\n    background: #27ccc0;\n    border: none;\n    border-radius: 3px;\n    color: #FFFFFF;\n    cursor: pointer;\n    outline: none; }\n\n.search input[type=button]:hover {\n      background: #27efe3; }\n\n.search input[type=button]:active {\n      background: #27ccc0; }\n\n.item {\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  padding-right: 15px; }\n\n.item:hover {\n    background: #f2f2f2; }\n\n.item .statusItem {\n    width: 5%;\n    height: 50px; }\n\n.item .textButtonItem {\n    width: 95%;\n    height: 49px;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #f2f2f2;\n    /*Delete button*/ }\n\n.item .textButtonItem .textItem {\n      width: 75%;\n      text-align: left;\n      padding-right: 5px;\n      display: flex;\n      font-weight: bold;\n      font-family: Helvetica, sans-serif; }\n\n.item .textButtonItem .textItem h4 {\n        background: #27ccc0;\n        border-radius: 10px;\n        color: #FFFFFF;\n        margin: 0 10px;\n        font-size: 10px;\n        padding: 0 8px;\n        align-items: center;\n        display: flex;\n        min-width: 15px;\n        justify-content: center; }\n\n.item .textButtonItem input[type=button] {\n      color: #ff305a;\n      width: 20%;\n      border: 2px solid #ff4a6d;\n      height: 29px;\n      background: #ffffff;\n      cursor: pointer;\n      border-radius: 5px;\n      outline: none; }\n\n.item .textButtonItem input[type=button]:hover {\n        background: #ff4a6d;\n        color: #ffffff; }\n\n.item .textButtonItem input[type=button]:active {\n        background: rgba(255, 74, 109, 0.76); }\n\n.item .activeItem {\n    border-left: 4px solid #ff2f5a;\n    width: calc(5% - 4px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvRDpcXFRlc3RcXFRlc3Qvc3JjXFxhcHBcXGl0ZW1zXFxpdGVtcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxtQkFBa0IsRUFBRzs7QUFFdkI7RUFDRSxjQUFhO0VBQ2IsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixxQkFBb0I7RUFVcEIsa0JBQWtCLEVBYVk7O0FBM0JoQztJQU1JLFdBQVU7SUFDVixhQUFZO0lBQ1osMEJBQXlCO0lBQ3pCLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsY0FBYSxFQUFHOztBQVhwQjtJQWFJLGVBQWMsRUFBRzs7QUFickI7SUFnQkksV0FBVTtJQUNWLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2QsZ0JBQWU7SUFDZixjQUFhLEVBSWE7O0FBM0I5QjtNQXlCTSxvQkFBbUIsRUFBRzs7QUF6QjVCO01BMkJNLG9CQUFtQixFQUFHOztBQUU1QjtFQUNFLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsZ0JBQWU7RUFDZixvQkFBbUIsRUFnRFM7O0FBcEQ5QjtJQU1JLG9CQUFtQixFQUFHOztBQU4xQjtJQVFJLFVBQVM7SUFDVCxhQUFZLEVBQUc7O0FBVG5CO0lBV0ksV0FBVTtJQUNWLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLCtCQUE4QjtJQUM5QixpQ0FBZ0M7SUFtQmhDLGlCQUFpQixFQWM4Qjs7QUFqRG5EO01Ba0JNLFdBQVU7TUFDVixpQkFBZ0I7TUFDaEIsbUJBQWtCO01BQ2xCLGNBQWE7TUFDYixrQkFBaUI7TUFDakIsbUNBQWtDLEVBV0o7O0FBbENwQztRQXlCUSxvQkFBbUI7UUFDbkIsb0JBQW1CO1FBQ25CLGVBQWM7UUFDZCxlQUFjO1FBQ2QsZ0JBQWU7UUFDZixlQUFjO1FBQ2Qsb0JBQW1CO1FBQ25CLGNBQWE7UUFDYixnQkFBZTtRQUNmLHdCQUF1QixFQUFHOztBQWxDbEM7TUFxQ00sZUFBYztNQUNkLFdBQVU7TUFDViwwQkFBeUI7TUFDekIsYUFBWTtNQUNaLG9CQUFtQjtNQUNuQixnQkFBZTtNQUNmLG1CQUFrQjtNQUNsQixjQUFhLEVBSzhCOztBQWpEakQ7UUE4Q1Esb0JBQW1CO1FBQ25CLGVBQWMsRUFBRzs7QUEvQ3pCO1FBaURRLHFDQUFvQyxFQUFHOztBQWpEL0M7SUFtREksK0JBQThCO0lBQzlCLHNCQUFxQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvaXRlbXMvaXRlbXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGNvbG9yOiAjNTc1YjZhO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7IH1cblxuLnNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMCAxNXB4IDAgNSU7XG4gIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2NjY2NjYzsgfVxuICAvKkFkZCBuZXcgQnV0dG9uKi9cbiAgaW5wdXRbdHlwZT1idXR0b25dIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMjlweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjdjY2MwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjdlZmUzOyB9XG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogIzI3Y2NjMDsgfSB9IH1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyOyB9XG4gIC5zdGF0dXNJdGVtIHtcbiAgICB3aWR0aDogNSU7XG4gICAgaGVpZ2h0OiA1MHB4OyB9XG4gIC50ZXh0QnV0dG9uSXRlbSB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbiAgICAudGV4dEl0ZW0ge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgaDQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjdjY2MwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi13aWR0aDogMTVweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0gfVxuICAgIC8qRGVsZXRlIGJ1dHRvbiovXG4gICAgaW5wdXRbdHlwZT1idXR0b25dIHtcbiAgICAgIGNvbG9yOiAjZmYzMDVhO1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZjRhNmQ7XG4gICAgICBoZWlnaHQ6IDI5cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY0YTZkO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNzQsIDEwOSwgMC43Nik7IH0gfSB9XG4gIC5hY3RpdmVJdGVtIHtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmZjJmNWE7XG4gICAgd2lkdGg6IGNhbGMoNSUgLSA0cHgpOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/items/items.component.ts":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(store, serv) {
        this.store = store;
        this.serv = serv;
        this.textONewItem = '';
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.serv.uploadItems();
        this.items = this.store.select('items');
    };
    ItemsComponent.prototype.addNewItem = function () {
        if (!this.textONewItem) {
            return alert('Empty field!');
        }
        this.serv.addItem(this.textONewItem);
        this.textONewItem = '';
    };
    ItemsComponent.prototype.selectItem = function (index) {
        this.serv.selectItem(index);
    };
    ItemsComponent.prototype.removeItem = function (index) {
        this.serv.removeItem(index);
    };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.sass */ "./src/app/items/items.component.sass")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/main-bar/main-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-bar/main-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items class=\"items\"></app-items>\n<app-comments class=\"comments\"></app-comments>\n"

/***/ }),

/***/ "./src/app/main-bar/main-bar.component.sass":
/*!**************************************************!*\
  !*** ./src/app/main-bar/main-bar.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items, .comments {\n  background: #ffffff;\n  width: 50%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  min-height: 450px;\n  box-shadow: 0 0 5px #989898;\n  margin: 25px 10px 20px 25px; }\n\n.comments {\n  margin: 25px 25px 20px 10px;\n  min-height: 550px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1iYXIvRDpcXFRlc3RcXFRlc3Qvc3JjXFxhcHBcXG1haW4tYmFyXFxtYWluLWJhci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFtQjtFQUNuQixXQUFVO0VBQ1YsNEJBQW1CO0VBQW5CLHlCQUFtQjtFQUFuQixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLDRCQUEyQjtFQUMzQiw0QkFBMkIsRUFBRzs7QUFFaEM7RUFDRSw0QkFBMkI7RUFDM0Isa0JBQWlCLEVBQUciLCJmaWxlIjoic3JjL2FwcC9tYWluLWJhci9tYWluLWJhci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtcywgLmNvbW1lbnRzIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgbWluLWhlaWdodDogNDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzk4OTg5ODtcbiAgbWFyZ2luOiAyNXB4IDEwcHggMjBweCAyNXB4OyB9XG5cbi5jb21tZW50cyB7XG4gIG1hcmdpbjogMjVweCAyNXB4IDIwcHggMTBweDtcbiAgbWluLWhlaWdodDogNTUwcHg7IH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/main-bar/main-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-bar/main-bar.component.ts ***!
  \************************************************/
/*! exports provided: MainBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBarComponent", function() { return MainBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainBarComponent = /** @class */ (function () {
    function MainBarComponent() {
    }
    MainBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-bar',
            template: __webpack_require__(/*! ./main-bar.component.html */ "./src/app/main-bar/main-bar.component.html"),
            styles: [__webpack_require__(/*! ./main-bar.component.sass */ "./src/app/main-bar/main-bar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], MainBarComponent);
    return MainBarComponent;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>DAIRY APP</h1>\n<h2>Comment with no sense</h2>\n"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.sass":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #FFFFFF;\n  margin-left: 30px;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #202536;\n  margin-bottom: 9px; }\n\nh2 {\n  margin-top: 0;\n  color: #5e5f66;\n  font-size: 15px;\n  margin-left: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1iYXIvRDpcXFRlc3RcXFRlc3Qvc3JjXFxhcHBcXHNpZGUtYmFyXFxzaWRlLWJhci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsb0VBQW1FO0VBQ25FLG1CQUFrQixFQUFHOztBQUV2QjtFQUNFLGNBQWE7RUFDYixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixrQkFBaUIsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4ICMyMDI1MzY7XG4gIG1hcmdpbi1ib3R0b206IDlweDsgfVxuXG5oMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjNWU1ZjY2O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.sass */ "./src/app/side-bar/side-bar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/items.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/items.actions.ts ***!
  \************************************************/
/*! exports provided: ItemsActionTypes, UpdateAllItems, SelectItem, AddItem, RemoveItem, SendComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsActionTypes", function() { return ItemsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAllItems", function() { return UpdateAllItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItem", function() { return SelectItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItem", function() { return AddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItem", function() { return RemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendComment", function() { return SendComment; });
var ItemsActionTypes;
(function (ItemsActionTypes) {
    ItemsActionTypes["UPDATE_ALL_ITEMS"] = "[Item] Update all items";
    ItemsActionTypes["ADD_ITEM"] = "[Item] Add item";
    ItemsActionTypes["SELECT_ITEM"] = "[Item] Select item";
    ItemsActionTypes["REMOVE_ITEM"] = "[Item] Remove item";
    ItemsActionTypes["SEND_COMMENT"] = "[Item] Send Comment";
})(ItemsActionTypes || (ItemsActionTypes = {}));
var UpdateAllItems = /** @class */ (function () {
    function UpdateAllItems(payload) {
        this.payload = payload;
        this.type = ItemsActionTypes.UPDATE_ALL_ITEMS;
    }
    return UpdateAllItems;
}());

var SelectItem = /** @class */ (function () {
    function SelectItem(payload) {
        this.payload = payload;
        this.type = ItemsActionTypes.SELECT_ITEM;
    }
    return SelectItem;
}());

var AddItem = /** @class */ (function () {
    function AddItem(payload) {
        this.payload = payload;
        this.type = ItemsActionTypes.ADD_ITEM;
    }
    return AddItem;
}());

var RemoveItem = /** @class */ (function () {
    function RemoveItem(payload) {
        this.payload = payload;
        this.type = ItemsActionTypes.REMOVE_ITEM;
    }
    return RemoveItem;
}());

var SendComment = /** @class */ (function () {
    function SendComment(payload) {
        this.payload = payload;
        this.type = ItemsActionTypes.SEND_COMMENT;
    }
    return SendComment;
}());



/***/ }),

/***/ "./src/app/store/app-store.module.ts":
/*!*******************************************!*\
  !*** ./src/app/store/app-store.module.ts ***!
  \*******************************************/
/*! exports provided: reducers, AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _reducers_items_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/items.reducer */ "./src/app/store/reducers/items.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var reducers = {
    items: _reducers_items_reducer__WEBPACK_IMPORTED_MODULE_4__["itemReducer"]
};
var AppStoreModule = /** @class */ (function () {
    function AppStoreModule() {
    }
    AppStoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(reducers)
            ]
        })
    ], AppStoreModule);
    return AppStoreModule;
}());



/***/ }),

/***/ "./src/app/store/reducers/items.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/items.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, itemReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemReducer", function() { return itemReducer; });
/* harmony import */ var _actions_items_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/items.actions */ "./src/app/store/actions/items.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var initialState = {
    items: [{
            title: 'First item with custom name',
            comments: [{
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
                    color: '#ff8a00'
                }, {
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
                    color: '#485bff'
                }, {
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
                    color: '#ff8a00'
                }]
        }, {
            title: 'Second item is active',
            comments: [{
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
                    color: '#ff8a00'
                }, {
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
                    color: '#ff8a00'
                }, {
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
                    color: '#ff8a00'
                }, {
                    text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
                    color: '#ff8a00'
                }]
        }],
    selected: 1
};
var itemReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_items_actions__WEBPACK_IMPORTED_MODULE_0__["ItemsActionTypes"].UPDATE_ALL_ITEMS:
            return __assign({}, state, { items: action.payload.items, selected: action.payload.selected });
        case _actions_items_actions__WEBPACK_IMPORTED_MODULE_0__["ItemsActionTypes"].ADD_ITEM:
            return __assign({}, state, { items: state.items.concat([action.payload]) });
        case _actions_items_actions__WEBPACK_IMPORTED_MODULE_0__["ItemsActionTypes"].REMOVE_ITEM: {
            state.items.splice(action.payload, 1);
            return state;
        }
        case _actions_items_actions__WEBPACK_IMPORTED_MODULE_0__["ItemsActionTypes"].SELECT_ITEM:
            return __assign({}, state, { selected: action.payload });
        case _actions_items_actions__WEBPACK_IMPORTED_MODULE_0__["ItemsActionTypes"].SEND_COMMENT:
            state.items[state.selected].comments.push({ text: action.payload, color: '#e6e6e6' });
            return state;
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Test\Test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map