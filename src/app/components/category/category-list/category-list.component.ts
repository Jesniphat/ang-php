import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { RootscopeService } from "../../../service/rootscope.service";
import { BlockUI, NgBlockUI } from 'ng-block-ui';
declare var $ : any;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    item = 1;
    error:string = "";
    query:string = "";
    categoryLists:any = [];
    categoryList:any = [];
    categorys:any = [];
    filterText:any = "";
    pageNo:any = 1;

    testPipes = "";

  constructor(
    public router: Router,
    public apiService: ApiService,
    public $rootScope: RootscopeService
  ) { }

  ngOnInit() {
    console.log("category_list.component");

    this.getCategoryList();
  }

  getCategoryList(){
    this.$rootScope.setBlock(true);
    let param = {"id":"ทดสอบ"}
    this.apiService
        .post("/api/category/category_list",param)
        .subscribe(
          data => this.getCategoryDoneAction(data), // OR this.categoryLists = data.data,
          error => this.errorAction(error) 
          );
  }

  getCategoryDoneAction(data:any){
      console.log("data = ", data);
      this.categoryLists = data.data;
      this.$rootScope.setBlock(false);
  }

  errorAction(error:any){
      this.error = error.message;
      console.log("errer = ", this.error);
      this.$rootScope.setBlock(false);
  }

  focusFilter(){
      this.pageNo = 1;
  }

  add_new_category(data:any){
      // console.log("add new cate = ", data);
      let link: any;
      if(data == 'create'){
          link = ['/category_list/create_cate', data];
      }else{
          link = ['/category_list/create_cate', data.id];
      }
      this.router.navigate(link);
  }

}
