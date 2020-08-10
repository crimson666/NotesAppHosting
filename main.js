(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _note_container_note_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-container/note-container.component */ "./src/app/note-container/note-container.component.ts");




class AppComponent {
    constructor() {
        this.title = 'NotesApp';
        this.index = 0;
        this.NotesAppsList = [
            {
                "lable": "Note Sl 1",
                "textBody": "First Bla bla bla bla",
                "time": 1597065006156
            },
            {
                "lable": "Note Sl 2",
                "textBody": "Second Bla bla bla bla",
                "time": 1597065006156
            },
            {
                "lable": "Note Sl 3",
                "textBody": "Third Bla bla bla bla",
                "time": 1597065006156
            },
            {
                "lable": "Note Sl 4",
                "textBody": "Fourth Bla bla bla bla",
                "time": 1597065006156
            },
            {
                "lable": "Note Sl 5",
                "textBody": "Fifth Bla bla bla bla",
                "time": 1597065006156
            },
            {
                "lable": "Note Sl 6",
                "textBody": "Sixth Bla bla bla bla",
                "time": 1597065006156
            },
        ];
    }
    reciveIndex($event) {
        this.index = $event;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 3, consts: [[3, "NotesAppsList", "index"], [3, "NotesAppsList", "EmmitIndex"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-note-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("EmmitIndex", function AppComponent_Template_app_note_container_EmmitIndex_1_listener($event) { return ctx.reciveIndex($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("NotesAppsList", ctx.NotesAppsList)("index", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("NotesAppsList", ctx.NotesAppsList);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _note_container_note_container_component__WEBPACK_IMPORTED_MODULE_2__["NoteContainerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _note_container_note_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note-container/note-container.component */ "./src/app/note-container/note-container.component.ts");









//import { DatePipe } from './shared/date.pipe';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _note_container_note_container_component__WEBPACK_IMPORTED_MODULE_6__["NoteContainerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _note_container_note_container_component__WEBPACK_IMPORTED_MODULE_6__["NoteContainerComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "FasActive": a0 }; };
class HeaderComponent {
    constructor() {
        this.testform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            lable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            textBody: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.SearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    Submit(testform) {
        this.testform.patchValue({ 'time': (new Date()).getTime() });
        console.warn(this.testform.value);
        this.NotesAppsList.push(this.testform.value);
        testform.reset();
        //localStorage.setItem('NotesData', JSON.stringify(this.testform.value));
    }
    SearchResult(SearchForm) {
        console.warn(this.SearchForm.value);
    }
    deleteEvent() {
        console.warn(this.index);
        this.NotesAppsList.splice(this.index, 1);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { NotesAppsList: "NotesAppsList", index: "index" }, decls: 44, vars: 5, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["src", "assets/img/Logo.svg", "srcset", "assets/img/Logo.svg", "alt", "Automate.io", 1, ""], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse"], [1, "col-sm-3"], [1, "row", "col-sm-5"], [1, "col-sm-2"], ["href", "#", 1, "fas", "fa", "fa-th-large"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "fas", "fa", "fa-plus"], ["type", "button", 1, "fas", "fa", "fa-trash", 3, "click"], ["href", "#", 1, "fas", "fa", "fa-edit", 3, "ngClass"], ["href", "#", 1, "fas", "fa", "fa-lock"], [1, "row", "col-sm-4", "topnavsr"], [1, "search-container"], [3, "formGroup"], ["type", "text", "formControlName", "search", "placeholder", "Search..", "name", "search"], ["type", "submit", 3, "click"], [1, "fa", "fa-search"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["type", "text", "id", "lable", "formControlName", "lable", "placeholder", "What Should we call today's note!!", 1, "form-control"], ["type", "text", "id", "textBody", "formControlName", "textBody", "row", "5", "col", "20", "placeholder", "Please tell me more..", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() { return ctx.deleteEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_22_listener() { return ctx.SearchResult(ctx.SearchForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Add Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_42_listener() { return ctx.Submit(ctx.testform); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Save Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.index > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.SearchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testform);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".fakeimg[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    background: #aaa;\r\n}\r\n.fas[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  font-size: 20px;\r\n  width: 60px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: 50%;\r\n  border-width: 1px;\r\n  border-color: #5f84e1;\r\n  border-style: solid;\r\n  background:#343a40;\r\n  color:#5f84e1;\r\n  outline:0;\r\n}\r\n.fas[_ngcontent-%COMP%]:hover{\r\n  background: #5f84e1;\r\n  color: white;\r\n  text-decoration:none;\r\n}\r\n.FasActive[_ngcontent-%COMP%]{\r\n  background: #5f84e1;\r\n  color: white;\r\n  text-decoration:none;\r\n}\r\n.topnavsr[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n.topnavsr[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n  padding: 6px;\r\n  margin-top: 8px;\r\n  font-size: 17px;\r\n  border-top:solid;\r\n  border-bottom:solid;\r\n  border-left:solid;\r\n  border-right: none;\r\n  border-width: 1px;\r\n  border-color: #5f84e1;\r\n  border-radius: 20px 00 00 20px;\r\n  background-color: #343a40;\r\n  color: white;\r\n  outline:0;\r\n}\r\n.topnavsr[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  float: right;\r\n  padding: 6px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  background: #343a40;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n  border-radius: 0 20px 20px 00;\r\n  border-top:solid;\r\n  border-bottom:solid;\r\n  border-right:solid;\r\n  border-left: none;\r\n  border-width: 1px;\r\n  border-color: #5f84e1;\r\n  color: white;\r\n  outline:0;\r\n}\r\n.topnavsr[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    color: #5f84e1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBLHNCQUFzQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWtlaW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFhO1xyXG59XHJcbi5mYXMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzVmODRlMTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJhY2tncm91bmQ6IzM0M2E0MDtcclxuICBjb2xvcjojNWY4NGUxO1xyXG4gIG91dGxpbmU6MDtcclxufVxyXG4uZmFzOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICM1Zjg0ZTE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5GYXNBY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogIzVmODRlMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuXHJcbi50b3BuYXZzciAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udG9wbmF2c3IgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgYm9yZGVyLXRvcDpzb2xpZDtcclxuICBib3JkZXItYm90dG9tOnNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0OnNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItY29sb3I6ICM1Zjg0ZTE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwMCAwMCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG91dGxpbmU6MDtcclxufVxyXG5cclxuLnRvcG5hdnNyIC5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogIzM0M2E0MDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDAwO1xyXG4gIGJvcmRlci10b3A6c29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbTpzb2xpZDtcclxuICBib3JkZXItcmlnaHQ6c29saWQ7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNWY4NGUxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdXRsaW5lOjA7XHJcbn1cclxuXHJcbi50b3BuYXZzciAuc2VhcmNoLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICM1Zjg0ZTE7XHJcbn1cclxuXHJcbi8qIGVuZCBvZiBoZWFkZXIgY3NzICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, { NotesAppsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/note-container/note-container.component.ts":
/*!************************************************************!*\
  !*** ./src/app/note-container/note-container.component.ts ***!
  \************************************************************/
/*! exports provided: NoteContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteContainerComponent", function() { return NoteContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = function (a0) { return { "SelectContainerClass": a0 }; };
function NoteContainerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteContainerComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.itemSelect(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notesData_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, i_r2 === ctx_r0.itemIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notesData_r1.lable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, notesData_r1.time, "h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notesData_r1.textBody, " ");
} }
class NoteContainerComponent {
    constructor() {
        this.formValue = [];
        this.NoteBodyText = '';
        this.CurrentDate = new Date();
        this.EmmitIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.getNoteList();
    }
    getNoteList() {
        this.formValue = this.NotesAppsList;
    }
    itemSelect(i) {
        this.itemIndex = i;
        this.EmmitIndex.emit(this.itemIndex);
        this.NoteBodyText = this.NotesAppsList[i]["textBody"];
    }
    textBodyChanged() {
        this.NotesAppsList[this.itemIndex]["textBody"] = this.NoteBodyText;
        this.formValue = this.NotesAppsList;
    }
}
NoteContainerComponent.ɵfac = function NoteContainerComponent_Factory(t) { return new (t || NoteContainerComponent)(); };
NoteContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteContainerComponent, selectors: [["app-note-container"]], inputs: { NotesAppsList: "NotesAppsList" }, outputs: { EmmitIndex: "EmmitIndex" }, decls: 8, vars: 6, consts: [[1, "ParentContainer", "row"], ["data-simplebar", "", 1, "col-sm-4", "listCnotainer"], ["class", "ItemContainer row", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-sm-8"], [1, "CurrentDateStyle"], ["id", "w3review", "type", "text", "name", "w3review", "rows", "20", "cols", "80", 1, "mt20", "textBody", 3, "ngModel", "ngModelChange", "keyup"], [1, "ItemContainer", "row", 3, "ngClass", "click"], [1, "col-sm-12", "p0"], [1, "NoteTitle", "Textellipsis", 2, "max-width", "160px"], [1, "col-sm-4", "p0"], [1, "col-sm-8", "p0", "Textellipsis", 2, "max-width", "230px"], [1, "col-sm-12", "btmColBorder"]], template: function NoteContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NoteContainerComponent_div_2_Template, 10, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NoteContainerComponent_Template_textarea_ngModelChange_7_listener($event) { return ctx.NoteBodyText = $event; })("keyup", function NoteContainerComponent_Template_textarea_keyup_7_listener() { return ctx.textBodyChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx.CurrentDate, "medium"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.NoteBodyText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".ParentContainer[_ngcontent-%COMP%]{\r\n}\r\n.listCnotainer[_ngcontent-%COMP%]{\r\n    height:600px;padding-right: 35px;\r\n}\r\n.simplebar-scrollbar[_ngcontent-%COMP%]::before {\r\n    background-color: #5f84e1;\r\n  }\r\n.ItemContainer[_ngcontent-%COMP%]{\r\n    box-shadow:0 1px 5px 0 rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.19) !important;\r\n    margin-left: 20px;\r\n    border-radius: 5px;\r\n    padding : 6px;\r\n    margin-top: 10px;\r\n    border-bottom:solid;\r\n    border-color: #5f84e1;\r\n    border-bottom-width: 5px;\r\n    cursor: pointer;\r\n}\r\n.ItemContainer[_ngcontent-%COMP%]:hover{\r\n    background: #eaeefb;\r\n}\r\n.NoteTitle[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    color: gray;\r\n    font-weight: 500;\r\n}\r\n.textBody[_ngcontent-%COMP%]{\r\n    box-shadow:0 1px 5px 0 rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.19) !important;\r\n    border:none;\r\n    border-radius: 10px;\r\n    padding:20px;\r\n}\r\n.textBody[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n    outline: 0;\r\n    box-shadow:0 1px 5px 0 rgba(0,0,0,0.2),0 6px 10px 0 rgba(95, 132, 225, 0.6) !important;\r\n}\r\n.SelectContainerClass[_ngcontent-%COMP%]{\r\n    background: #eaeefb;\r\n    box-shadow:0 1px 5px 0 rgba(0,0,0,0.2),0 6px 5px 0 rgba(0, 0, 225, 0.6) !important;\r\n}\r\n.CurrentDateStyle[_ngcontent-%COMP%]{\r\n    margin:00px;\r\n    padding: 10px 0 0 20px ;\r\n    color: gray;\r\n    font-weight: 600;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS1jb250YWluZXIvbm90ZS1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7SUFDSSxZQUFZLENBQUMsbUJBQW1CO0FBQ3BDO0FBQ0E7SUFDSSx5QkFBeUI7RUFDM0I7QUFDRjtJQUNJLCtFQUErRTtJQUMvRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksK0VBQStFO0lBQy9FLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixzRkFBc0Y7QUFDMUY7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrRkFBa0Y7QUFDdEY7QUFDQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9ub3RlLWNvbnRhaW5lci9ub3RlLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlBhcmVudENvbnRhaW5lcntcclxufVxyXG4ubGlzdENub3RhaW5lcntcclxuICAgIGhlaWdodDo2MDBweDtwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG59XHJcbi5zaW1wbGViYXItc2Nyb2xsYmFyOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmODRlMTtcclxuICB9XHJcbi5JdGVtQ29udGFpbmVye1xyXG4gICAgYm94LXNoYWRvdzowIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsMC4xOSkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZyA6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOnNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWY4NGUxO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5JdGVtQ29udGFpbmVyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2VhZWVmYjtcclxufVxyXG4uTm90ZVRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50ZXh0Qm9keXtcclxuICAgIGJveC1zaGFkb3c6MCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTkpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbn1cclxuXHJcbi50ZXh0Qm9keTpmb2N1c3tcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OjAgMXB4IDVweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAxMHB4IDAgcmdiYSg5NSwgMTMyLCAyMjUsIDAuNikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLlNlbGVjdENvbnRhaW5lckNsYXNze1xyXG4gICAgYmFja2dyb3VuZDogI2VhZWVmYjtcclxuICAgIGJveC1zaGFkb3c6MCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDVweCAwIHJnYmEoMCwgMCwgMjI1LCAwLjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuLkN1cnJlbnREYXRlU3R5bGV7XHJcbiAgICBtYXJnaW46MDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDIwcHggO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-note-container',
                templateUrl: './note-container.component.html',
                styleUrls: ['./note-container.component.css']
            }]
    }], function () { return []; }, { EmmitIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], NotesAppsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! W:\Angular\NotesApps\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map