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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"selected_container\">\n  <div  class=\"row my-2\" *ngIf=\"selected_programs\">\n    <div class=\"col\">\n      <!-- Selected Programs-->\n      <div class=\"selected-programs-wrap\">\n        <div class=\"selected-program\" *ngFor=\"let s of selected_programs\" >\n          <span class=\"badge badge-pill badge-primary float-left text-white mr-1\">{{s.program_name}} <span class=\"delete-program\" (click)=\"deleteProgram(s.id)\" title=\"Click to delete\" style=\"cursor:pointer;\">X</span></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n      <!-- Selected Audiences-->\n  <div  class=\"row my-2\" *ngIf=\"selected_audiences\">\n    <div class=\"col\">\n      <div class=\"selected-audience-wrap\">\n        <div class=\"selected-audience\" *ngFor=\"let s of selected_audiences\" >\n          <span class=\"badge badge-pill badge-primary float-left text-white mr-1\">{{s.age_range}} <span class=\"delete-audience\" (click)=\"deleteAudience(s.id)\" title=\"Click to delete\" style=\"cursor:pointer;\">X</span></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n      <!-- Selected Tags-->\n  <div  class=\"row my-2\" *ngIf=\"selected_tags\">\n    <div class=\"col\">\n      <div class=\"selected-tags-wrap\">\n        <div class=\"selected-tags\" *ngFor=\"let s of selected_tags\" >\n          <span class=\"badge badge-pill badge-primary float-left text-white mr-1\">{{s.tag}} <span class=\"delete-tag\" (click)=\"deleteTag(s.id)\" title=\"Click to delete\" style=\"cursor:pointer;\">X</span></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n      <!-- Selected Topic-->\n  <div  class=\"row my-2\" *ngIf=\"selected_topics\">\n    <div class=\"col\">\n      <div class=\"selected-topic-wrap\">\n        <div class=\"selected-topic\" *ngFor=\"let s of selected_topics\" >\n          <span class=\"badge badge-pill badge-primary float-left text-white mr-1\">{{s.topic}} <span class=\"delete-topic\" (click)=\"deleteTopic(s.id)\" title=\"Click to delete\" style=\"cursor:pointer;\">X</span></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n      <!-- Selected Activity Type-->\n  <div  class=\"row my-2\" *ngIf=\"selected_activity_types\">\n    <div class=\"col\">\n      <div class=\"selected-type-wrap\">\n        <div class=\"selected-type\" *ngFor=\"let s of selected_activity_types\" >\n          <span class=\"badge badge-pill badge-primary float-left text-white mx-1\">{{s.activity_type}} <span class=\"delete-type\" (click)=\"deleteAssetType(s.id)\" title=\"Click to delete\" style=\"cursor:pointer;\">X</span></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n      <!-- Selected Asset Type-->\n  <div  class=\"row my-2\" *ngIf=\"selected_asset_types\">\n    <div class=\"col\">\n      <div class=\"selected-type-wrap\">\n        <div class=\"selected-type\" *ngFor=\"let s of selected_asset_types\" >\n          <span class=\"badge badge-pill badge-primary float-left text-white mx-1\">{{s.asset_type}} <span class=\"delete-type\" (click)=\"deleteAssetType(s.id)\" title=\"Click to delete\" style=\"cursor:pointer;\">X</span></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Modules Only-->\n<div  class=\"row my-2\">\n<div class=\"col\">\n  <div class=\"modules-only-wrap\">\n    <div class=\"modules-only\" *ngIf=\"modulesOnly\" >\n      <span class=\"badge badge-pill badge-primary float-left text-white mx-1\">Modules Only <span class=\"delete-modules-only\" (click)=\"deleteModulesOnly()\" title=\"Click to delete\" style=\"cursor:pointer;\">X</span></span>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n\n<div class=\"row\">\n  <div id=\"filter_fields\" class=\"col-md-3\">\n    <!-- Program List -->\n    <h5 class=\"mt-4\">Program List</h5>\n    <ul id=\"program-list\" class=\"list-group\">\n      <li *ngFor=\"let p of programs\" class=\"program-item list-group-item\">\n        <input (change)=\"getSelectedPrograms()\" type=\"checkbox\"\n                  name=\"program\"\n                  value=\"{{p.id}}\"\n                  [(ngModel)]=\"p.selected\"/>\n        <small class=\"program-text text-muted ml-2\">{{p.program_name}}</small>\n      </li>\n    </ul>\n\n    <!-- Audience List -->\n    <h5 class=\"mt-4\">Audience List</h5>\n    <ul id=\"audience-list\" class=\"list-group\">\n      <li *ngFor=\"let a of audiences\" class=\"audience-item list-group-item\">\n        <input (change)=\"getSelectedAudiences()\" type=\"checkbox\"\n                  name=\"audience\"\n                  value=\"{{a.id}}\"\n                  [(ngModel)]=\"a.selected\"/>\n        <small class=\"audience-text text-muted ml-2\">{{a.age_range}}</small>\n      </li>\n    </ul>\n\n    <!-- Tag List -->\n    <h5 class=\"mt-4\">Tags</h5>\n    <ul id=\"tag-list\" class=\"list-group\">\n      <li *ngFor=\"let t of tags\" class=\"tag-item list-group-item\">\n        <input (change)=\"getSelectedTags()\" type=\"checkbox\"\n                  name=\"tag\"\n                  value=\"{{t.id}}\"\n                  [(ngModel)]=\"t.selected\"/>\n        <small class=\"tag-text text-muted ml-2\">{{t.tag}}</small>\n      </li>\n    </ul>\n\n    <!-- Topic List -->\n    <h5 class=\"mt-4\">Topics</h5>\n    <ul id=\"topic-list\" class=\"list-group\">\n      <li *ngFor=\"let t of topics\" class=\"topic-item list-group-item\">\n        <input (change)=\"getSelectedTopics()\" type=\"checkbox\"\n                  name=\"topic\"\n                  value=\"{{t.id}}\"\n                  [(ngModel)]=\"t.selected\"/>\n        <small class=\"topic-text text-muted ml-2\">{{t.topic}}</small>\n      </li>\n    </ul>\n\n    <!-- Type List -->\n    <h5 class=\"mt-4\" *ngIf=!modulesOnly>Types</h5>\n    <ul id=\"type-list\" class=\"list-group\" *ngIf=!modulesOnly>\n      <li *ngFor=\"let t of types\" class=\"type-item list-group-item\">\n        <input (change)=\"getSelectedTypes()\" type=\"checkbox\"\n                  name=\"type\"\n                  value=\"{{t.id}}\"\n                  [(ngModel)]=\"t.selected\"/>\n        <small class=\"type-text text-muted ml-2\">{{t.type}}</small>\n      </li>\n    </ul>\n  </div>\n\n\n  <div class=\"col-md-9\">\n    <div id=\"module_container\">\n      <h3 class=\"my-4\">Modules</h3>\n      <ul class=\"list-group\" *ngFor=\"let module of this.modules | programs: selected_programs | audiences: selected_audiences | tag: selected_tags | topic: selected_topics\">\n        <ng-container>\n          <li class=\"list-group-item border-0\">\n            <a href=\"{{ baseURL }}curriculum/modules/{{ module.id }}\" target=\"_blank\">\n              <h3 class=\"h3\">\n                {{ module.title }}: <span class=\"h4 font-italic\">{{ module.subtitle }}</span>\n              </h3>\n              <p [innerHTML]=\"module.intro_copy | safe: 'html'\"></p>\n            </a>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n    <div id=\"lesson_container\">\n      <h3 class=\"my-4\">Lessons</h3>\n      <ul class=\"list-group\" *ngFor=\"let lesson of this.lessons | programs: selected_programs | audiences: selected_audiences | tag: selected_tags | topic: selected_topics\">\n        <ng-container>\n          <li class=\"list-group-item border-0\">\n            <a href=\"{{ baseURL }}curriculum/lessons/{{ lesson.id }}\" target=\"_blank\">\n              <h3 class=\"h3\">\n                {{ lesson.title }}: <span class=\"h4 font-italic\">{{ lesson.subtitle }}</span>\n              </h3>\n              <p [innerHTML]=\"lesson.intro_copy | safe: 'html'\"></p>\n            </a>\n          </li>\n        </ng-container>\n      </ul>\n    </div> \n    <div id=\"lesson_container\">\n      <h3 class=\"my-4\">Activities</h3>\n      <ul class=\"list-group\" *ngFor=\"let activity of this.activities | programs: selected_programs | audiences: selected_audiences | tag: selected_tags | topic: selected_topics\">\n        <ng-container>\n          <li class=\"list-group-item border-0\">\n            <a href=\"{{ activity.teachers_guide }}\" target=\"_blank\">\n              <h3 class=\"h3\">\n                {{ activity.title }}\n              </h3>\n              <p [innerHTML]=\"activity.overview_copy | safe: 'html'\"></p>\n            </a>\n          </li>\n        </ng-container>\n      </ul>\n    </div> \n    <div id=\"asset_container\" *ngIf=!modulesOnly>\n      <h3 class=\"my-4\">Individual Assets</h3>\n      <p class=\"text-center\" *ngIf='selected_asset_count > 0'>There are no assets associated with your selection. Remove some of your filters to find additional assets.</p>\n      <ul class=\"list-group\" *ngFor=\"let asset of this.assets | programs: selected_programs | audiences: selected_audiences | tag: selected_tags | topic: selected_topics | type: selected_types\">\n        <ng-container *ngIf=\"asset.file\">\n          <li class=\"list-group-item border-0\">\n            <a href=\"{{ asset.file }}\" target=\"_blank\">\n              <ng-container *ngIf=\"asset.display_title; else showTitle\">\n                <h3 class=\"h3\">\n                  {{ asset.display_title }}\n                </h3>\n              </ng-container>\n              <ng-template #showTitle>\n                <h3 class=\"h3\">\n                    {{ asset.title }}\n                  </h3>\n              </ng-template>\n              <p [innerHTML]=\"asset.description | safe: 'html'\"></p>\n            </a>\n          </li>\n        </ng-container>\n        <ng-container *ngIf=\"asset.url\">\n          <li class=\"list-group-item border-0\">\n            <a href=\"{{ asset.url }}\" target=\"_blank\">\n                <ng-container *ngIf=\"asset.display_title; else showTitle\">\n                  <h3 class=\"h3\">\n                    {{ asset.display_title }}\n                  </h3>\n                </ng-container>\n                <ng-template #showTitle>\n                  <h3 class=\"h3\">\n                      {{ asset.title }}\n                    </h3>\n                </ng-template>\n              <p [innerHTML]=\"asset.description | safe: 'html'\"></p>\n            </a>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _curriculum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum.service */ "./src/app/curriculum.service.ts");
/* harmony import */ var _programs_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programs.pipe */ "./src/app/programs.pipe.ts");
/* harmony import */ var _tag_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag.pipe */ "./src/app/tag.pipe.ts");





