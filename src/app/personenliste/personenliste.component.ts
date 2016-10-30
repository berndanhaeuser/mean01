import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Person} from "../model/person";
import {Router} from "@angular/router";

@Component({
    selector: 'app-personenliste',
    templateUrl: './personenliste.component.html',
    styleUrls: ['./personenliste.component.css']
})
export class PersonenlisteComponent implements OnInit {

    personen: Person[];
    selectedPerson: Person;


    constructor(private datenService: DataService, private router:Router) {
    }

    onMouseClick(aktPerson: Person){
        this.selectedPerson = aktPerson;
    }

    showDetailPage(){
        let link = ['/personen', this.selectedPerson.id];
        console.log("Datailseite aufrufen mit " + link);
        this.router.navigate(link);
    }

    getAllPersons() {
        console.log("Aufruf getAllCustomers in Komponente")
        this.datenService.getAllCustomers()
            .then(personenVomService => this.personen = personenVomService)
            .catch(x => console.log(x));
    }

    ngOnInit() {
        this.getAllPersons();
    }

}
