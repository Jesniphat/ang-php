import { Component, ElementRef } from '@angular/core';
import { ApiService } from "./service/api.service";
import { CookieService } from "./service/cookie.service";
import { RootscopeService } from "./service/rootscope.service";
import { BlockUI, NgBlockUI } from 'ng-block-ui';
// Add the RxJS Observable operators.
import './rxjs-operators';
declare let $ : any;
declare let element: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @BlockUI() blockUI: NgBlockUI;
  title = 'app works!';
  pic_url:string = "";
  hiddenTopBar: any = true;   //Top bar hidden
  hiddenSideBar: any = true;  //Side bar hidden
  isLogged: boolean = true;   //Check staff login
  manager: boolean = false;   //Check is staff?

  storage: any;
  staffData:any;
  display_name: any;
  menuId: any[];
  dropDownMenu: any;
  sideHeight:string = "611px";
  leftPad:string = "0px";
  rightPad:string = "0px";

  constructor(
   public apiSevice: ApiService, 
   public cookie: CookieService, 
   public $rootScope: RootscopeService,
   public _elRef: ElementRef
  ) {}

  ngOnInit(){
    console.log("start App");
    this.storage = localStorage;
    
    if(this.storage.getItem('logindata')){
      let logindata = JSON.parse(this.storage.getItem('logindata'));
      this.staffData = logindata;
      this.display_name = logindata.display_name;
      this.manager = true;
    }
    this.setPage();
    this.checkLogin();
    this.$rootScope.showNav$.subscribe(data => this.showNav(data));
    this.$rootScope.doBlock$.subscribe(data => this.block(data));
  }

  checkLogin(){
    let param:any = {"id":"isLogin"};
    this.apiSevice
        .post("/api/authen/checklogin", param)
        .subscribe(
          data => this.checkLoginDoneAction(data),
          error => this.checkLoginErrorAction(error)
        );
  }

  checkLoginDoneAction(res:any){ // เดี่ยวไปใช้ service
    // console.log(res);
    if(this.manager){
      if(res.data){
        this.hiddenTopBar = false;
        this.hiddenSideBar = false;
      }else{
        this.hiddenTopBar = true;
        this.hiddenSideBar = true;
      }
    } else {
      // do something in global
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
    // console.log(obj);
    if(obj != "" && obj != undefined && Object.keys(obj).length != 0){
      // console.log("obj = ", obj);
      let show = obj;
      this.hiddenTopBar = show.hiddenTopBar;
      this.hiddenSideBar = show.hiddenSideBar;
    }

    if(this.storage.getItem('logindata')){
      let logindata = JSON.parse(this.storage.getItem('logindata'));
      this.staffData = logindata;
      this.display_name = logindata.display_name;
      // console.log("staff = ", this.staffData);
    }
  }

  setPage(){
    this.sideHeight = (document.body.clientHeight - 64) + "px";
    let pageWidth = document.body.clientWidth;
    if(pageWidth < 1200){
      this.leftPad = "0px";
      this.rightPad = "0px";
    }else{
      let pad = (pageWidth - 1200)/2;
      this.leftPad = (pad) + "px";
      this.rightPad = (pad) + "px";
    }
    // console.log(this.leftPad, " - ", this.rightPad);
  }

  block(obj:any) {
    if(obj.block == true && obj.block != undefined){
      this.blockUI.start('Loading...');
    }else{
      this.blockUI.stop();
      let pageWidth = document.body.clientWidth;
      // console.log(pageWidth);
      if(pageWidth < 1200){
        // element.setAttribute("aria-hidden", true);
        $("#my-side-bar").attr("aria-hidden",true);
        $("#my-side-bar").removeClass("is-visible");
        $(".mdl-layout__obfuscator").removeClass("is-visible");
      }
    }
  }

}
