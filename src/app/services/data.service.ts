import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Person} from "../model/person";

@Injectable()
export class DataService {
    private headers = new Headers({'Content-Type': 'application/json'});

    private urlPersonenListe = "http://localhost:3000/api/persons";

    constructor(private http: Http) {
    }

    getAllCustomers(): Promise<Person[]> {
        return this.http.get(this.urlPersonenListe)
            .toPromise()
            .then(response => response.json() as Person[])
            .catch(function () {
                console.log("Hat NICHT!!!!! geklappt bei " + this.urlPersonenListe);
            });
    }


    getPerson(id: string): Promise<Person> {
        let urlForPerson:string = this.urlPersonenListe + "/" + id;
        console.log("Hole Person von " + urlForPerson);
        return this.http
            .get(urlForPerson)
            .toPromise()
            .then(response => response.json() as Person)
            .catch(function () {
                console.log("Hat NICHT!!!!! geklappt bei " + this.urlForPerson);
            });
    }
}