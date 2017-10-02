/**
 * Start Script when page loade
 */

/**
 * Import libraly
 */
import { Component, ElementRef }  from '@angular/core';
import { ApiService }             from './service/api.service';
import { CookieService }          from './service/cookie.service';
import { RootscopeService }       from './service/rootscope.service';
import { BlockUI, NgBlockUI }     from 'ng-block-ui';

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
  @BlockUI() blockUI: NgBlockUI; // Load block UI
  public title = 'app works!';       // Title
  public pic_url:string = './assets/images/empty.png';        // Pic url
  public hiddenTopBar: any = true;   //Top bar hidden
  public hiddenSideBar: any = true;  //Side bar hidden
  public isLogged: boolean = true;   //Check staff login
  public manager: boolean = false;   //Check is staff?

  public storage: any;
  public staffData:any;
  public display_name: any;
  public menuId: any[];
  public dropDownMenu: any;
  public sideHeight:string = "611px";
  public leftPad:string = "0px";
  public rightPad:string = "0px";

  
/**
 * Construtor of class
 * 
 * @param ApiService apiSevice 
 * @param CookieService cookie 
 * @param RootscopeService $rootScope 
 * @param ElementRef _elRef 
 * @access public
 */
public constructor(
   public apiSevice: ApiService, 
   public cookie: CookieService, 
   public $rootScope: RootscopeService,
   public _elRef: ElementRef
  ) {}


/**
 * Automatic start function
 * 
 * @access public 
 */
public ngOnInit(){
    console.log("start App");
    this.storage = localStorage;
    
    // Get login data from local storage
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


/**
 * Check login staff
 * 
 * @access public
 */
public checkLogin(){
    let param:any = {"id":"isLogin"};
    this.apiSevice
        .post("/api/authen/checklogin", param)
        .subscribe(
          data => this.checkLoginDoneAction(data),
          error => this.checkLoginErrorAction(error)
        );
  }


/**
 * If check login is true
 * 
 * @param any res
 * @access public 
 */
public checkLoginDoneAction(res:any){
    if(this.manager){
      // Check has manager login or not if login res.data will have data and then hidden bar will false mean it will show bar.
      if(res.data){
        this.hiddenTopBar = false;
        this.hiddenSideBar = false;
        $("#main").removeClass("hiddenLeftMargin"); // hiddenLeftMargin mean this element margin-left will be 0 px.
      }else{
        this.hiddenTopBar = true;
        this.hiddenSideBar = true;
        $("#main").addClass("hiddenLeftMargin"); // hiddenLeftMargin mean this element margin-left will be 0 px.
      }
    } else {
      // do something in global
    }
  }


/**
 * If can't check login
 * 
 * @param error
 * @access public
 */
  checkLoginErrorAction(error:any){
      console.log(error);
  }


/**
 * Show nav sitebar
 * 
 * @param obj 
 * @access public
 */
public showNav(obj:any){
    if(obj != "" && obj != undefined && Object.keys(obj).length != 0){
      //If hidden bar false mean it will show bar
      let show = obj;
      this.hiddenTopBar = show.hiddenTopBar;
      this.hiddenSideBar = show.hiddenSideBar;
      if(show.hiddenSideBar){
        $("#main").addClass("hiddenLeftMargin"); // hiddenLeftMargin mean this element margin-left will be 0 px.
        $(".mdl-layout__obfuscator").removeClass("is-visible"); // If this class active it will disable black page of mian page
      } else {
        $("#main").removeClass("hiddenLeftMargin"); // hiddenLeftMargin mean this element margin-left will be 0 px.
      }
    }

    if(this.storage.getItem('logindata')){
      let logindata = JSON.parse(this.storage.getItem('logindata'));
      this.staffData = logindata;
      this.display_name = logindata.display_name;
    }
  }


/**
 * Set page width automatic
 * 
 * @access public
 */
public setPage(){
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
  }


/**
 * Block Ui action
 * 
 * @param obj
 * @access public 
 */
public block(obj:any) {
    if(obj.block == true && obj.block != undefined){
      this.blockUI.start('Loading...');
    }else{
      this.blockUI.stop();
      let pageWidth = document.body.clientWidth;
      if(pageWidth < 1200){
        $("#my-side-bar").attr("aria-hidden",true); // This element if it minisize and have aria-hidden = true side bar will show maybe it not need
        $("#my-side-bar").removeClass("is-visible"); // If this class active it will hidden side bar and disable black page
        $(".mdl-layout__obfuscator").removeClass("is-visible"); // If this class active it will disable black page of mian page
      }
    }
  }

}
