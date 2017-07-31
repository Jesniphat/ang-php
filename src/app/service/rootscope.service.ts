import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RootscopeService {
  // Observable navItem source
  // public data:any;
  private _showNav = new BehaviorSubject<any>({});
  private _blockUI = new BehaviorSubject<any>({});

  constructor() { }

  // Observable navItem stream
  public showNav$ = this._showNav.asObservable();
  public doBlock$ = this._blockUI.asObservable();
  // service command
  public loginShow(someObj:any) {
    this._showNav.next(someObj);
  }

  public setBlock(data:boolean) {
    this._blockUI.next({
      block:data
    });
  }
}
