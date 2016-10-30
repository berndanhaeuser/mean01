import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {PersonenlisteComponent} from './personenliste/personenliste.component';
import {RouterModule} from "@angular/router";
import {DefaultComponent} from './default/default.component';
import {MedilisteComponent} from './mediliste/mediliste.component';
import {DataService} from "./services/data.service";
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        PersonenlisteComponent,
        DefaultComponent,
        MedilisteComponent,
        PersonDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/personen', pathMatch: 'full' },
            {path: 'personen', component: PersonenlisteComponent},
            {path: 'personen/:id', component: PersonDetailComponent},
            {path: 'mediliste', component: MedilisteComponent},
            {path: '**', component: DefaultComponent}
        ])
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
