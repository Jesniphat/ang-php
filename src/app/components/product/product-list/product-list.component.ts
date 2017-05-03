import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { PageListPipe } from '../../../pipes/page-list.pipe';
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
  public pageNo:any = 1;
  public cols = ["product_name","product_description","product_qty","product_price"];

  constructor(
    public router: Router,
    public apiService: ApiService ,
    public _elRef: ElementRef
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

}
