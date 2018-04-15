"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the angular basics
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// import the app routing configs
var app_routing_module_1 = require("./app-routing.module");
// used for testing, server abstraction - 
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("../lang-service/in-memory-data.service");
// import app components
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var languages_component_1 = require("../languages/languages.component");
var lang_detail_component_1 = require("../lang-detail/lang-detail.component");
var lang_service_1 = require("../lang-service/lang.service");
var lang_search_component_1 = require("../lang-search/lang-search.component");
var about_component_1 = require("../about/about.component");
var error_component_1 = require("../error/error.component");
var AppModule = (function () {
    // export athe app module
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            //InMemoryWebApiModule.forRoot(InMemoryLanguageDataService),
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryLanguageDataService, { passThruUnknownUrl: true }),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            lang_detail_component_1.LangDetailComponent,
            languages_component_1.LanguagesComponent,
            lang_search_component_1.LangSearchComponent,
            about_component_1.AboutComponent,
            error_component_1.ErrorComponent
        ],
        providers: [lang_service_1.LangService],
        bootstrap: [app_component_1.AppComponent]
    })
    // export athe app module
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map