let AppComponent = class AppComponent {
    constructor(elm, currService) {
        this.elm = elm;
        this.currService = currService;
        this.title = 'Search';
        this.baseURL = 'https://teach.gmri.org/';
        this.selected_program_count = 0;
        this.selected_audience_count = 0;
        this.selected_tags_count = 0;
        this.selected_topics_count = 0;
        this.selected_asset_types_count = 0;
        this.selected_activity_types_count = 0;
        this.selected_module_count = 0;
        this.selected_lesson_count = 0;
        this.activities = [];
        this.selected_activities_count = 0;
        this.assets = [];
        this.selected_asset_count = 0;
        // modulesOnly: boolean = true;   //Original
        this.modulesOnly = false;
        this.modulesOnly = (elm.nativeElement.getAttribute('modulesOnly')) ? elm.nativeElement.getAttribute('modulesOnly') : false;
        this.currService.getTags(this.baseURL).subscribe((data) => {
            this.tags = data.items;
            console.log('Tags: ', this.tags);
            this.tags.forEach(element => {
                element.selected = (element.tag === elm.nativeElement.getAttribute('tag')) ? true : false;
            });
            this.getSelectedTags();
        });
        this.currService.getPrograms(this.baseURL).subscribe((data) => {
            this.programs = data.items;
            console.log('Programs: ', this.programs);
            this.programs.forEach(element => {
                element.selected = (element.program_name === elm.nativeElement.getAttribute('program')) ? true : false;
            });
        });
        this.currService.getAudiences(this.baseURL).subscribe((data) => {
            this.audiences = data.items;
            console.log('Audience: ', this.audiences);
            this.audiences.forEach(element => {
                element.selected = false;
            });
        });
        this.currService.getTopics(this.baseURL).subscribe((data) => {
            this.topics = data.items;
            console.log('Topics: ', this.topics);
            this.topics.forEach(element => {
                element.selected = false;
            });
        });
        this.currService.getActivityTypes(this.baseURL).subscribe((data) => {
            this.activity_types = data.items;
            console.log('Activity Type: ', this.activity_types);
            this.activity_types.forEach(element => {
                element.selected = false;
            });
        });
        this.currService.getAssetTypes(this.baseURL).subscribe((data) => {
            this.asset_types = data.items;
            console.log('Asset Type: ', this.asset_types);
            this.asset_types.forEach(element => {
                element.selected = false;
            });
        });
        this.currService.getModules(this.baseURL).subscribe((data) => {
            this.modules = data.items;
            console.log('Modules: ', this.modules);
            this.modules.forEach(element => {
                element.selected = false;
            });
            this.getSelectedPrograms();
        });
        this.currService.getLessons(this.baseURL).subscribe((data) => {
            this.lessons = data.items;
            console.log('Lessons: ', this.lessons);
            this.lessons.forEach(element => {
                element.selected = false;
            });
            this.getSelectedPrograms();
        });
        this.currService.getAssets(this.baseURL).subscribe((data) => {
            this.assets = data.items;
            console.log('Assets: ', this.assets);
            this.assets.forEach(element => {
                element.selected = false;
            });
            this.getSelectedPrograms();
        });
        this.currService.getActivities(this.baseURL).subscribe((data) => {
            this.activities = data.items;
            console.log('Activities: ', this.activities);
            this.activities.forEach(element => {
                element.selected = false;
            });
            this.getSelectedPrograms();
        });
        // this.currService.getAssets(this.baseURL).subscribe((response: CustomResponse) => {
        //   if (response) {
        //     const data: any = Object.entries(response);
        //     console.log('Get Assets: ',data);
        //     if (data[0][1]) {
        //       console.log(data[0][1])
        //       data.forEach(array => {
        //         array[1].forEach(element => {
        //           this.assets.push(element);
        //         });
        //       });
        //     }
        //   }
        // });
        // this.currService.getActivities(this.baseURL).subscribe((response: CustomResponse) => {
        //   if (response) {
        //     const data: any = Object.entries(response);
        //     console.log(data);
        //     if (data[0][1]) {
        //       console.log(data[0][1])
        //       data.forEach(array => {
        //         console.log(array);
        //         array[1].forEach(element => {
        //           console.log(element, this.activities)
        //           this.activities.push(element);
        //           console.log(this.activities)
        //         });
        //       });
        //     }
        //   }
        // });
    }
    // Getting Selected programs and Count
    getSelectedPrograms() {
        this.selected_programs = this.programs.filter(s => {
            return s.selected;
        });
    }
    // Getting Selected programs and Count
    getSelectedAudiences() {
        this.selected_audiences = this.audiences.filter(s => {
            return s.selected;
        });
    }
    getSelectedTags() {
        console.log('Get Selected Tags: ', this.selected_tags, this.tags);
        this.selected_tags = this.tags.filter(s => {
            return s.selected;
        });
    }
    getSelectedTopics() {
        this.selected_topics = this.topics.filter(s => {
            return s.selected;
        });
    }
    getSelectedActivityTypes() {
        this.selected_activity_types = this.activity_types.filter(s => {
            return s.selected;
        });
    }
    getSelectedAssetTypes() {
        this.selected_asset_types = this.asset_types.filter(s => {
            return s.selected;
        });
    }
    // Clearing All Selections
    clearSelection() {
        this.programs = this.programs.filter(g => {
            g.selected = false;
            return true;
        });
        this.getSelectedPrograms();
        this.getSelectedAudiences();
        this.getSelectedTags();
        this.getSelectedTopics();
        this.getSelectedActivityTypes();
        this.getSelectedAssetTypes();
    }
    deleteModulesOnly() {
        this.modulesOnly = false;
        this.getSelectedPrograms;
    }
    // Delete Single Listed program Tag
    deleteProgram(id) {
        this.programs = this.programs.filter(g => {
            if (g.id == id) {
                g.selected = false;
            }
            return true;
        });
        this.getSelectedPrograms();
    }
    // Delete Single Listed program Tag
    deleteAudience(id) {
        this.audiences = this.audiences.filter(g => {
            if (g.id == id) {
                g.selected = false;
            }
            return true;
        });
        this.getSelectedAudiences();
    }
    // Delete Single Listed program Tag
    deleteTag(id) {
        this.tags = this.tags.filter(g => {
            if (g.id == id) {
                g.selected = false;
            }
            return true;
        });
        this.getSelectedTags();
    }
    // Delete Single Listed program Tag
    deleteTopic(id) {
        this.topics = this.topics.filter(g => {
            if (g.id == id) {
                g.selected = false;
            }
            return true;
        });
        this.getSelectedTopics();
    }
    // Delete Single Listed program Tag
    deleteActivityType(id) {
        this.activity_types = this.activity_types.filter(g => {
            if (g.id == id) {
                g.selected = false;
            }
            return true;
        });
        this.getSelectedActivityTypes();
    }
    // Delete Single Listed program Tag
    deleteAssetType(id) {
        this.asset_types = this.asset_types.filter(g => {
            if (g.id == id) {
                g.selected = false;
            }
            return true;
        });
        this.getSelectedAssetTypes();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _curriculum_service__WEBPACK_IMPORTED_MODULE_2__["CurriculumService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_programs_pipe__WEBPACK_IMPORTED_MODULE_3__["ProgramsPipe"], _tag_pipe__WEBPACK_IMPORTED_MODULE_4__["TagPipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _audiences_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audiences.pipe */ "./src/app/audiences.pipe.ts");
/* harmony import */ var _programs_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./programs.pipe */ "./src/app/programs.pipe.ts");
/* harmony import */ var _topic_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topic.pipe */ "./src/app/topic.pipe.ts");
/* harmony import */ var _tag_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tag.pipe */ "./src/app/tag.pipe.ts");
/* harmony import */ var _type_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./type.pipe */ "./src/app/type.pipe.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"],
            _audiences_pipe__WEBPACK_IMPORTED_MODULE_7__["AudiencesPipe"],
            _programs_pipe__WEBPACK_IMPORTED_MODULE_8__["ProgramsPipe"],
            _topic_pipe__WEBPACK_IMPORTED_MODULE_9__["TopicPipe"],
            _tag_pipe__WEBPACK_IMPORTED_MODULE_10__["TagPipe"],
            _type_pipe__WEBPACK_IMPORTED_MODULE_11__["TypePipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/audiences.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/audiences.pipe.ts ***!
  \***********************************/
/*! exports provided: AudiencesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiencesPipe", function() { return AudiencesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AudiencesPipe = class AudiencesPipe {
    transform(items, selected_audiences) {
        if (!items) {
            return [{}];
        }
        if (!selected_audiences) {
            return items;
        }
        return items.filter(item => this.checkFilter(item, selected_audiences));
    }
    checkFilter(module, selected_audiences) {
        if (selected_audiences.length > 0) {
            const some = selected_audiences.some(audience => module.audience.some(item => item.id === audience.id));
            return some;
        }
        else {
            return true;
        }
    }
};
AudiencesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'audiences'
    })
], AudiencesPipe);



/***/ }),

