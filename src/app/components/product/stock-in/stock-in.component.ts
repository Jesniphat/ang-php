import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductManageComponent } from '../product-manage/product-manage.component';

import { ProductStorageService } from "../../../service/product-storage.service";
import { ApiService } from "../../../service/api.service";
import { DialogService } from "../../../service/dialog.service";
import { RootscopeService } from "../../../service/rootscope.service";

declare let $: any;
declare var toastr: any;

@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.component.html',
  styleUrls: ['./stock-in.component.css']
})
export class StockInComponent implements OnInit {

  /** Connect to child */
  @ViewChild(ProductManageComponent) public productManageComponent: ProductManageComponent;
  public productId:any = 'create';
  
  /**
   * Create var
   */
  public productNameList:any[];
  // public productId:number = 0;
  public productName:string = "";
  public storage: any;

  public stockInProduct:any = {
    id:"",
    code: "",
    name: "",
    qty:  "",
    staffid:0
  }

  /** Data table var */
  public stockList: any[] = [];
  public columns = [
    { name: 'Code', prop: 'code' },
    { name: 'Name', prop: 'product_name' },
    { name: 'Lot In', prop: 'lot_in' },
    { name: 'Price', prop: 'product_price'}
  ];


  /**
   * Create Autocomplete Option
   */
  public options = {
    data: [],
    getValue: "name",
    template: {
      type: "description",
      fields: {
        description: "code"
      }
    },
    list: {
      onChooseEvent: function() {
        var selectedItemValue = $("#product-name").getSelectedItemData().id;
        $('#product-id').val(selectedItemValue).trigger("change");;
      }
    }
  };

  /** Dialog */
  public addProductDialog:any;

  
  /**
   * constructor of class
   * 
   * @param storages
   * @access public 
   */
  public constructor( 
    public storages:ProductStorageService, 
    public apiService: ApiService, 
    public dialogService: DialogService,
    public $rootScope: RootscopeService,
  ) { }


  /**
   * start function
   * 
   * @access public
   */
  public ngOnInit() {
    // console.log(this.storages.getProductNameList());
    this.$rootScope.setBlock(false);
    this.storage = localStorage;
    if (this.storage.getItem('logindata')) {
      let logindata = JSON.parse(this.storage.getItem('logindata'));
      this.stockInProduct.staffid = logindata.id;
    }

    this.storages.$productList.subscribe(data => this.getProductNameList(data));
    this.storages.productListGetting();

    this.addProductDialog = this.dialogService.build(document.getElementById('add-product'));
  }


  /**
   * Submit function  getproductbyid
   * 
   * @access public
   */
  public searchProduct() {
    console.log($('#product-id').val());
    if(!$('#product-id').val()){
      this.productId = "create";
      this.addProductDialog.showModal();
			this.productManageComponent.reset();
      return;
    }
    this.$rootScope.setBlock(true);
    let param = {
      product_id: $('#product-id').val()
    };
    this.apiService
    .post("/api/product/getproductbyid", param)
    .subscribe(
      res => this.getProductByidDoneAction(res),
      error => this.getProductByidErrorAction(error)
    )
  }


  /**
   * When get product complete
   * @param res 
   * @access public
   * @return void
   */
  public getProductByidDoneAction(res: any){
    this.stockInProduct.id = res.data.id;
    this.stockInProduct.code = res.data.code;
    this.stockInProduct.name = res.data.product_name;

    this.getStockList(res.data.id);

    this.$rootScope.setBlock(false);
  }


  /**
   * When get product not complete
   * 
   * @param error 
   * @access public
   * @return void
   */
  public getProductByidErrorAction(error: any){
    console.log(error);
    this.$rootScope.setBlock(false);
  }


  /**
   * Clear hidden box data when focus on autocomplete box
   */
  public clearData(){
    $("#product-id").val('');
  }


  /**
   * Show obsavel data
   * 
   * @access public
   * @param data
   * @return voie
   */
  public getProductNameList(data:any){
    console.log(data);
    this.options.data = data;
    $("#product-name").easyAutocomplete(this.options);
  }


  /**
   * Save ot in data
   * 
   * @param none
   * @access public
   * @return void
   */
  public saveLotIn(){
    console.log("save lot in");
    this.$rootScope.setBlock(true);
    let param = {
      product_id: this.stockInProduct.id,
      product_code: this.stockInProduct.code,
      product_qty: this.stockInProduct.qty,
      staff_id: this.stockInProduct.staffid
    }
    this.apiService
      .post("/api/product/saveStockIn", param)
      .subscribe(
      res => this.saveStockDoneAction(res),
      error => this.saveStockErrorAction(error)
    )
  }

/**
 * Save stock done.
 * 
 * @param res 
 * @access private
 */
  private saveStockDoneAction(res: any) {
    console.log(res);
    if(res.status === true){
      this.reset();
      this.$rootScope.setBlock(false);
      this.searchProduct();
			toastr.success('บันทึกข้อมูลสำเร็จ', 'Success!');
    }else{
      console.log("can't save ", res.error);
      this.$rootScope.setBlock(false);
			toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Warning!');
    }
  }


  /**
   * Save stock error
   * 
   * @param error 
   * @access private
   */
  private saveStockErrorAction(error: any) {
    console.log("can't save ", error);
    this.$rootScope.setBlock(false);
    toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Warning!');
  }


  /**
   * Get stock list
   * 
   * @access private
   */
  private getStockList(id: any) {
    let param = {
      product_id: id//$('#product-id').val()
    };
    this.apiService
    .post("/api/product/getStockList", param)
    .subscribe(
      res => this.stockList = res.data,
      error => console.log(error)
    )
  }

  /**
   * Reset every thing
   * 
   * @param none
   * @access public
   * @return void
   */
  public reset(){
    this.stockInProduct = {
      id:"",
      code: "",
      name: "",
      qty:  "",
      staffid: this.stockInProduct.staffid
    }
    // this.options.data = [];
    // $("#product-id").val('');
  }

}
