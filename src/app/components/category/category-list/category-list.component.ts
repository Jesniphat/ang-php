import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
declare var $ : any;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
    item = 1;
    error:string = "";
    query:string = "";
    categoryLists:any = [];
    categoryList:any = [];
    categorys:any = [];
    pageList:any = [];
    cols:any = ["cate_name","cate_description","product_qty","status"];
    pageNo:any = 1;

    testPipes = "";

  constructor(
    public router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    console.log("category_list.component");

    this.getCategoryList();
  }

  getCategoryList(){
    let param = {"id":"ทดสอบ"}
    this.apiService
        .post("/api/category_list",param)
        .subscribe(
          data => this.getCategoryDoneAction(data), // OR this.categoryLists = data.data,
          error => this.errorAction(error) 
          );
  }

  getCategoryDoneAction(data:any){
      console.log("data = ", data);
      this.categoryLists = data.data;
  }

  errorAction(error:any){
      this.error = error.message;
      console.log("errer = ", this.error);
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