/***/ "./src/app/curriculum.service.ts":
/*!***************************************!*\
  !*** ./src/app/curriculum.service.ts ***!
  \***************************************/
/*! exports provided: CurriculumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumService", function() { return CurriculumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CurriculumService = class CurriculumService {
    constructor(http) {
        this.http = http;
    }
    getAssets(baseURL) {
        console.log('Assets: ', baseURL + 'api/v2/assets/?format=json');
        return this.http.get(baseURL + 'api/v2/assets/?format=json');
    }
    ;
    getPrograms(baseURL) {
        return this.http.get(baseURL + 'api/v2/programs/?format=json');
    }
    ;
    getAudiences(baseURL) {
        return this.http.get(baseURL + 'api/v2/audiences/?format=json');
    }
    ;
    getTopics(baseURL) {
        return this.http.get(baseURL + 'api/v2/topics/?format=json');
    }
    ;
    getTags(baseURL) {
        return this.http.get(baseURL + 'api/v2/tags/?format=json');
    }
    ;
    getAssetTypes(baseURL) {
        return this.http.get(baseURL + 'api/v2/asset-type/?format=json');
    }
    ;
    getActivityTypes(baseURL) {
        return this.http.get(baseURL + 'api/v2/activity-type/?format=json');
    }
    ;
    getModules(baseURL) {
        console.log('getModules: ', baseURL + 'api/v2/modules/?format=json');
        return this.http.get(baseURL + 'api/v2/modules/?format=json');
    }
    ;
    getLessons(baseURL) {
        console.log('getLessons: ', baseURL + 'api/v2/lessons/?format=json');
        return this.http.get(baseURL + 'api/v2/lessons/?format=json');
    }
    ;
    getActivities(baseURL) {
        console.log('getActivities: ', baseURL + 'api/v2/activities/?format=json');
        return this.http.get(baseURL + 'api/v2/activities/?format=json');
    }
    ;
};
CurriculumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CurriculumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CurriculumService);



/***/ }),

