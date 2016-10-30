import {Component} from '@angular/core';
import {Person} from "./model/person";
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'ngMedicFrontend';
}
