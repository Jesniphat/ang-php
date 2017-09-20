import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";
import { ProductStorageService } from "../../../service/product-storage.service";

@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.component.html',
  styleUrls: ['./stock-in.component.css']
})
export class StockInComponent implements OnInit {
  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
  public listProductName = [
    // {id:1, title:'jesse'},
    // {id:2, title:'love'}
  ];
  public group = [
    // CreateNewAutocompleteGroup(
    //   'Search / choose in / from list',
    //   'completer',this.listProductName,
    //   {titleKey: 'title', childrenKey: null}
    // ),
  ];
  
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
    this.storages.autocomplete(resule => {
      console.log(resule);
      this.addNewList(resule);
    }, error =>{
      console.log(error);
    });
  }


  /**
   * Add New Name List to var
   * 
   * @access public
   * @param ss 
   */
  public addNewList(list:any){
    list.forEach(element => {
      this.listProductName.push({title: element.name, id: element.id});
    });
    this.group = [
      CreateNewAutocompleteGroup(
        'Search / choose in / from list',
        'completer',this.listProductName,
        {titleKey: 'title', childrenKey: null}
      ),
    ];
    return;
  }


  /**
   * Library function of autocomple
   * 
   * @param item
   * @access public 
   */
  public Selected(item: SelectedAutocompleteItem){
    console.log(item);
  }


  /**
   * Submit function
   * 
   * @access public
   */
  public submit() {

  }

}
