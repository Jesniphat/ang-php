import { Component } from '@angular/core';
import { ApiService } from "./service/api.service";
import { CookieService } from "./service/cookie.service";
import { RootscopeService } from "./service/rootscope.service";
// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  pic_url:string = "";
  hiddenLogin: any = true;
  showSide: any = true;
  isLogged: boolean = true;

  constructor(
   public apiSevice: ApiService, 
   public cookie: CookieService, 
   public $rootScope: RootscopeService
  ) { }

  ngOnInit(){
    // this.testapi();
    this.checkLogin();
    // console.log(this.permission.test());
    // this.checkLoginDoneAction(this.permission.readToken());
    this.$rootScope.showNav$.subscribe(data => this.showNav(data));
  }

  checkLogin(){
    let param:any = {"id":"isLogin"};
    this.apiSevice
        .post("/api/checklogin", param)
        .subscribe(
          data => this.checkLoginDoneAction(data),
          error => this.checkLoginErrorAction(error)
        );
  }

  checkLoginDoneAction(res:any){ // เดี่ยวไปใช้ service
    // console.log(res);
    if(res.data){
        this.hiddenLogin = false;
        this.showSide = true;
    }else{
        this.hiddenLogin = true;
        this.showSide = false;
        window.location.href = "#/login";
    }
  }

  checkLoginErrorAction(error:any){
      console.log(error);
  }

  testapi(){
    let param = {"id":"ทดสอบ"}
    this.apiSevice.post("/api/test", param)
        .subscribe(
          data => this.testdone(data),
          error => this.testerror(error)
        );
  }

  testdone(data:any){
    console.log("data = ", data);
    if(!data.status){
      this.testerror(data);
    }
  }

  testerror(error:any){
    console.log("error => ", error)
  }

  showNav(obj:any){
    if(obj != "" && obj != undefined && Object.keys(obj).length != 0){
      // console.log("obj = ", obj);
      let show = obj;
      this.hiddenLogin = show.hiddenLogin;
      this.showSide = show.class10;
    }
  }

}
