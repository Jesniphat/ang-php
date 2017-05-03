import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { FilterService } from "../../../service/filter.service";
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
    // filterText:any = "";
    pageList:any = [];
    cols:any = ["cate_name","cate_description","product_qty","status"];
    pageNo:any = 1;

    testPipes = "";

  constructor(
    public router: Router,
    public apiService: ApiService,
    public filterService: FilterService
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
      // this.page(1,data.data);
  }

  errorAction(error:any){
      this.error = error.message;
      console.log("errer = ", this.error);
  }

  myFilter(str: string){
      // let column = ['cate_name','cate_description'];
      // this.categoryList = this.filterService.tableFilter(column,this.categoryLists,str);
      // this.page(1,this.categoryList);
      this.pageNo = 1;
  }


  pageClick(start:any){
      if(this.categoryList.length == 0){
        this.page(start,this.categoryLists);
      }else{
        this.page(start,this.categoryList);
      }
      
  }

  page(start:any,data:any[]){
    this.categorys = [];
    this.categorys = (this.filterService.pageNo(start,6,data)).data;
    this.pageList = (this.filterService.pageNo(start,6,data)).page;
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
