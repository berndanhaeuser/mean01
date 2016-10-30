import {Component, OnInit, Input} from '@angular/core';
import {Person} from "../model/person";
import {DataService} from "../services/data.service";
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  private model: Person = new Person();
  private modelID: string;

  constructor(private dataService:DataService, private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.modelID = params['id'];
      console.log("Aktuelle ID: " + this.modelID);
      this.getPerson(this.modelID);
    });
  }

  getPerson(id: string) {
    console.log("Aufruf getPerson in Komponente")
    this.dataService.getPerson(id)
        .then(res => {
          this.model = res;
          console.log("Then ist jetzt fertig");
    })
        .catch(err => console.log("Fehler " + err));



  }


}
