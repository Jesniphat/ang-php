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

  public options = {
    data: [],
      getValue: "name",
      // template: {
      //   type: "description",
      //   fields: {
      //     description: "type"
      //   }
      // }
  };
  
  /**
   * constructor of class
   * 
   * @param storages
   * @access public 
   */
  public constructor( public storages:ProductStorageService) {
    this.storages.$productList.subscribe(data => this.getProductNameList(data));
  }


  /**
   * start function
   * 
   * @access public
   */
  public ngOnInit() {
    // console.log(this.storages.getProductNameList());
    this.storages.autocomplete();
  }


  /**
   * Add New Name List to var
   * 
   * @access public
   * @param ss 
   */
  public addNewList(list:any){
    // list.forEach(element => {
    //   this.listProductName.push({title: element.name, id: element.id});
    // });
    // this.group = [
    //   CreateNewAutocompleteGroup(
    //     'Search / choose in / from list',
    //     'completer',this.listProductName,
    //     {titleKey: 'title', childrenKey: null}
    //   ),
    // ];
    return;
  }


  /**
   * Library function of autocomple
   * 
   * @param item
   * @access public 
   */
  public Selected(){
    console.log();
  }


  /**
   * Submit function
   * 
   * @access public
   */
  public submit() {

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

  public getValue(data:any){
    console.log(data);
  }

}
