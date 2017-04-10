import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
declare var $ : any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private error:any;
  private productLists:any[];
  private cols = ["product_name","product_description","product_qty","product_price"];

  constructor(
    private router: Router,
    private apiService: ApiService ,
    private _elRef: ElementRef
  ) { }

  ngOnInit() {
    console.log("product_list.component");
    this.getAllProduct();
  }

  private getAllProduct(){
      let param = {"id":"สินค้าทั้งหมด"}
      this.apiService
          .post("/api/product_list",param)
          .subscribe(
              data => this.productLists = data.data,
              error => this.getAllProductErrorAction(error)
          );
  }

  // private getAllProductDoneAction(res){
  //   // console.log(res);
  //   this.productLists = res.data
  // }

  private getAllProductErrorAction(error:any){
      this.error = error.message;
      console.log("errer = ", this.error);
  }

  private add_new_product(data:any){
      let link: any;
      if(data == 'create'){
          link = ['/product_list/product', data];
      }
      else{
          link = ['/product_list/product', data.id];
      }
      this.router.navigate(link);
  }

  private viwe_product_pic(data:any){
      let link: any;
    //   console.log("Product Pic = ", data);
      link = ['/product_list/product_pic/', data.id];
      this.router.navigate(link);
  }

}
