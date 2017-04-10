import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RootscopeService {
  // Observable navItem source
  // public data:any;
  private _showNav = new BehaviorSubject<any>({});
  private _logindata = new BehaviorSubject<any>("");
  
  constructor() { }

  // Observable navItem stream
  showNav$ = this._showNav.asObservable();
  loginData$ = this._logindata.asObservable();
  // service command
  loginShow(someObj:any) {
    this._showNav.next(someObj);
  }

  setLoginData(obj:any){
    this._logindata.next(obj);
    // if(obj != "" && obj != undefined){
    //   let dataObj = JSON.parse(obj);
    //   this.data = dataObj;
    // }
  }
}
