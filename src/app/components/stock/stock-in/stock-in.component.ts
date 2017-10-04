import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductStorageService } from "../../../service/product-storage.service";

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
  public productId:any = 0;;

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
      onSelectItemEvent: function() {
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
  public constructor( public storages:ProductStorageService) {
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
   * Submit function
   * 
   * @access public
   */
  public submit() {
    console.log($('#product-id').val());
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
