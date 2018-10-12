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

/***/ "./src/app/_config/config.js":
/*!***********************************!*\
  !*** ./src/app/_config/config.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {};

config.API_BASE_URL = '/api';

/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // Navigate to the login page
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = this.auth.getToken();
        if (token) {
            // Get the token from the service.
            var authHeader = 'Bearer ' + token;
            // Clone the request to add the new header.
            var authReq = req.clone({ setHeaders: { Authorization: authHeader } });
            // Pass on the cloned request instead of the original request.
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/alert.model.ts":
/*!****************************************!*\
  !*** ./src/app/_models/alert.model.ts ***!
  \****************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/_models/excercise.model.ts":
/*!********************************************!*\
  !*** ./src/app/_models/excercise.model.ts ***!
  \********************************************/
/*! exports provided: Excercise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Excercise", function() { return Excercise; });
var Excercise = /** @class */ (function () {
    function Excercise() {
    }
    return Excercise;
}());



/***/ }),

/***/ "./src/app/_models/user.model.ts":
/*!***************************************!*\
  !*** ./src/app/_models/user.model.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.surName;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/_models/workout-log.model.ts":
/*!**********************************************!*\
  !*** ./src/app/_models/workout-log.model.ts ***!
  \**********************************************/
/*! exports provided: WorkoutLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutLog", function() { return WorkoutLog; });
var WorkoutLog = /** @class */ (function () {
    function WorkoutLog(workout) {
        this.workout = workout;
    }
    return WorkoutLog;
}());



/***/ }),

/***/ "./src/app/_models/workout.model.ts":
/*!******************************************!*\
  !*** ./src/app/_models/workout.model.ts ***!
  \******************************************/
/*! exports provided: Workout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workout", function() { return Workout; });
var Workout = /** @class */ (function () {
    function Workout() {
    }
    return Workout;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/alert.model */ "./src/app/_models/alert.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    // this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_models_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/user.model */ "./src/app/_models/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_config/config */ "./src/app/_config/config.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router, alertService) {
        this.http = http;
        this.router = router;
        this.alertService = alertService;
        this.apiBaseUrl = _config_config__WEBPACK_IMPORTED_MODULE_4__["default"].API_BASE_URL;
        this.CURRENT_USER = 'auth-token';
    }
    AuthenticationService.prototype.saveToken = function (token) {
        window.localStorage[this.CURRENT_USER] = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (window.localStorage[this.CURRENT_USER]) {
            return window.localStorage[this.CURRENT_USER];
        }
        else {
            return '';
        }
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (this.isLoggedIn()) {
            var token = this.getToken();
            var payload = JSON.parse(window.atob(token.split('.')[1]));
            var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
            user.email = payload.email;
            user.firstName = payload.firstName;
            user.surName = payload.surName;
            return user;
        }
        else {
            return;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        if (token) {
            var payload = JSON.parse(window.atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.login = function (user) {
        var url = this.apiBaseUrl + "/login";
        return this.sendLoginRequest(url, user);
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(this.CURRENT_USER);
    };
    AuthenticationService.prototype.register = function (user) {
        var url = this.apiBaseUrl + "/register";
        return this.sendLoginRequest(url, user);
    };
    AuthenticationService.prototype.sendLoginRequest = function (url, user) {
        var _this = this;
        return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log(data);
            console.log('d');
            _this.saveToken(data.token);
            _this.router.navigateByUrl(_this.redirectUrl ? _this.redirectUrl : '/');
            _this.redirectUrl = '';
            return data;
        }));
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/dao.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/dao.service.ts ***!
  \******************************************/
/*! exports provided: DaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaoService", function() { return DaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_config/config.js */ "./src/app/_config/config.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DaoService = /** @class */ (function () {
    function DaoService(http, endpoint) {
        this.http = http;
        this.endpoint = endpoint;
        this.apiBaseUrl = _config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].API_BASE_URL;
    }
    /**
     * Send GET request for list of all instances of entity
     */
    DaoService.prototype.findAll = function () {
        return this.http.get(this.apiBaseUrl + "/" + this.endpoint);
    };
    /**
     * Send GET request to find instance of entity by id
     */
    DaoService.prototype.findById = function (id) {
        return this.http.get(this.apiBaseUrl + "/" + this.endpoint + "/" + id);
    };
    /**
     * Send POST request to create new instance of entity
     * @param newObject Object to be posted
     */
    DaoService.prototype.create = function (newObject) {
        return this.http.post(this.apiBaseUrl + "/" + this.endpoint, newObject);
    };
    DaoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], DaoService);
    return DaoService;
}());



/***/ }),

/***/ "./src/app/_services/excercise.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/excercise.service.ts ***!
  \************************************************/
/*! exports provided: ExcerciseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerciseService", function() { return ExcerciseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dao.service */ "./src/app/_services/dao.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExcerciseService = /** @class */ (function (_super) {
    __extends(ExcerciseService, _super);
    function ExcerciseService(http) {
        return _super.call(this, http, 'workouts') || this;
    }
    ExcerciseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExcerciseService);
    return ExcerciseService;
}(_dao_service__WEBPACK_IMPORTED_MODULE_1__["DaoService"]));



/***/ }),

/***/ "./src/app/_services/workout-log.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/workout-log.service.ts ***!
  \**************************************************/
