import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
declare var $ : any;
declare var toastr : any;

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
  public filterText:any = "";
  public pageNo:any = 1;
  public uploadUrl:string = "/upload/product";
  public imgLink:string = "";
  public cols = ["product_name","product_description","product_qty","product_price"];
  public delete_id:any = "";

  constructor(
    public router: Router,
    public apiService: ApiService ,
    public _elRef: ElementRef
  ) { }

  ngOnInit() {
    console.log("product_list.component");
    this.uploadUrl = this.apiService.upl + this.uploadUrl;
    this.imgLink = this.apiService.img;

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
    // console.log(data);
    this.productLists = data.data;
    if(this.productLists.length > 0){
        for(let z = 0; z < this.productLists.length; z++){
            this.productLists[z].img = this.imgLink + this.productLists[z].img;
        }
    }
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

  public focusFilter(){
      this.pageNo = 1;
  }

  public delete_product(data:any){
    // console.log(data);
    this.delete_id = data.id;
    $('#deleteProduct').modal('show');
  }

  public removeProduct(){
    //   console.log(this.delete_id);
    let param = {"id": this.delete_id}
      this.apiService
          .post("/api/delete_product",param)
          .subscribe(
              (data) => {
                console.log(data);
                toastr.success('ลบข้อมูลสำเร็จ', 'Success!');
                this.getAllProduct();
              },
              (error) => {
                console.log(error);
              }
          );
  }

}