/***/ "./src/app/programs.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/programs.pipe.ts ***!
  \**********************************/
/*! exports provided: ProgramsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsPipe", function() { return ProgramsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgramsPipe = class ProgramsPipe {
    transform(items, selected_programs) {
        if (!items) {
            return [{}];
        }
        if (!selected_programs) {
            return items;
        }
        return items.filter(item => this.checkFilter(item, selected_programs));
    }
    checkFilter(module, selected_programs) {
        if (selected_programs.length > 0) {
            const some = selected_programs.some(program => module.program.some(item => item.id === program.id));
            return some;
        }
        else {
            return true;
        }
    }
};
ProgramsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'programs'
    })
], ProgramsPipe);



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/tag.pipe.ts":
/*!*****************************!*\
  !*** ./src/app/tag.pipe.ts ***!
  \*****************************/
/*! exports provided: TagPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagPipe", function() { return TagPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TagPipe = class TagPipe {
    transform(items, selected_tags) {
        if (!items) {
            return [{}];
        }
        if (!selected_tags) {
            return items;
        }
        return items.filter(item => this.checkFilter(item, selected_tags));
    }
    checkFilter(object, selected_tags) {
        if (selected_tags.length > 0) {
            const some = selected_tags.some(tags => object.tag.some(item => item.id === tags.id));
            return some;
        }
        else {
            return true;
        }
    }
};
TagPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'tag'
    })
], TagPipe);



/***/ }),