/*! exports provided: WorkoutLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutLogService", function() { return WorkoutLogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dao.service */ "./src/app/_services/dao.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutLogService = /** @class */ (function (_super) {
    __extends(WorkoutLogService, _super);
    function WorkoutLogService(http) {
        return _super.call(this, http, 'workoutlogs') || this;
    }
    WorkoutLogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WorkoutLogService);
    return WorkoutLogService;
}(_dao_service__WEBPACK_IMPORTED_MODULE_1__["DaoService"]));



/***/ }),

/***/ "./src/app/_services/workout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/workout.service.ts ***!
  \**********************************************/
/*! exports provided: WorkoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutService", function() { return WorkoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dao.service */ "./src/app/_services/dao.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutService = /** @class */ (function (_super) {
    __extends(WorkoutService, _super);
    function WorkoutService(http) {
        var _this = _super.call(this, http, 'workouts') || this;
        _this.resourceEndpoint = 'workouts';
        return _this;
    }
    WorkoutService.prototype.addNewExcerise = function (workoutId, newExcercise) {
        return this.http.post(this.apiBaseUrl + "/" + this.resourceEndpoint + "/" + workoutId, newExcercise);
    };
    WorkoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WorkoutService);
    return WorkoutService;
}(_dao_service__WEBPACK_IMPORTED_MODULE_2__["DaoService"]));



/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n  <span>{{alert.message}}</span>\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>\n"

/***/ }),

