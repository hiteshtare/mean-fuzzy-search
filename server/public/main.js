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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/default/default.component */ "./src/app/components/default/default.component.ts");
/* harmony import */ var _components_custom_custom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/custom/custom.component */ "./src/app/components/custom/custom.component.ts");





var routes = [
    { path: '', redirectTo: 'default', pathMatch: 'full' },
    { path: 'default', component: _components_default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"] },
    { path: 'custom', component: _components_custom_custom_component__WEBPACK_IMPORTED_MODULE_4__["CustomComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feature-title {\n  font-size: 30px;\n  margin-bottom: 5px;\n  display: block;\n}\n\n.feature-title-approver {\n  font-size: 20px;\n  margin-top: 10px;\n  display: block;\n}\n\n.content-section.introduction {\n  background-color: purple;\n  color: #fff;\n}\n\n.content-section {\n  display: block;\n  padding: 10px;\n  overflow: hidden;\n  background-color: #f5f7f8;\n}\n\nbutton {\n  margin-right: .8em;\n}\n\n.loader {\n  background-color: #c8c8c8;\n}\n\n.ui-fieldset {\n  background-color: purple !important;\n  color: #fff !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmUtdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mZWF0dXJlLXRpdGxlLWFwcHJvdmVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbnRlbnQtc2VjdGlvbi5pbnRyb2R1Y3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGVudC1zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY3Zjg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbn1cblxuLmxvYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XG59XG5cbi51aS1maWVsZHNldCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n  <span class=\"feature-title\">Fuzzy Search Demo</span>\n  <button pButton type=\"button\" label=\"Default\" class=\"ui-button-primary\" (click)=\"navigate('default')\"></button>&nbsp;\n  <button pButton type=\"button\" label=\"Custom\" class=\"ui-button-warning\" (click)=\"navigate('custom')\"></button>\n</div>\n<router-outlet>\n</router-outlet>\n<p-toast></p-toast>\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"large\" color=\"#fff\" type=\"ball-climbing-dot\">\n  <p style=\"font-size: 20px; color: white\">Searching...</p>\n</ngx-spinner>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_fuzzy_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/fuzzy-api.service */ "./src/app/shared/services/fuzzy-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(fuzzyApiService, router) {
        this.fuzzyApiService = fuzzyApiService;
        this.router = router;
        this.fuzzyApiService.fuzzyApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    AppComponent.prototype.navigate = function (route) {
        this.router.navigate(["/" + route]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_fuzzy_api_service__WEBPACK_IMPORTED_MODULE_1__["FuzzyApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_services_fuzzy_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/fuzzy-api.service */ "./src/app/shared/services/fuzzy-api.service.ts");
/* harmony import */ var _components_default_default_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/default/default.component */ "./src/app/components/default/default.component.ts");
/* harmony import */ var _components_custom_custom_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/custom/custom.component */ "./src/app/components/custom/custom.component.ts");
/* harmony import */ var _shared_directives_number_only_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/directives/number-only.directive */ "./src/app/shared/directives/number-only.directive.ts");
/* harmony import */ var _shared_services_custom_toast_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/services/custom-toast.service */ "./src/app/shared/services/custom-toast.service.ts");








// PrimeNG Modules









// PrimeNG Modules
 // Spinner Module





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_default_default_component__WEBPACK_IMPORTED_MODULE_19__["DefaultComponent"],
                _components_custom_custom_component__WEBPACK_IMPORTED_MODULE_20__["CustomComponent"],
                _shared_directives_number_only_directive__WEBPACK_IMPORTED_MODULE_21__["NumberOnlyDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__["InputTextareaModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__["CheckboxModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_13__["RadioButtonModule"],
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_14__["FieldsetModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"]
            ],
            providers: [_shared_services_fuzzy_api_service__WEBPACK_IMPORTED_MODULE_18__["FuzzyApiService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_16__["MessageService"], _shared_services_custom_toast_service__WEBPACK_IMPORTED_MODULE_22__["CustomToastService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/custom/custom.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/custom/custom.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feature-title {\n  font-size: 30px;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.feature-title-approver {\n  font-size: 20px;\n  margin-top: 10px;\n  display: block;\n}\n\n.content-section.introduction {\n  background-color: purple;\n  color: #fff;\n}\n\n.content-section {\n  display: block;\n  padding: 10px;\n  overflow: hidden;\n  background-color: #f5f7f8;\n}\n\nbutton {\n  margin-right: .8em;\n}\n\n.loader {\n  background-color: #c8c8c8;\n}\n\n.form-control:disabled {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20vY3VzdG9tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20vY3VzdG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mZWF0dXJlLXRpdGxlLWFwcHJvdmVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbnRlbnQtc2VjdGlvbi5pbnRyb2R1Y3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGVudC1zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY3Zjg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbn1cblxuLmxvYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XG59XG5cbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/custom/custom.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/custom/custom.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n  <p-fieldset legend=\"Custom\">\n    <div class=\"ui-g\" style=\"margin-bottom:2px\">\n      <div class=\"ui-g-3\">\n        <span>Choose Custom JSON :</span>\n        <p-radioButton name=\"rdCustomJson\" value=\"true\" label=\"Yes\" [(ngModel)]=\"selectedCustomJsonValue\" inputId=\"rdcustomjson_yes\"></p-radioButton>\n        <p-radioButton name=\"rdCustomJson\" value=\"false\" label=\"No\" [(ngModel)]=\"selectedCustomJsonValue\" inputId=\"rdcustomjson_no\"></p-radioButton>\n      </div>\n      <div class=\"ui-g-9\">\n        <textarea [rows]=\"5\" [cols]=\"100\" [(ngModel)]='txtAreaJSONValue' placeholder=\"Enter Valid JSON\" pInputTextarea\n          autoResize=\"autoResize\"></textarea>\n      </div>\n    </div>\n    <div class=\"ui-g\" style=\"margin-bottom:2px\">\n      <div class=\"ui-g-3\">\n        <span>Search Box : </span>\n        <input type=\"text\" placeholder=\"Search Text\" pInputText [(ngModel)]=\"txtSearch\" />\n      </div>\n    </div>\n    <div class=\"ui-g\" style=\"margin-bottom:2px\">\n      <div class=\"ui-g-3\">\n        <span>ngram Size : </span>\n        <input type=\"text\" placeholder=\"ngram Size\" pInputText [(ngModel)]=\"txtNgramSize\" />\n      </div>\n      <h5 style=\"color: lime;\">Note : By default, Symlar is applied with weightage of 1</h5>\n    </div>\n    <div class=\"ui-g\" style=\"margin-bottom:2px\">\n      <div class=\"ui-g-3\">\n        <span>Threshold : </span>\n        <input type=\"text\" placeholder=\"Threshold Value\" pInputText [(ngModel)]=\"txtThresholdValue\" />\n      </div>\n      <h5 style=\"color: lime;\">Note : By default, Threshold is applied with a value 0</h5>\n    </div>\n    <div>\n      <h3>Choose Combinations of Phonetic Algorithms :</h3>\n      <form novalidate [formGroup]=\"sampleForm\">\n        <div class=\"form-group row\" formArrayName=\"searchAlgorithm\">\n          <div class=\"col-xs-12\" *ngFor=\"let item of langControlMetada; let i = index;\">\n            <div [formGroupName]=\"i\">\n              <div class=\"form-group row\">\n                <div class=\"form-inline\" style=\"margin-left:15px;\">\n                  <div class=\"form-check\">\n                    <p-checkbox [name]=\"item.checkboxName\" class=\"form-check-label\" [value]=\"item.checkboxName\" [label]=\"item.checkboxLabel\"\n                      [formControlName]=\"item.checkboxName\" [inputId]=\"item.checkboxName\" (onChange)=\"languageSelectionChange\n(i, item.checkboxName, item.associateControlName)\"></p-checkbox>\n                    <input *ngIf=\"item.associateControlType == 'textbox'\" [id]=\"item.associateControlName\"\n                      [formControlName]=\"item.associateControlName\" class=\"form-control form-control-sm\" type=\"number\"\n                      placeholder=\"(0-100)\" myNumberOnly pInputText>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n        <span *ngIf=\"missingLanguage\" style=\"color:red\">Missing programming language!</span>\n        <div class=\"form-group row\">\n          <div class=\"col-xs-12\">\n            <button pButton type=\"button\" label=\"Submit\" class=\"ui-button-success\" [disabled]=\"!sampleForm.valid || selectedAlgorithmCount == 0\"\n              (click)=\"submit($event)\"></button>\n          </div>\n        </div>\n        <!-- <br>\n        <div class=\"form-group row\">\n          <div class=\"col-xs-12\">\n            Output: {{computedValue | json}}\n          </div>\n        </div> -->\n      </form>\n      <hr />\n    </div>\n\n  </p-fieldset>\n</div>\n\n<p-table [value]=\"results\">\n  <ng-template pTemplate=\"caption\">\n    Results\n  </ng-template>\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th rowspan=\"2\">Choice</th>\n      <th rowspan=\"2\">Index</th>\n      <th [colSpan]=\"computedValue.length\">Score</th>\n      <th rowspan=\"2\">Final Score</th>\n    </tr>\n    <tr>\n      <ng-container *ngFor=\"let comp of computedValue\">\n        <th colspan=\"1\">{{comp.value}}</th>\n      </ng-container>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-result>\n    <tr>\n      <td>{{result['choice']}}</td>\n      <td>{{result['index']}}</td>\n      <ng-container *ngFor=\"let comp of computedValue\">\n        <td>{{result[comp.value]}}</td>\n      </ng-container>\n      <td>{{result['final_score']}}</td>\n    </tr>\n  </ng-template>\n</p-table>\n"

/***/ }),

/***/ "./src/app/components/custom/custom.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/custom/custom.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomComponent, Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponent", function() { return CustomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Common", function() { return Common; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_fuzzy_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/fuzzy-api.service */ "./src/app/shared/services/fuzzy-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_custom_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/custom-toast.service */ "./src/app/shared/services/custom-toast.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






var CustomComponent = /** @class */ (function () {
    function CustomComponent(fuzzyApiService, formBuilder, customToastService, spinner) {
        this.fuzzyApiService = fuzzyApiService;
        this.formBuilder = formBuilder;
        this.customToastService = customToastService;
        this.spinner = spinner;
        this.txtSearch = '';
        this.txtNgramSize = '2';
        this.txtThresholdValue = '0';
        this.txtAreaJSON = '';
        this.searchAlgorithmList = [
            // new Item('Daitch Mokotoff', 'daitchmokotoff'),
            new Item('Symlar', 'symlar'),
            // new Item('Soundex', 'soundex'),
            // new Item('Double Metaphone', 'doublemetaphone'),
            new Item('Natural Metaphone', 'naturalmetaphone'),
            new Item('Natural Soundex', 'naturalsoundex'),
            new Item('Jaro Winkler', 'jarowinkler'),
            new Item('Wuzzy - Levenshtein', 'levenshtein'),
            new Item('Wuzzy - ngram', 'ngram'),
            new Item('FuzzBall - Partial Ratio', 'fuzzball')
            // new Item('Fuse', 'fuse'),
            // new Item('Lunar - Porter Stemmer', 'lunr')
        ];
        this.langControlMetada = [];
        this.selectedAlgorithmCount = 0;
        this.missingLanguage = false;
        this.selectedCustomJsonValue = 'false';
        this.sampleForm = this.formBuilder.group({
            searchAlgorithm: this.formBuilder.array([{}])
        });
        this.populateSearchAlgorithm();
    }
    // tslint:disable-next-line:use-life-cycle-interface
    CustomComponent.prototype.ngOnInit = function () {
        // this.loadDefaultResults();
        this.loadCustomResults();
    };
    CustomComponent.prototype.onTxtSearchChange = function (value) {
        this.loadCustomResults();
    };
    Object.defineProperty(CustomComponent.prototype, "txtAreaJSONValue", {
        get: function () {
            return JSON.stringify(this.txtAreaJSON, null, 2);
        },
        set: function (v) {
            try {
                this.txtAreaJSON = JSON.parse(v);
            }
            catch (e) {
                console.log('error occored while you were typing the JSON');
            }
        },
        enumerable: true,
        configurable: true
    });
    CustomComponent.prototype.loadCustomResults = function () {
        var _this = this;
        this.spinner.show();
        // Default Value
        this.computedValue = typeof (this.computedValue) === 'undefined' ? [{ value: 'symlar', text: '1' }] : this.computedValue;
        var options = {
            'ngramSize': this.txtNgramSize,
            'thresholdValue': this.txtThresholdValue,
            'searchStr': this.txtSearch,
            'selectedAlgorithms': this.computedValue,
            'isCustomJson': this.selectedCustomJsonValue,
            'examples': this.txtAreaJSON
        };
        this.fuzzyApiService.getCustomResults(options).subscribe(function (data) {
            if (data['success'] === true) {
                _this.customToastService.toastMessage('success', 'Custom Search Complete', data['message']);
                _this.results = data['payload'];
                _this.spinner.hide();
            }
        });
    };
    CustomComponent.prototype.submit = function (e) {
        e.preventDefault();
        // Reset
        var selectedLanguageList = [];
        var searchAlgorithm = this.searchAlgorithms();
        var i;
        // Checkbox id
        var languageId;
        for (i = 0; i < searchAlgorithm.controls.length; i++) {
            var control = searchAlgorithm.controls[i];
            var selectedLanguage = {};
            // tslint:disable-next-line:forin
            for (var k in control.controls) {
                languageId = k.split('_')[1];
                break;
            }
            var value = control.controls["" + Common.CheckboxPrefix + languageId].value;
            // Capture the selected checkbox Id and textbox value
            if (value.length !== 0) {
                selectedLanguage.value = languageId;
                selectedLanguage.text = control.controls["" + Common.OtherPrefix + languageId].value;
                selectedLanguageList.push(selectedLanguage);
            }
        }
        if (selectedLanguageList.length === 0) {
            this.missingLanguage = true;
        }
        else {
            this.missingLanguage = false;
            this.computedValue = selectedLanguageList;
            // Submit to API
            this.loadCustomResults();
        }
    };
    CustomComponent.prototype.populateSearchAlgorithm = function () {
        // Get the property
        this.searchAlgorithmFormArray = this.sampleForm.get('searchAlgorithm');
        // Clear
        this.searchAlgorithmFormArray.removeAt(0);
        var p;
        // Loop through the list and create the formarray metadata
        for (var _i = 0, _a = this.searchAlgorithmList; _i < _a.length; _i++) {
            p = _a[_i];
            var control = new FormControlMetadata();
            var group = this.formBuilder.group({});
            // Create the checkbox and other form element metadata
            control.checkboxName = "" + Common.CheckboxPrefix + p.value;
            control.checkboxLabel = p.text;
            control.associateControlName = "" + Common.OtherPrefix + p.value;
            // control.associateControlLabel = `${p.text} weightage`;
            control.associateControlLabel = "Weightage (0-1)";
            control.associateControlValue = 1;
            control.associateControlType = Common.ControlType[Common.ControlType.textbox];
            // Store in array, use by html to loop through
            this.langControlMetada.push(control);
            // Form control
            var checkBoxControl = this.formBuilder.control('');
            var associateControl = this.formBuilder.control({ value: '', disabled: true });
            // Add to form group [key, control]
            group.addControl("" + Common.CheckboxPrefix + p.value, checkBoxControl);
            group.addControl("" + Common.OtherPrefix + p.value, associateControl);
            // Add to form array
            this.searchAlgorithmFormArray.push(group);
        }
    };
    CustomComponent.prototype.searchAlgorithms = function () {
        return this.sampleForm.get('searchAlgorithm');
    };
    CustomComponent.prototype.languageSelectionChange = function (pos, cnkName, txtName) {
        var searchAlgorithm = this.searchAlgorithms();
        var control = searchAlgorithm.controls[pos];
        var value = control.controls[cnkName].value;
        if (value.length === 0) {
            // Checkbox checked
            control.controls[txtName].setValue('');
            control.controls[txtName].disable();
            control.controls[txtName].clearValidators();
            control.controls[txtName].updateValueAndValidity();
            this.selectedAlgorithmCount--;
        }
        else {
            // Unchecked
            control.controls[txtName].enable();
            control.controls[txtName].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            control.controls[txtName].updateValueAndValidity();
            this.selectedAlgorithmCount++;
        }
    };
    CustomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom',
            template: __webpack_require__(/*! ./custom.component.html */ "./src/app/components/custom/custom.component.html"),
            styles: [__webpack_require__(/*! ./custom.component.css */ "./src/app/components/custom/custom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_fuzzy_api_service__WEBPACK_IMPORTED_MODULE_2__["FuzzyApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_services_custom_toast_service__WEBPACK_IMPORTED_MODULE_4__["CustomToastService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], CustomComponent);
    return CustomComponent;
}()); // End of CustomComponent class

var Item = /** @class */ (function () {
    function Item(text, value) {
        this.text = text;
        this.value = value;
    }
    return Item;
}());
var ControlType;
(function (ControlType) {
    ControlType[ControlType["textbox"] = 1] = "textbox";
    ControlType[ControlType["dropdown"] = 2] = "dropdown";
    ControlType[ControlType["radioButtonList"] = 3] = "radioButtonList";
})(ControlType || (ControlType = {}));
var FormControlMetadata = /** @class */ (function () {
    function FormControlMetadata() {
    }
    return FormControlMetadata;
}());
var FormObjectToApi = /** @class */ (function () {
    function FormObjectToApi() {
    }
    return FormObjectToApi;
}());
var Common = /** @class */ (function () {
    function Common() {
    }
    Common.ControlType = ControlType;
    Common.CheckboxPrefix = 'cbLanguage_';
    Common.OtherPrefix = 'otherValue_';
    return Common;
}());



/***/ }),

/***/ "./src/app/components/default/default.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/default/default.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feature-title {\n  font-size: 30px;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.feature-title-approver {\n  font-size: 20px;\n  margin-top: 10px;\n  display: block;\n}\n\n.content-section.introduction {\n  background-color: purple;\n  color: #fff;\n}\n\n.content-section {\n  display: block;\n  padding: 10px;\n  overflow: hidden;\n  background-color: #f5f7f8;\n}\n\nbutton {\n  margin-right: .8em;\n}\n\n.loader {\n  background-color: #c8c8c8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmUtdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZmVhdHVyZS10aXRsZS1hcHByb3ZlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250ZW50LXNlY3Rpb24uaW50cm9kdWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRlbnQtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2Y4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG59XG5cbi5sb2FkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/default/default.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/default/default.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n  <p-fieldset legend=\"Default\">\n    <div class=\"ui-g\" style=\"margin-bottom:2px\">\n      <div class=\"ui-g-3\">\n        <span>Choose Custom JSON :</span>\n        <p-radioButton name=\"rdCustomJson\" value=\"true\" label=\"Yes\" [(ngModel)]=\"selectedCustomJsonValue\" inputId=\"rdcustomjson_yes\"></p-radioButton>\n        <p-radioButton name=\"rdCustomJson\" value=\"false\" label=\"No\" [(ngModel)]=\"selectedCustomJsonValue\" inputId=\"rdcustomjson_no\"></p-radioButton>\n      </div>\n      <div class=\"ui-g-9\">\n        <textarea [rows]=\"5\" [cols]=\"100\" [(ngModel)]='txtAreaJSONValue' placeholder=\"Enter Valid JSON\" pInputTextarea\n          autoResize=\"autoResize\"></textarea>\n      </div>\n    </div>\n    <div class=\"ui-g\" style=\"margin-bottom:2px\">\n      <div class=\"ui-g-3\">\n        <span>Search Box : </span>\n        <input type=\"text\" placeholder=\"Search Text\" pInputText [(ngModel)]=\"txtSearch\" (ngModelChange)=\"onTxtSearchChange($event)\" />\n      </div>\n    </div>\n    <div class=\"ui-g\" style=\"margin-bottom:2px\">\n      <div class=\"ui-g-3\">\n        <span>ngram Size : </span>\n        <input type=\"text\" placeholder=\"ngram Size\" pInputText [(ngModel)]=\"txtNgramSize\" (ngModelChange)=\"onTxtSearchChange($event)\" />\n      </div>\n    </div>\n    <div class=\"ui-g\" style=\"margin-bottom:2px\">\n      <div class=\"ui-g-3\">\n        <span>Threshold : </span>\n        <input type=\"text\" placeholder=\"Threshold Value\" pInputText [(ngModel)]=\"txtThresholdValue\" (ngModelChange)=\"onTxtSearchChange($event)\" />\n      </div>\n      <h5 style=\"color: lime;\">Note : By default, Threshold is applied with a value 0</h5>\n    </div>\n    <div>\n      <h3>Choose a Phonetic Algorithm :</h3>\n      <!-- <div class=\"ui-g\" style=\"width:700px;margin-bottom:5px\">\n        <div class=\"ui-g-3\">\n          <p-radioButton name=\"rdPhonetics\" value=\"daitchmokotoff\" label=\"Daitch Mokotoff\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"daitchmokotoff\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-radioButton name=\"rdPhonetics\" value=\"soundex\" label=\"Soundex\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"soundex\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-radioButton name=\"rdPhonetics\" value=\"doublemetaphone\" label=\"Double Metaphone\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"doublemetaphone\"></p-radioButton>\n        </div>\n      </div> -->\n      <div class=\"ui-g\" style=\"width:700px;margin-bottom:5px\">\n        <div class=\"ui-g-3\">\n          <p-radioButton name=\"rdPhonetics\" value=\"symlar\" label=\"Symlar\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"symlar\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-radioButton name=\"rdPhonetics\" value=\"naturalmetaphone\" label=\"Natural Metaphone\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"naturalmetaphone\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-radioButton name=\"rdPhonetics\" value=\"naturalsoundex\" label=\"Natural Soundex\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"naturalsoundex\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-radioButton name=\"rdPhonetics\" value=\"jarowinkler\" label=\"Jaro Winkler\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"jarowinkler\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-radioButton name=\"rdPhonetics\" value=\"levenshtein\" label=\"Wuzzy - Levenshtein\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"levenshtein\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-radioButton name=\"rdPhonetics\" value=\"ngram\" label=\"Wuzzy - ngram\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"ngram\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-3\">\n          <p-radioButton name=\"rdPhonetics\" value=\"fuzzball\" label=\"FuzzBall - Partial Ratio\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"fuzzball\"></p-radioButton>\n        </div>\n      </div>\n    </div>\n    <div>\n      <h3>Other Algorithms :</h3>\n      <div class=\"ui-g\" style=\"width:700px;margin-bottom:5px\">\n        <div class=\"ui-g-4\">\n          <p-radioButton name=\"rdPhonetics\" value=\"lunr\" label=\"Lunar - Porter Stemmer\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"lunr\"></p-radioButton>\n        </div>\n        <div class=\"ui-g-4\">\n          <p-radioButton name=\"rdPhonetics\" value=\"fuse\" label=\"Fuse\" [(ngModel)]=\"selectedPhoneticValue\"\n            (ngModelChange)=\"onTxtSearchChange($event)\" inputId=\"fuse\"></p-radioButton>\n        </div>\n      </div>\n    </div>\n  </p-fieldset>\n</div>\n\n<p-table [value]=\"results\">\n  <ng-template pTemplate=\"caption\">\n    Results\n  </ng-template>\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th>Choice</th>\n      <th>Score</th>\n      <th>Index</th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-result>\n    <tr>\n      <td>{{result['choice']}}</td>\n      <td>{{result['score']}}</td>\n      <td>{{result['index']}}</td>\n    </tr>\n  </ng-template>\n</p-table>\n"

/***/ }),

/***/ "./src/app/components/default/default.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/default/default.component.ts ***!
  \*********************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_fuzzy_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/fuzzy-api.service */ "./src/app/shared/services/fuzzy-api.service.ts");
/* harmony import */ var src_app_shared_services_custom_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/custom-toast.service */ "./src/app/shared/services/custom-toast.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var DefaultComponent = /** @class */ (function () {
    function DefaultComponent(fuzzyApiService, customToastService, spinner) {
        this.fuzzyApiService = fuzzyApiService;
        this.customToastService = customToastService;
        this.spinner = spinner;
        this.txtSearch = '';
        this.txtNgramSize = '2';
        this.txtThresholdValue = '0';
        this.txtAreaJSON = '';
        this.selectedPhoneticValue = ['symlar'];
        this.selectedCustomJsonValue = 'false';
    }
    // tslint:disable-next-line:use-life-cycle-interface
    DefaultComponent.prototype.ngOnInit = function () {
        this.loadDefaultResults();
    };
    DefaultComponent.prototype.onTxtSearchChange = function (value) {
        this.loadDefaultResults();
    };
    Object.defineProperty(DefaultComponent.prototype, "txtAreaJSONValue", {
        get: function () {
            return JSON.stringify(this.txtAreaJSON, null, 2);
        },
        set: function (v) {
            try {
                this.txtAreaJSON = JSON.parse(v);
            }
            catch (e) {
                console.log('error occored while you were typing the JSON');
            }
        },
        enumerable: true,
        configurable: true
    });
    DefaultComponent.prototype.loadDefaultResults = function () {
        var _this = this;
        this.spinner.show();
        var value = this.selectedPhoneticValue[0] === 'symlar' ? 'symlar' : this.selectedPhoneticValue;
        var options = {
            'searchStr': this.txtSearch,
            'ngramSize': this.txtNgramSize,
            'thresholdValue': this.txtThresholdValue,
            'name': value,
            'isCustomJson': this.selectedCustomJsonValue,
            'examples': this.txtAreaJSON
        };
        this.fuzzyApiService.getDefaultResults(options).subscribe(function (data) {
            if (data['success'] === true) {
                _this.customToastService.toastMessage('success', 'Custom Search Complete', data['message']);
                _this.results = data['payload'];
                _this.spinner.hide();
            }
        });
    };
    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/components/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.css */ "./src/app/components/default/default.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_fuzzy_api_service__WEBPACK_IMPORTED_MODULE_2__["FuzzyApiService"], src_app_shared_services_custom_toast_service__WEBPACK_IMPORTED_MODULE_3__["CustomToastService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/number-only.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/number-only.directive.ts ***!
  \************************************************************/
/*! exports provided: NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return NumberOnlyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^[0-9][0-9]?$|^100$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[myNumberOnly]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "./src/app/shared/services/custom-toast.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/custom-toast.service.ts ***!
  \*********************************************************/
/*! exports provided: CustomToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomToastService", function() { return CustomToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__);



var CustomToastService = /** @class */ (function () {
    function CustomToastService(messageService) {
        this.messageService = messageService;
    }
    CustomToastService.prototype.toastMessage = function (p_severity, p_summary, p_detail) {
        this.messageService.add({
            life: 2000, severity: p_severity, summary: p_summary, detail: p_detail
        });
    };
    CustomToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], CustomToastService);
    return CustomToastService;
}());



/***/ }),

/***/ "./src/app/shared/services/fuzzy-api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/fuzzy-api.service.ts ***!
  \******************************************************/
/*! exports provided: FuzzyApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuzzyApiService", function() { return FuzzyApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var FuzzyApiService = /** @class */ (function () {
    // For Production
    // private fuzzyApiUrl = '';
    function FuzzyApiService(http) {
        this.http = http;
        this.showLoader = false;
        this.loadingMessage = '';
        // For Developement
        this.fuzzyApiUrl = '';
    }
    FuzzyApiService.prototype.getDefaultResults = function (options) {
        return this.http.post(this.fuzzyApiUrl + "/fuzzy/default/", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    FuzzyApiService.prototype.getCustomResults = function (options) {
        return this.http.post(this.fuzzyApiUrl + "/fuzzy/custom/", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    FuzzyApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FuzzyApiService);
    return FuzzyApiService;
}());



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
    production: false,
    apiUrl: ""
    // apiUrl: `http://localhost:4000`
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

module.exports = __webpack_require__(/*! /home/hitesh/Documents/Work/Projects/mean-fuzzy-search/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map