/***/ "./src/app/topic.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/topic.pipe.ts ***!
  \*******************************/
/*! exports provided: TopicPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPipe", function() { return TopicPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopicPipe = class TopicPipe {
    transform(items, selected_topics) {
        if (!items) {
            return [{}];
        }
        if (!selected_topics) {
            return items;
        }
        return items.filter(item => this.checkFilter(item, selected_topics));
    }
    checkFilter(object, selected_topics) {
        if (selected_topics.length > 0) {
            const some = selected_topics.some(topics => object.topic.some(item => item.id === topics.id));
            return some;
        }
        else {
            return true;
        }
    }
};
TopicPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'topic'
    })
], TopicPipe);



/***/ }),

/***/ "./src/app/type.pipe.ts":
/*!******************************!*\
  !*** ./src/app/type.pipe.ts ***!
  \******************************/
/*! exports provided: TypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePipe", function() { return TypePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TypePipe = class TypePipe {
    transform(items, selected_types) {
        if (!items) {
            return [{}];
        }
        if (!selected_types) {
            return items;
        }
        return items.filter(item => this.checkFilter(item, selected_types));
    }
    checkFilter(object, selected_types) {
        if (selected_types.length > 0) {
            const some = selected_types.some(type => object.asset_type === type.id);
            return some;
        }
        else {
            return true;
        }
    }
};
TypePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'type'
    })
], TypePipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sdresser/Documents/Projects/curriculum-platform/frontend/search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map