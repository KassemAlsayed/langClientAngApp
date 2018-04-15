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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var lang_service_1 = require("../lang-service/lang.service");
var LanguagesComponent = (function () {
    function LanguagesComponent(langService, router) {
        this.langService = langService;
        this.router = router;
    }
    LanguagesComponent.prototype.getLanguages = function () {
        var _this = this;
        this.langService
            .getLanguages()
            .then(function (languages) { return _this.languages = languages; });
    };
    LanguagesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.langService.create(name)
            .then(function (lang) {
            _this.languages.push(lang);
            _this.selectedLang = null;
        });
    };
    LanguagesComponent.prototype.delete = function (lang) {
        var _this = this;
        this.langService
            .delete(lang.id)
            .then(function () {
            _this.languages = _this.languages.filter(function (h) { return h !== lang; });
            if (_this.selectedLang === lang) {
                _this.selectedLang = null;
            }
        });
    };
    LanguagesComponent.prototype.ngOnInit = function () {
        this.getLanguages();
    };
    LanguagesComponent.prototype.onSelect = function (lang) {
        this.selectedLang = lang;
    };
    LanguagesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedLang.id]);
    };
    return LanguagesComponent;
}());
LanguagesComponent = __decorate([
    core_1.Component({
        selector: 'my-languages',
        templateUrl: './languages.component.html',
        styleUrls: ['./languages.component.css']
    }),
    __metadata("design:paramtypes", [lang_service_1.LangService,
        router_1.Router])
], LanguagesComponent);
exports.LanguagesComponent = LanguagesComponent;
//# sourceMappingURL=languages.component.js.map