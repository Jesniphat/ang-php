import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RootscopeService {
  // Observable navItem source
  // public data:any;
  private _showNav = new BehaviorSubject<any>({});

  constructor() { }

  // Observable navItem stream
  showNav$ = this._showNav.asObservable();
  // service command
  loginShow(someObj:any) {
    this._showNav.next(someObj);
  }
}
