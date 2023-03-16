import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { People } from 'src/app/data';
import { Person } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private newHappyPeople = new BehaviorSubject<Person[]>([]);
  happyPeople$ = this.newHappyPeople.asObservable();

  constructor() {}

  addHappyPerson(person: Person): void {
    People.push(person);
    this.newHappyPeople.next(People);
  }
}
