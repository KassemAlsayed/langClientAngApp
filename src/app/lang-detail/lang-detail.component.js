"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var lang_service_1 = require("../lang-service/lang.service");
var LangDetailComponent = (function () {
    function LangDetailComponent(langService, route, location) {
        this.langService = langService;
        this.route = route;
        this.location = location;
    }
    LangDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.langService.getLang(+params['id']); })
            .subscribe(function (lang) { return _this.lang = lang; });
    };
    LangDetailComponent.prototype.save = function () {
        var _this = this;
        this.langService.update(this.lang)
            .then(function () { return _this.goBack(); });
    };
    LangDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return LangDetailComponent;
}());
LangDetailComponent = __decorate([
    core_1.Component({
        selector: 'lang-detail',
        templateUrl: './lang-detail.component.html',
        styleUrls: ['./lang-detail.component.css']
    }),
    __metadata("design:paramtypes", [lang_service_1.LangService,
        router_1.ActivatedRoute,
        common_1.Location])
], LangDetailComponent);
exports.LangDetailComponent = LangDetailComponent;
//# sourceMappingURL=lang-detail.component.js.map