/***/ "./src/app/alert/alert.component.scss":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  padding: 20px;\n  color: white;\n  text-align: center;\n  font-size: 0.9rem;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex; }\n  .alert.alert-success {\n    background: #99d847;\n    color: white; }\n  .alert.alert-danger {\n    background: #fb6262;\n    color: white; }\n  .alert.alert-info {\n    background: #4b99ed;\n    color: white; }\n  .alert.alert-warning {\n    background: #feb819;\n    color: white; }\n  .alert span {\n    flex: 1; }\n  .alert .close {\n    cursor: pointer;\n    transition: all 250ms;\n    text-decoration: none; }\n  .alert .close:hover {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_alert_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/alert.model */ "./src/app/_models/alert.model.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
            // remove alert after 3s
            setTimeout(function () {
                _this.removeAlert(alert);
            }, 3000);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case _models_alert_model__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success:
                return 'alert alert-success';
            case _models_alert_model__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error:
                return 'alert alert-danger';
            case _models_alert_model__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info:
                return 'alert alert-info';
            case _models_alert_model__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/alert/alert.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _workouts_list_workouts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workouts-list/workouts-list.component */ "./src/app/workouts-list/workouts-list.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _workout_detail_workout_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workout-detail/workout-detail.component */ "./src/app/workout-detail/workout-detail.component.ts");
/* harmony import */ var _wokout_log_workout_log_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wokout-log/workout-log.component */ "./src/app/wokout-log/workout-log.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        data: { title: 'Workout app login' },
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        data: { title: 'Workout app register' },
    },
    {
        path: 'workouts',
        component: _workouts_list_workouts_list_component__WEBPACK_IMPORTED_MODULE_5__["WorkoutsListComponent"],
        data: { title: 'Workout list' },
    },
    {
        path: 'workout/:id',
        component: _workout_detail_workout_detail_component__WEBPACK_IMPORTED_MODULE_7__["WorkoutDetailComponent"],
        data: { title: 'Workout detail' },
    },
    {
        path: 'workout-log',
        component: _wokout_log_workout_log_component__WEBPACK_IMPORTED_MODULE_8__["WorkoutLogComponent"],
        data: { title: 'Workout log' },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
    },
    {
        path: '',
        redirectTo: '/workouts',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
        data: { title: 'Workout app - page not found' },
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-alert></app-alert>\n<router-outlet></router-outlet>\n"

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
        this.title = 'ittweb2-frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/page-header/page-header.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _workouts_list_workouts_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workouts-list/workouts-list.component */ "./src/app/workouts-list/workouts-list.component.ts");
/* harmony import */ var _services_workout_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/workout.service */ "./src/app/_services/workout.service.ts");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ "./src/app/_helpers/auth.interceptor.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _workouts_list_add_workout_form_add_workout_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./workouts-list/add-workout-form/add-workout-form.component */ "./src/app/workouts-list/add-workout-form/add-workout-form.component.ts");
/* harmony import */ var _workout_detail_workout_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./workout-detail/workout-detail.component */ "./src/app/workout-detail/workout-detail.component.ts");
/* harmony import */ var _workout_detail_add_excercise_form_add_excercise_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./workout-detail/add-excercise-form/add-excercise-form.component */ "./src/app/workout-detail/add-excercise-form/add-excercise-form.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_excercise_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/excercise.service */ "./src/app/_services/excercise.service.ts");
/* harmony import */ var _wokout_log_workout_log_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wokout-log/workout-log.component */ "./src/app/wokout-log/workout-log.component.ts");
/* harmony import */ var _wokout_log_add_log_form_add_log_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wokout-log/add-log-form/add-log-form.component */ "./src/app/wokout-log/add-log-form/add-log-form.component.ts");
/* harmony import */ var _services_workout_log_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_services/workout-log.service */ "./src/app/_services/workout-log.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_18__["AlertComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _workouts_list_workouts_list_component__WEBPACK_IMPORTED_MODULE_10__["WorkoutsListComponent"],
                _workouts_list_add_workout_form_add_workout_form_component__WEBPACK_IMPORTED_MODULE_14__["AddWorkoutFormComponent"],
                _workout_detail_workout_detail_component__WEBPACK_IMPORTED_MODULE_15__["WorkoutDetailComponent"],
                _workout_detail_add_excercise_form_add_excercise_form_component__WEBPACK_IMPORTED_MODULE_16__["AddExcerciseFormComponent"],
                _wokout_log_workout_log_component__WEBPACK_IMPORTED_MODULE_21__["WorkoutLogComponent"],
                _wokout_log_add_log_form_add_log_form_component__WEBPACK_IMPORTED_MODULE_22__["AddLogFormComponent"],
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
            providers: [
                _services_workout_service__WEBPACK_IMPORTED_MODULE_11__["WorkoutService"],
                _services_workout_log_service__WEBPACK_IMPORTED_MODULE_23__["WorkoutLogService"],
                _services_excercise_service__WEBPACK_IMPORTED_MODULE_20__["ExcerciseService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_19__["AlertService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->\n  <svg width=\"44\" height=\"44\" viewBox=\"0 0 44 44\" xmlns=\"http://www.w3.org/2000/svg\" [attr.stroke]=\"stroke\">\n    <g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\">\n      <circle cx=\"22\" cy=\"22\" r=\"1\">\n        <animate attributeName=\"r\" begin=\"0s\" dur=\"1.8s\" values=\"1; 20\" calcMode=\"spline\" keyTimes=\"0; 1\" keySplines=\"0.165, 0.84, 0.44, 1\"\n          repeatCount=\"indefinite\" />\n        <animate attributeName=\"stroke-opacity\" begin=\"0s\" dur=\"1.8s\" values=\"1; 0\" calcMode=\"spline\" keyTimes=\"0; 1\"\n          keySplines=\"0.3, 0.61, 0.355, 1\" repeatCount=\"indefinite\" />\n      </circle>\n      <circle cx=\"22\" cy=\"22\" r=\"1\">\n        <animate attributeName=\"r\" begin=\"-0.9s\" dur=\"1.8s\" values=\"1; 20\" calcMode=\"spline\" keyTimes=\"0; 1\" keySplines=\"0.165, 0.84, 0.44, 1\"\n          repeatCount=\"indefinite\" />\n        <animate attributeName=\"stroke-opacity\" begin=\"-0.9s\" dur=\"1.8s\" values=\"1; 0\" calcMode=\"spline\" keyTimes=\"0; 1\"\n          keySplines=\"0.3, 0.61, 0.355, 1\" repeatCount=\"indefinite\" />\n      </circle>\n    </g>\n  </svg>\n\n</div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.scss":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 50px; }\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
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

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.stroke = '#4b99ed';
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/loader/loader.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login_wrapper\">\n  <div class=\"login_inner\">\n    <div class=\"login_logo\">\n      <img src='assets/images/logo_full.png' alt=\"title\" />\n      <h1>Workout App</h1>\n    </div>\n\n    <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" class=\"form_login\">\n      <div>\n        <label for=\"username\">Email</label>\n        <input type=\"email\" name=\"email\" placeholder=\"Your email\" id=\"email\" required [(ngModel)]=\"user.email\" email />\n      </div>\n      <div>\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" placeholder=\"Your password\" id=\"password\" required [(ngModel)]=\"user.password\" />\n      </div>\n      <div>\n        <input type=\"submit\" value=\"Log In\" class=\"button button-primary\" />\n        <a [routerLink]=\"[backurl]\" class=\"button button-secondary\">Back to app</a>\n      </div>\n    </form>\n    <a [routerLink]=\"['/register']\">New user? Register here</a>\n  </div>\n\n</div>\n<footer class=\"footer\">Created by: Garrett Shirley, Vojtech Rychnovsky, Cuong Nguyen</footer>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Login page */\n.login_wrapper {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.login_wrapper .login_inner {\n    width: 460px;\n    padding: 30px; }\n.login_wrapper .login_logo {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly; }\n.login_wrapper .login_logo img {\n      width: 100px;\n      height: auto; }\n.login_wrapper .login_logo h1 {\n      text-transform: uppercase;\n      color: #b7b7b7; }\n.login_wrapper .form_login > div {\n    margin: 30px 0; }\n.login_wrapper .form_login label {\n    display: block;\n    margin-bottom: 10px; }\n.login_wrapper .form_login input:not([type='submit']) {\n    border: 2px solid #b7b7b7;\n    border-radius: 4px;\n    padding: 10px;\n    width: 100%; }\nfooter.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: white;\n  padding: 10px 30px;\n  color: #b7b7b7;\n  font-size: 0.8rem;\n  text-align: right;\n  letter-spacing: 1px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/user.model */ "./src/app/_models/user.model.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, alertService) {
        this.authService = authService;
        this.alertService = alertService;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.backurl = '/';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.redirectUrl) {
            // set back link to app
            var returnurl = this.authService.redirectUrl;
            this.backurl = returnurl === '/workout-log' ? '/' : returnurl;
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        if (this.form.invalid) {
            if (this.form.controls.email.errors.email) {
                this.alertService.error('Email has bad format!');
                return;
            }
            this.alertService.error('Fill all the fields in this form!');
            return;
        }
        this.authService
            .login(this.user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (user) { }, function (err) {
            console.log("Backend returned code " + err.status + ", body was: ", err.error);
            _this.alertService.error(err.error.message, true);
            return false;
        });
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page-header/page-header.component.html":
/*!********************************************************!*\
  !*** ./src/app/page-header/page-header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"container\">\n    <h1>{{ title }} - {{subtitle}}</h1>\n  </div>\n</header>\n\n<div class=\"subheader\">\n  <div class=\"container\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"link-active\" [routerLink]=\"['/workouts']\">Workout list</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"link-active\" [routerLink]=\"['/workout-log']\">Workout\n          log</a></li>\n    </ul>\n    <div>\n      <button *ngIf=\"isLoggedIn\" (click)=\"logOut()\" class=\"button button-alt\">{{currentUserName}} | Logout</button>\n      <button *ngIf=\"!isLoggedIn\" (click)=\"logIn()\" class=\"button button-alt\">Login</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-header/page-header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/page-header/page-header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #4b99ed;\n  color: #fff;\n  text-align: center;\n  text-transform: uppercase; }\n\n.subheader {\n  background-color: #feb819;\n  font-weight: bold; }\n\n.subheader .container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px; }\n\nul {\n  display: flex;\n  flex-direction: row;\n  padding: 0;\n  margin: 0; }\n\nul li {\n    list-style: none;\n    display: inline-block; }\n\nul li a {\n      text-decoration: none;\n      padding: 5px 20px;\n      transition: all 200ms; }\n\nul li a.link-active, ul li a:hover {\n        border-radius: 20px;\n        background: rgba(255, 255, 255, 0.5); }\n\nul .nav-item + .nav-item {\n    margin-left: 20px; }\n"

/***/ }),

