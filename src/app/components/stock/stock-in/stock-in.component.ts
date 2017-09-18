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
  public group = [
    CreateNewAutocompleteGroup(
      'Search / choose in / from list',
      'completer',
      [
          {title: 'Option 1', id: '1'},
          {title: 'Option 2', id: '2'},
          {title: 'Option 3', id: '3'},
          {title: 'Option 4', id: '4'},
          {title: 'Option 5', id: '5'},
      ],
      {titleKey: 'title', childrenKey: null}
    ),
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
      this.test(resule);
    }, error =>{
      console.log(error);
    });
  }


  public test(ss){
    console.log('ss = ', ss);
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
