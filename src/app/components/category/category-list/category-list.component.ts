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
    private item = 1;
    private error:string = "";
    private query:string = "";
    private categoryLists:any = [];
    private categoryList:any = [];
    private categorys:any = [];
    private filterText:any = "";
    private pageList:any = [];
    private cols:any = ["cate_name","cate_description","product_qty","status"];

    private testPipes = "";

  constructor(
    private router: Router,
    private apiService: ApiService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    console.log("category_list.component");

    this.getCategoryList();
  }

  private getCategoryList(){
    let param = {"id":"ทดสอบ"}
    this.apiService
        .post("/api/category_list",param)
        .subscribe(
          data => this.getCategoryDoneAction(data), // OR this.categoryLists = data.data,
          error => this.errorAction(error) 
          );
  }

  private getCategoryDoneAction(data:any){
      // console.log("data = ", data);
      this.categoryLists = data.data;
      this.page(1,data.data);
  }

  private errorAction(error:any){
      this.error = error.message;
      console.log("errer = ", this.error);
  }

  private myFilter(str: string){
      let column = ['cate_name','cate_description'];
      this.categoryList = this.filterService.tableFilter(column,this.categoryLists,str);
      this.page(1,this.categoryList);
  }


  private pageClick(start:any){
      if(this.categoryList.length == 0){
        this.page(start,this.categoryLists);
      }else{
        this.page(start,this.categoryList);
      }
      
  }

  private page(start:any,data:any[]){
    this.categorys = [];
    this.categorys = (this.filterService.pageNo(start,9,data)).data;
    this.pageList = (this.filterService.pageNo(start,9,data)).page;
  }

  private add_new_category(data:any){
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