/***/ "./src/app/page-header/page-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-header/page-header.component.ts ***!
  \******************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent(authService, alertService, router, route) {
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authService.isLoggedIn();
        var currentUser = this.authService.getCurrentUser();
        this.currentUserName = currentUser ? currentUser.getFullName() : '';
    };
    PageHeaderComponent.prototype.logOut = function () {
        this.authService.logout();
        this.alertService.success('You have logged out', true);
        var returnUrl = this.router.url;
        if (this.route.routeConfig.canActivate &&
            this.route.routeConfig.canActivate.length > 0) {
            returnUrl = '/';
        }
        this.authService.redirectUrl = returnUrl;
        this.router.navigate(['login']);
        return false;
    };
    PageHeaderComponent.prototype.logIn = function () {
        var returnUrl = this.router.url;
        if (this.route.routeConfig.canActivate &&
            this.route.routeConfig.canActivate.length > 0) {
            returnUrl = '/';
        }
        this.authService.redirectUrl = returnUrl;
        this.router.navigate(['login']);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "subtitle", void 0);
    PageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/page-header/page-header.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  404 - page not found\n</h1>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login_wrapper\">\n  <div class=\"login_inner\">\n    <div class=\"login_logo\">\n      <img src='assets/images/logo_full.png' alt=\"title\" />\n      <h1>Workout App</h1>\n    </div>\n    <h2>Register new account</h2>\n\n    <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" class=\"form_login\">\n      <div>\n        <label for=\"username\">First name</label>\n        <input type=\"text\" name=\"firstname\" placeholder=\"First name\" id=\"firstname\" required [(ngModel)]=\"user.firstName\" />\n      </div>\n      <div>\n        <label for=\"username\">Surname</label>\n        <input type=\"text\" name=\"surname\" placeholder=\"Surname\" id=\"surname\" required [(ngModel)]=\"user.surName\" />\n      </div>\n      <div>\n        <label for=\"username\">Email</label>\n        <input type=\"email\" name=\"email\" placeholder=\"Your email\" id=\"email\" required [(ngModel)]=\"user.email\" email />\n      </div>\n      <div>\n        <label for=\"password\">Password</label>\n        <input type=\"password\" name=\"password\" placeholder=\"Your password\" id=\"password\" required [(ngModel)]=\"user.password\" />\n      </div>\n      <div>\n        <button type=\"submit\" class=\"button button-primary\">Register</button>\n      </div>\n    </form>\n    <a [routerLink]=\"['/login']\">Already have an account? Log in here</a>\n  </div>\n\n</div>\n<footer class=\"footer\">Created by: Garrett Shirley, Vojtech Rychnovsky, Cuong Nguyen</footer>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Buttons */\n.button {\n  padding: 15px;\n  border-radius: 4px;\n  border: 0;\n  font-size: 1rem;\n  transition: all 300ms; }\n.button:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    cursor: pointer; }\n.button.button-primary {\n    background: #4b99ed;\n    color: #fff; }\n/* Login page */\n.login_wrapper {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.login_wrapper .login_inner {\n    width: 460px;\n    padding: 30px; }\n.login_wrapper .login_logo {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly; }\n.login_wrapper .login_logo img {\n      width: 100px;\n      height: auto; }\n.login_wrapper .login_logo h1 {\n      text-transform: uppercase;\n      color: #b7b7b7; }\n.login_wrapper .form_login > div {\n    margin: 30px 0; }\n.login_wrapper .form_login label {\n    display: block;\n    margin-bottom: 10px; }\n.login_wrapper .form_login input:not([type='submit']) {\n    border: 2px solid #b7b7b7;\n    border-radius: 4px;\n    padding: 10px;\n    width: 100%; }\nfooter.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: white;\n  padding: 10px 30px;\n  color: #b7b7b7;\n  font-size: 0.8rem;\n  text-align: right;\n  letter-spacing: 1px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/user.model */ "./src/app/_models/user.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService, alertService) {
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        if (this.form.invalid) {
            if (this.form.controls.email.errors.email) {
                this.alertService.error('Email has bad format!');
                return;
            }
            this.alertService.error('Fill all the fields in this form!');
            return;
        }
        this.authService
            .register(this.user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.success('You have successfully registered!', true);
            _this.router.navigate(['/']);
        }, function (err) {
            console.log("Backend returned code " + err.status + ", body was: " + err.error);
            _this.alertService.error(err.error.message);
            return false;
        });
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "form", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/wokout-log/add-log-form/add-log-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/wokout-log/add-log-form/add-log-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h2>Log new workout</h2>\n  <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n    <div class=\"row\">\n      <div class=\"form-group col-3\">\n        <label for=\"date\">Date:</label>\n        <input class=\"form_group\" name=\"date\" id=\"date\" value=\"\" type=\"date\" required [(ngModel)]=\"workoutLog.date\" #d=\"ngModel\">\n        <div *ngIf=\"f.submitted && d.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"d.errors.required\">\n            Date is required\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group col-3\">\n        <label for=\"workoutId\">Workout: </label>\n        <div class=\"select-wrapper\">\n          <select class=\"form-control\" name=\"workoutId\" id=\"workoutId\" required [(ngModel)]=\"workoutLog.workout._id\"\n            #workout=\"ngModel\">\n            <option [value]=\"xx\" selected disabled>Choose here</option>\n            <option *ngFor=\"let wor of workouts\" [value]=\"wor._id\">{{wor.name}}</option>\n          </select>\n        </div>\n        <div *ngIf=\"f.submitted && workout.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"workout.errors.required\">\n            Workout is required\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n      <div>\n        <input value=\"Submit\" type=\"submit\" class=\"button button-primary\">\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/wokout-log/add-log-form/add-log-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/wokout-log/add-log-form/add-log-form.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  margin: 30px 0; }\n"

