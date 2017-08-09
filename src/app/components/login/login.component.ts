import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApiService } from "../../service/api.service";
import { RootscopeService } from "../../service/rootscope.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msgs:any;
  error: any;
  response: {};
  password: any;
  username: any;
  storage: any;

  constructor(public apiService: ApiService, public $rootScope: RootscopeService) { 
    this.storage = localStorage;
  }

  ngOnInit() {
    this.getLogin();
    this.$rootScope.loginShow({hiddenTopBar:true, hiddenSideBar:true /*,loginPading:"0px" */});
  }

  getLogin(){
    let param = {"clear":"login"};
    this.apiService
        .post("/api/authen/clearlogin", param)
        .subscribe(
            res => this.getLoginDoneAction(res),
            error => this.getLoginErrorAction(error)
        );
  }

  getLoginDoneAction(res:any){
      // console.log("res login = ", res);
  }

  getLoginErrorAction(error:any){
      this.error = error.message;
  }

  login(){
    let param = {
      user: this.username,
      password: this.password
    }
    // console.log(param);
    this.apiService
      .post("/api/authen/login", param)
      .subscribe(
          (res) => this.loginDoneAction(res),
          (error) => this.loginErrorAction(error)
      )
  }

  loginDoneAction(res:any){
      // console.log(" res = ", res);
    if(res.status === true){
        let loginData = JSON.stringify(res.data);
        this.storage.setItem('logindata',loginData);
        this.$rootScope.loginShow({hiddenTopBar:false, hiddenSideBar:false});
        window.location.href = "";
        // window.location.reload();
    } else {
        console.log("can't login = ", res.error);
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Oops!', detail:res.error});
    }
  }

  loginErrorAction(error:any){
    this.error = error.message;
    console.log("error = ", this.error);
    // setTimeout(() => this.error = null, 4000);
  }

}
