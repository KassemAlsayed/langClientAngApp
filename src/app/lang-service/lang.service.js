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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var data = require("../app/app.config");
var LangService = (function () {
    function LangService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        if (this.isPordMode()) {
            this.languagesUrl = 'http://127.0.0.1:8080/languages';
        }
        else {
            this.languagesUrl = 'api/languages'; // URL to web api
        }
    }
    ///////////////////////
    LangService.prototype.getLanguages = function () {
        var _this = this;
        return this.http.get(this.languagesUrl)
            .toPromise()
            .then(function (response) { return _this.extractRespAsJason(response); })
            .catch(this.handleError);
    };
    LangService.prototype.getLang = function (id) {
        var _this = this;
        var url = this.languagesUrl + "/" + id;
        //let langData = this.http.get(url).toPromise().then(response => console.debug('kass response', response));
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return _this.extractRespAsJason(response); })
            .catch(this.handleError);
    };
    LangService.prototype.delete = function (id) {
        var url = this.languagesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    LangService.prototype.create = function (name) {
        var _this = this;
        return this.http
            .post(this.languagesUrl, JSON.stringify({ name: name, comment: 'no comment', icon: '/app/lang-service/icons/notprovided.jpg' }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.extractRespAsJason(res); })
            .catch(this.handleError);
    };
    LangService.prototype.update = function (lang) {
        var newHeaders = new http_1.Headers([{ 'Content-Type': 'application/json' },
            { 'Accept': '*/*' }]);
        var url = this.languagesUrl + "/" + lang.id; //kass - need this in demo mode
        if (this.isPordMode()) {
            url = "" + this.languagesUrl;
        }
        return this.http
            .put(url, JSON.stringify(lang), { headers: this.headers })
            .toPromise()
            .then(function () { return lang; })
            .catch(this.handleError);
    };
    LangService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ///////// utils ///////////
    /**
   * util method to get the result as json array. sometime the
   * respense contains 'data' and sometimes it does not
   * @param response
   */
    LangService.prototype.extractRespAsJason = function (response) {
        if (this.isPordMode()) {
            return response.json();
        }
        else {
            return response.json().data;
        }
    };
    LangService.prototype.isPordMode = function () {
        return (data.default.isProdMode == true);
    };
    return LangService;
}());
LangService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LangService);
exports.LangService = LangService;
//# sourceMappingURL=lang.service.js.map