/***/ }),

/***/ "./src/app/wokout-log/add-log-form/add-log-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/wokout-log/add-log-form/add-log-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddLogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLogFormComponent", function() { return AddLogFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_workout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/workout.service */ "./src/app/_services/workout.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var src_app_models_workout_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_models/workout.model */ "./src/app/_models/workout.model.ts");
/* harmony import */ var src_app_models_workout_log_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_models/workout-log.model */ "./src/app/_models/workout-log.model.ts");
/* harmony import */ var src_app_services_workout_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/workout-log.service */ "./src/app/_services/workout-log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddLogFormComponent = /** @class */ (function () {
    function AddLogFormComponent(workoutService, workoutLogService, alertService) {
        this.workoutService = workoutService;
        this.workoutLogService = workoutLogService;
        this.alertService = alertService;
        this.onWorkoutLogCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.workoutLog = new src_app_models_workout_log_model__WEBPACK_IMPORTED_MODULE_4__["WorkoutLog"](new src_app_models_workout_model__WEBPACK_IMPORTED_MODULE_3__["Workout"]());
        console.log(this.workoutLog);
    }
    AddLogFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workoutService.findAll().subscribe(function (workouts) {
            _this.workouts = workouts;
        });
    };
    AddLogFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.invalid) {
            this.alertService.error('Fill the form correctly!');
            return;
        }
        this.workoutLogService.create(this.workoutLog).subscribe(function (data) {
            _this.form.resetForm();
            _this.onWorkoutLogCreated.emit(data);
            _this.alertService.success('New log was created');
            console.log(data);
        }, function (err) {
            console.log("Backend returned code " + err.status + ", body was: " + err.error);
            _this.alertService.error(err.error.message);
            return false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddLogFormComponent.prototype, "onWorkoutLogCreated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], AddLogFormComponent.prototype, "form", void 0);
    AddLogFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-log-form',
            template: __webpack_require__(/*! ./add-log-form.component.html */ "./src/app/wokout-log/add-log-form/add-log-form.component.html"),
            styles: [__webpack_require__(/*! ./add-log-form.component.scss */ "./src/app/wokout-log/add-log-form/add-log-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_workout_service__WEBPACK_IMPORTED_MODULE_1__["WorkoutService"],
            src_app_services_workout_log_service__WEBPACK_IMPORTED_MODULE_5__["WorkoutLogService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AddLogFormComponent);
    return AddLogFormComponent;
}());



/***/ }),

/***/ "./src/app/wokout-log/workout-log.component.html":
/*!*******************************************************!*\
  !*** ./src/app/wokout-log/workout-log.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Workout App\" subtitle=\"Workout log\">\n</app-page-header>\n\n<div class=\"container main-content\">\n\n  <h1>{{currentUserName}}, track your workout!</h1>\n\n  <ng-container *ngIf=\"loading; then loader; else loaded\"></ng-container>\n\n  <ng-template #loader>\n    <app-loader *ngIf=\"loading\"></app-loader>\n  </ng-template>\n\n  <ng-template #loaded>\n    <app-add-log-form (onWorkoutLogCreated)=\"insertWorkoutLog($event)\"></app-add-log-form>\n\n    <table>\n      <thead>\n        <tr>\n          <th>Date</th>\n          <th>Workout</th>\n        </tr>\n      </thead>\n      <tr *ngFor=\"let log of workoutLogs\">\n        <td>{{log.date | date:'dd/MM/yyyy'}}</td>\n        <td>{{log.workout.name}}</td>\n      </tr>\n      <tr *ngIf=\"workoutLogs && !workoutLogs.length\">\n        <td colspan=\"4\">no logged workouts found</td>\n      </tr>\n    </table>\n\n\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ "./src/app/wokout-log/workout-log.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/wokout-log/workout-log.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wokout-log/workout-log.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/wokout-log/workout-log.component.ts ***!
  \*****************************************************/
/*! exports provided: WorkoutLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutLogComponent", function() { return WorkoutLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _services_workout_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/workout-log.service */ "./src/app/_services/workout-log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutLogComponent = /** @class */ (function () {
    function WorkoutLogComponent(router, authService, workoutLogService) {
        this.router = router;
        this.authService = authService;
        this.workoutLogService = workoutLogService;
    }
    WorkoutLogComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.currentUserName = this.authService.getCurrentUser().firstName;
        this.loading = false;
        this.loadWorkoutsList();
    };
    WorkoutLogComponent.prototype.loadWorkoutsList = function () {
        var _this = this;
        this.workoutLogService.findAll().subscribe(function (logs) {
            _this.workoutLogs = logs;
            _this.loading = false;
        });
    };
    /**
     * To be passed to child form
     * @param log New Log to be shown in list
     */
    WorkoutLogComponent.prototype.insertWorkoutLog = function (log) {
        this.workoutLogs.push(log);
    };
    WorkoutLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workout-log',
            template: __webpack_require__(/*! ./workout-log.component.html */ "./src/app/wokout-log/workout-log.component.html"),
            styles: [__webpack_require__(/*! ./workout-log.component.scss */ "./src/app/wokout-log/workout-log.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_workout_log_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutLogService"]])
    ], WorkoutLogComponent);
    return WorkoutLogComponent;
}());



