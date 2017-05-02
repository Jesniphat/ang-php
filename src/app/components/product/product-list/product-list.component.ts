import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { FilterService } from "../../../service/filter.service";
declare var $ : any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public error:any;
  public productLists:any = [];
  public productList:any = [];
  public products:any = [];
  public pageList:any = [];
  public pageText:any = 1;
  public cols = ["product_name","product_description","product_qty","product_price"];

  constructor(
    public router: Router,
    public apiService: ApiService ,
    public _elRef: ElementRef,
    public filterService: FilterService
  ) { }

  ngOnInit() {
    console.log("product_list.component");
    this.getAllProduct();
  }

  public getAllProduct(){
      let param = {"id":"สินค้าทั้งหมด"}
      this.apiService
          .post("/api/product_list",param)
          .subscribe(
              data => this.getAllProductDoneAction(data),//this.productLists = data.data,
              error => this.getAllProductErrorAction(error)
          );
  }

  public getAllProductDoneAction(data){
    console.log(data);
    this.productLists = data.data
    this.page(1,data.data);
  }

  public getAllProductErrorAction(error:any){
      this.error = error.message;
      console.log("errer = ", this.error);
  }

  public add_new_product(data:any){
      let link: any;
      if(data == 'create'){
          link = ['/product_list/product', data];
      }
      else{
          link = ['/product_list/product', data.id];
      }
      this.router.navigate(link);
  }

  public viwe_product_pic(data:any){
      let link: any;
    //   console.log("Product Pic = ", data);
      link = ['/product_list/product_pic/', data.id];
      this.router.navigate(link);
  }

  public myFilter(str: string){
      let column = ['product_name','product_description','product_price'];
      this.pageText = 1;
      this.productList = this.filterService.tableFilter(column,this.productLists,str);
      this.page(1,this.productList);
  }

  public pageClick(start:any){
      if(this.productList.length == 0){
        this.page(start,this.productLists);
      }else{
        this.page(start,this.productList);
      }
      
  }

  public page(start:any,data:any[]){
    this.products = [];
    this.products = (this.filterService.pageNo(start,6,data)).data;
    this.pageList = (this.filterService.pageNo(start,6,data)).page;
  }

}
