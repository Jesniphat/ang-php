import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductStorageService } from "../../../service/product-storage.service";
import { ApiService } from "../../../service/api.service";

declare let $: any;

@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.component.html',
  styleUrls: ['./stock-in.component.css']
})
export class StockInComponent implements OnInit {
  
  /**
   * Create var
   */
  public productNameList:any;
  public productId:any = 0;
  public productName:any = "";

  public stockInProduct:any = {
    code: "",
    name: "",
    qty:  ""
  }


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

  
  /**
   * constructor of class
   * 
   * @param storages
   * @access public 
   */
  public constructor( public storages:ProductStorageService, public apiService: ApiService,) {
  }


  /**
   * start function
   * 
   * @access public
   */
  public ngOnInit() {
    // console.log(this.storages.getProductNameList());
    this.storages.$productList.subscribe(data => this.getProductNameList(data));
    this.storages.autocomplete();
  }


  /**
   * Submit function  getproductbyid
   * 
   * @access public
   */
  public searchProduct() {
    console.log($('#product-id').val());

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
  public getProductByidDoneAction(res){
    this.stockInProduct.code = res.data.code;
    this.stockInProduct.name = res.data.product_name;
  }


  /**
   * When get product not complete
   * 
   * @param error 
   * @access public
   * @return void
   */
  public getProductByidErrorAction(error){
    console.log(error);
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

}