/***/ }),

/***/ "./src/app/workout-detail/add-excercise-form/add-excercise-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/workout-detail/add-excercise-form/add-excercise-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add New Exercise</h2>\n<form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"form-group col-3\">\n      <label for=\"exercise_name\">Exercise Name:</label>\n      <input name=\"exercise_name\" id=\"exercise_name\" value=\"\" type=\"text\" required [(ngModel)]=\"excercise.name\" #name=\"ngModel\">\n      <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\n        <div *ngIf=\"name.errors.required\">\n          Name is required\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-3\">\n      <label for=\"description\">Description:</label>\n      <input name=\"description\" id=\"description\" value=\"\" type=\"text\" required [(ngModel)]=\"excercise.description\"\n        #description=\"ngModel\">\n      <div *ngIf=\"f.submitted && description.invalid\" class=\"invalid-feedback\">\n        <div *ngIf=\"description.errors.required\">\n          Description is required\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-3\">\n      <label for=\"num_per_set\">Number Per Set:</label>\n      <input name=\"num_per_set\" id=\"num_per_set\" value=\"\" type=\"number\" min=\"0\" max=\"1000\" required [(ngModel)]=\"excercise.set\"\n        #set=\"ngModel\">\n      <div *ngIf=\"f.submitted && set.invalid\" class=\"invalid-feedback\">\n        <div *ngIf=\"set.errors.required\">\n          Number Per Set is required\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-3\">\n      <label for=\"num_sets\">Number of Sets:</label>\n      <input class=\"form_group\" name=\"num_sets\" id=\"num_sets\" value=\"\" type=\"number\" min=\"0\" max=\"1000\" required\n        [(ngModel)]=\"excercise.duration\" #duration=\"ngModel\">\n      <div *ngIf=\"f.submitted && duration.invalid\" class=\"invalid-feedback\">\n        <div *ngIf=\"duration.errors.required\">\n          Number of Sets is required\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group\">\n      <input value=\"Submit\" type=\"submit\" class=\"button button-primary\">\n      <input reset=\"Reset\" type=\"reset\" class=\"button\">\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/workout-detail/add-excercise-form/add-excercise-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/workout-detail/add-excercise-form/add-excercise-form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  margin-top: 80px; }\n"

/***/ }),

