"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var personenliste_component_1 = require('./personenliste/personenliste.component');
var router_1 = require("@angular/router");
var default_component_1 = require('./default/default.component');
var mediliste_component_1 = require('./mediliste/mediliste.component');
var data_service_1 = require("./services/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                personenliste_component_1.PersonenlisteComponent,
                default_component_1.DefaultComponent,
                mediliste_component_1.MedilisteComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'personenliste', component: personenliste_component_1.PersonenlisteComponent },
                    { path: 'mediliste', component: mediliste_component_1.MedilisteComponent },
                    { path: '**', component: default_component_1.DefaultComponent }
                ])
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map