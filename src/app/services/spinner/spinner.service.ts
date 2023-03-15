import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private settingSubject = new BehaviorSubject<boolean>(false);
  settingObservable$ = this.settingSubject.asObservable();

  constructor() {}

  setLoading(loading: boolean) {
    this.settingSubject.next(loading);
  }
}