/***/ "./src/app/workout-detail/add-excercise-form/add-excercise-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/workout-detail/add-excercise-form/add-excercise-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddExcerciseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExcerciseFormComponent", function() { return AddExcerciseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_excercise_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_models/excercise.model */ "./src/app/_models/excercise.model.ts");
/* harmony import */ var _services_workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/workout.service */ "./src/app/_services/workout.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddExcerciseFormComponent = /** @class */ (function () {
    function AddExcerciseFormComponent(workoutService, alertService) {
        this.workoutService = workoutService;
        this.alertService = alertService;
        this.onExcerciseCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.excercise = new _models_excercise_model__WEBPACK_IMPORTED_MODULE_1__["Excercise"]();
    }
    AddExcerciseFormComponent.prototype.ngOnInit = function () { };
    AddExcerciseFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.workoutId) {
            this.alertService.error('Error when submiting the form!');
            return false;
        }
        if (this.form.invalid) {
            this.alertService.error('Fill the form correctly!');
            return;
        }
        this.workoutService
            .addNewExcerise(this.workoutId, this.excercise)
            .subscribe(function (data) {
            _this.form.resetForm();
            _this.onExcerciseCreated.emit(data);
            _this.alertService.success('New excercise created');
            console.log(data);
        }, function (err) {
            console.log("Backend returned code " + err.status + ", body was: " + err.error);
            _this.alertService.error(err.error.message);
            return false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AddExcerciseFormComponent.prototype, "workoutId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddExcerciseFormComponent.prototype, "onExcerciseCreated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], AddExcerciseFormComponent.prototype, "form", void 0);
    AddExcerciseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-excercise-form',
            template: __webpack_require__(/*! ./add-excercise-form.component.html */ "./src/app/workout-detail/add-excercise-form/add-excercise-form.component.html"),
            styles: [__webpack_require__(/*! ./add-excercise-form.component.scss */ "./src/app/workout-detail/add-excercise-form/add-excercise-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_workout_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], AddExcerciseFormComponent);
    return AddExcerciseFormComponent;
}());



/***/ }),

/***/ "./src/app/workout-detail/workout-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/workout-detail/workout-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Workout App\" subtitle=\"Workout detail\">\n</app-page-header>\n\n<div class=\"container main-content\">\n\n  <a [routerLink]=\"['/workouts']\" class=\"button button-secondary backlink\">Back to Workouts</a>\n\n\n  <ng-container *ngIf=\"loading; then loader; else loaded\"></ng-container>\n\n  <ng-template #loader>\n    <app-loader *ngIf=\"loading\"></app-loader>\n  </ng-template>\n\n  <ng-template #loaded>\n    <h1 *ngIf=\"workout\">{{workout.name}}</h1>\n    <table>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Description</th>\n          <th>Number Per Set</th>\n          <th>Number of Sets</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let excercise of excercises\">\n          <td>{{excercise.name}}</td>\n          <td>{{excercise.description}}</td>\n          <td>{{excercise.set}}</td>\n          <td>{{excercise.duration}}</td>\n        </tr>\n        <tr *ngIf=\"excercises && !excercises.length\">\n          <td colspan=\"4\">no excercises found</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <app-add-excercise-form *ngIf=\"isLoggedIn===true\" (onExcerciseCreated)=\"insertExcercise($event)\" workoutId={{workout._id}}></app-add-excercise-form>\n\n    <p *ngIf=\"!isLoggedIn\">You must be logged in to add new excercises to this workout - <a [routerLink]=\"['/login']\"\n        [queryParams]=\"{return: redirecturl}\">login\n        now</a></p>\n  </ng-template>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/workout-detail/workout-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/workout-detail/workout-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backlink {\n  margin-top: 20px;\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/workout-detail/workout-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/workout-detail/workout-detail.component.ts ***!
  \************************************************************/
/*! exports provided: WorkoutDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailComponent", function() { return WorkoutDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_workout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/workout.service */ "./src/app/_services/workout.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutDetailComponent = /** @class */ (function () {
    function WorkoutDetailComponent(workoutService, authService, activeRoute, router) {
        this.workoutService = workoutService;
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.isLoggedIn = false;
    }
    WorkoutDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = this.authService.isLoggedIn();
        this.loading = true;
        this.activeRoute.params.subscribe(function (routeParams) {
            _this.loadWorkoutDetail(routeParams.id);
        });
        this.redirecturl = this.router.url;
    };
    WorkoutDetailComponent.prototype.loadWorkoutDetail = function (id) {
        var _this = this;
        this.workoutService.findById(id).subscribe(function (workout) {
            _this.workout = workout;
            _this.excercises = workout.excercises;
            _this.loading = false;
        });
    };
    /**
     * To be passed to child form
     * @param excercise New excercise to be shown in list
     */
    WorkoutDetailComponent.prototype.insertExcercise = function (excercise) {
        console.log(excercise);
        this.excercises.push(excercise);
    };
    WorkoutDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workout-detail',
            template: __webpack_require__(/*! ./workout-detail.component.html */ "./src/app/workout-detail/workout-detail.component.html"),
            styles: [__webpack_require__(/*! ./workout-detail.component.scss */ "./src/app/workout-detail/workout-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_workout_service__WEBPACK_IMPORTED_MODULE_1__["WorkoutService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WorkoutDetailComponent);
    return WorkoutDetailComponent;
}());



/***/ }),

/***/ "./src/app/workouts-list/add-workout-form/add-workout-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/workouts-list/add-workout-form/add-workout-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h2>Add New Workout</h2>\n  <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"form-group col-3\">\n        <label for=\"workout_name\">Workout Name:</label>\n        <input name=\"workout_name\" id=\"workout_name\" value=\"\" type=\"text\" required [(ngModel)]=\"workout.name\" #name=\"ngModel\">\n        <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"name.errors.required\">\n            Name is required\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group col-3\">\n        <input value=\"Submit\" type=\"submit\" class=\"button button-primary\">\n        <input reset=\"Reset\" type=\"reset\" class=\"button\">\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/workouts-list/add-workout-form/add-workout-form.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/workouts-list/add-workout-form/add-workout-form.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  margin-top: 80px; }\n"

