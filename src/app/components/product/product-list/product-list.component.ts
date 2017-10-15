import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from "../../../service/dialog.service";
import { ApiService } from "../../../service/api.service";
import { RootscopeService } from "../../../service/rootscope.service";
import { ProductManageComponent } from '../product-manage/product-manage.component';
import { ProductStorageService } from "../../../service/product-storage.service";
declare var $ : any;
declare var toastr : any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(ProductManageComponent) public productManageComponent: ProductManageComponent;
  public error:any;
  public categoryLists = [];
  public productLists:any = [];
  public productList:any = [];
  public products:any = [];
  public filterText:any = "";
  public pageNo:any = 1;
  public uploadUrl:string = "/upload/product";
  public imgLink:string = "";
  public cols = ["product_name","product_description","product_qty","product_price"];
  public delete_id:any = "";
  public productId:any = 'create';
  public dialog:any;
  public deleteProductDialog:any;

  constructor(
    public router: Router,
    public apiService: ApiService ,
    public $rootscope: RootscopeService,
    public _elRef: ElementRef,
    public dialogService: DialogService,
    public productStoreService: ProductStorageService
  ) { }

  ngOnInit() {
    console.log("product_list.component");
    this.uploadUrl = this.apiService.upl + this.uploadUrl;
    this.imgLink = this.apiService.img;
    this.dialog = this.dialogService.build(document.getElementById('add-product'));
    this.deleteProductDialog = this.dialogService.build(document.getElementById('delete-product'));
    this.getCategoryList();
    this.getAllProduct();
  }

  public getCategoryList(): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			let param = {}
			this.apiService
				.post("/api/category/category_list", param)
				.subscribe(
				(data) => {
						if (data.status == true) {
								for (let i = 0; i < data.data.length; i++) {
										this.categoryLists.push({ label: data.data[i].cate_name, value: data.data[i].id });
								}
						} else {
								console.log("error = ", data.error);
						}
				},
					(error) => {
							console.log("error = ", error);
					}
				);
		});
	}

  public getAllProduct(){
      this.$rootscope.setBlock(true);
      let param = {"id":"สินค้าทั้งหมด"}
      this.apiService
          .post("/api/product/product_list",param)
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
    this.$rootscope.setBlock(false);
  }

  public getAllProductErrorAction(error:any){
      this.error = error.message;
      console.log("errer = ", this.error);
      this.$rootscope.setBlock(false);
  }

  public add_new_product(data:any){
		// let link: any;
		// if(data == 'create'){
		// 		link = ['/product_list/product', data];
		// }
		// else{
		// 		link = ['/product_list/product', data.id];
		// }
    // this.router.navigate(link);
    console.log("add new prod");
    this.dialog.showModal();
		if(data == 'create'){
			this.productId = data;
			this.productManageComponent.reset();
		}else{
			this.productId = data.id;
			this.productManageComponent.getProductByid(data.id);
		}
  }

  public focusFilter(){
		this.pageNo = 1;
  }

  public delete_product(data:any){
    // console.log(data);
    this.delete_id = data.id;
    // $('#deleteProduct').modal('show');
    this.deleteProductDialog.showModal();
  }

  public removeProduct(){
    //   console.log(this.delete_id);
    let param = {"id": this.delete_id}
      this.apiService
          .post("/api/product/delete_product",param)
          .subscribe(
              (data) => {
                console.log(data);
                toastr.success('ลบข้อมูลสำเร็จ', 'Success!');
                this.getAllProduct();
                this.deleteProductDialog.close();
                this.productStoreService.deleteProductStore(param);
              },
              (error) => {
                console.log(error);
              }
          );
  }

  public childReturn(result){
		if(result){
      this.getAllProduct();
      this.dialog.close();
		}else{
			console.log("can't save");
		}
  }

}