/***/ }),

/***/ "./src/app/workouts-list/add-workout-form/add-workout-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/workouts-list/add-workout-form/add-workout-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddWorkoutFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkoutFormComponent", function() { return AddWorkoutFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_workout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/workout.service */ "./src/app/_services/workout.service.ts");
/* harmony import */ var _models_workout_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_models/workout.model */ "./src/app/_models/workout.model.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddWorkoutFormComponent = /** @class */ (function () {
    function AddWorkoutFormComponent(workoutService, alertService) {
        this.workoutService = workoutService;
        this.alertService = alertService;
        this.onWorkoutCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.workout = new _models_workout_model__WEBPACK_IMPORTED_MODULE_2__["Workout"]();
    }
    AddWorkoutFormComponent.prototype.ngOnInit = function () { };
    AddWorkoutFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.invalid) {
            this.alertService.error('Fill the form correctly!');
            return;
        }
        this.workoutService.create(this.workout).subscribe(function (data) {
            _this.onWorkoutCreated.emit(data);
            _this.alertService.success('New workout created');
            console.log(data);
        }, function (err) {
            console.log("Backend returned code " + err.status + ", body was: " + err.error);
            _this.alertService.error(err.error.message);
            return false;
        });
        this.form.resetForm();
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddWorkoutFormComponent.prototype, "onWorkoutCreated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], AddWorkoutFormComponent.prototype, "form", void 0);
    AddWorkoutFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-workout-form',
            template: __webpack_require__(/*! ./add-workout-form.component.html */ "./src/app/workouts-list/add-workout-form/add-workout-form.component.html"),
            styles: [__webpack_require__(/*! ./add-workout-form.component.scss */ "./src/app/workouts-list/add-workout-form/add-workout-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_workout_service__WEBPACK_IMPORTED_MODULE_1__["WorkoutService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], AddWorkoutFormComponent);
    return AddWorkoutFormComponent;
}());



/***/ }),

/***/ "./src/app/workouts-list/workouts-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/workouts-list/workouts-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Workout App\" subtitle=\"List of workouts\">\n</app-page-header>\n\n<div class=\"container main-content\">\n\n  <h1 *ngIf=\"isLoggedIn\">Welcome {{currentUserName}}!</h1>\n\n  <ng-container *ngIf=\"loading; then loader; else loaded\"></ng-container>\n\n  <ng-template #loader>\n    <app-loader *ngIf=\"loading\"></app-loader>\n  </ng-template>\n\n  <ng-template #loaded>\n    <table>\n      <tr *ngFor=\"let workout of workouts\">\n        <td><a [routerLink]=\"['/workout', workout._id]\">{{workout.name}}</a></td>\n      </tr>\n    </table>\n\n    <app-add-workout-form *ngIf=\"isLoggedIn\" (onWorkoutCreated)=\"insertWorkout($event)\"></app-add-workout-form>\n\n    <p *ngIf=\"!isLoggedIn\">You must be logged in to add new workout programs - <a [routerLink]=\"['/login']\"\n        [queryParams]=\"{return: redirecturl}\">login\n        now</a></p>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ "./src/app/workouts-list/workouts-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/workouts-list/workouts-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  padding-top: 50px;\n  padding-bottom: 50px; }\n  .main-content table tbody tr:hover {\n    background: #fff; }\n  .main-content table a {\n    display: block; }\n"

/***/ }),

/***/ "./src/app/workouts-list/workouts-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/workouts-list/workouts-list.component.ts ***!
  \**********************************************************/
/*! exports provided: WorkoutsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsListComponent", function() { return WorkoutsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_workout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/workout.service */ "./src/app/_services/workout.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutsListComponent = /** @class */ (function () {
    function WorkoutsListComponent(workoutService, authService, router) {
        this.workoutService = workoutService;
        this.authService = authService;
        this.router = router;
        this.isLoggedIn = false;
        this.redirecturl = '';
    }
    WorkoutsListComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.isLoggedIn = this.authService.isLoggedIn();
        var currentUser = this.authService.getCurrentUser();
        this.currentUserName = currentUser ? currentUser.firstName : '';
        this.loadWorkoutsList();
        this.redirecturl = this.router.url;
    };
    WorkoutsListComponent.prototype.loadWorkoutsList = function () {
        var _this = this;
        this.workoutService.findAll().subscribe(function (workouts) {
            _this.workouts = workouts;
            _this.loading = false;
        });
    };
    /**
     * To be passed to child form
     * @param workout New workout to be shown in list
     */
    WorkoutsListComponent.prototype.insertWorkout = function (workout) {
        this.workouts.push(workout);
    };
    WorkoutsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workouts-list',
            template: __webpack_require__(/*! ./workouts-list.component.html */ "./src/app/workouts-list/workouts-list.component.html"),
            styles: [__webpack_require__(/*! ./workouts-list.component.scss */ "./src/app/workouts-list/workouts-list.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_workout_service__WEBPACK_IMPORTED_MODULE_1__["WorkoutService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WorkoutsListComponent);
    return WorkoutsListComponent;
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

module.exports = __webpack_require__(/*! /Users/rychnovsky/Documents/school/Aarhus/Web Development/assignments/assignment_2/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map