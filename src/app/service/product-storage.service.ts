import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from "./api.service";

@Injectable()
export class ProductStorageService {

  /**
   * 
   * Variable
   */
  public storage: any;
  public productListName: any = [];
  public $scope: any;

  /**
   * 
   * Observable varaible
   */
  public $productList:Observable<any>;

  /**
   * 
   * Oberver data
   */
  public _producList:any;

/**
 * Construtor of class
 * 
 * @param apiService
 * @access public
 * @return void
 */
  public constructor(public apiService: ApiService) {
    this.$productList = new Observable(observer => this._producList = observer);
  }


/**
 * Automatic start function
 * 
 * @access public 
 */
  public ngOnInit(){
    let $scope:any;
  }

  /**
   * Get Data to aucompelte 
   * 
   * @access public
   * @param call back
   * @return call back
   */
  public autocomplete(){
    let $scope:any;
    let that = this;
    this.getMaxProductId(this.apiService)
    .then(this.getProductNameList)
    .then((data) => {
      console.log("test");
      that._producList.next(data);
      // resule(data);
    })
    .catch((error) => {
      console.log(error);
      that._producList.next(error);
      // error(error);
    });
  }

  /**
   * Get Max id frm data base
   * 
   * @access public
   * @return promise
   */
  public getMaxProductId(apiService): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      apiService
      .post("/api/product/maxProductUpdate",{})
      .subscribe(
          data => {
            let param = {
              apiService: apiService,
              max_update: data.data
            }
            return resolve(param); 
          },
          error => {
            console.log(error);
            return reject(error)
          }
      );
    });
  }


  /**
   * Get productlist from server
   * 
   * @access public
   */
  public getProductNameList(param):Promise<any> {
   let  storage = localStorage;
   let productListName = [];
    // Get data from local storage
    if(storage.getItem('productlistname')){
      productListName = JSON.parse(storage.getItem('productlistname'));
    }

    return new Promise<any>((resolve, reject) => {
      let listData:any;
      if(productListName.length != 0){
        if(new Date(productListName[productListName.length - 1].updated_date) == new Date(param.max_update)){
          return resolve(productListName);
        }else{
          // Select by last id
          let setMax = '2000-10-01';
          if(new Date(productListName[productListName.length - 1].updated_date) < new Date(param.max_update)){
            setMax = productListName[productListName.length - 1].updated_date;
          } else {
            setMax = param.max_update;
          }
          // console.log(setMax);
          param.apiService
          .post("/api/product/autocompleteProductNameList",{'max_update':setMax})
          .subscribe(
              (resule) => { 
                // console.log(resule);
                if(!resule.status){
                  return resolve(productListName);
                } else {
                  resule.data.forEach(element => {
                    let newDate = productListName.filter(function(el) {
                      return el.id !== element.id;
                    });
                    productListName = newDate;
                    productListName.push(element);
                  });
                  storage.setItem('productlistname',JSON.stringify(productListName));
                  return resolve(productListName);
                } 
              },
              (error) => {
                console.log(error);
                return reject(error);
              }
          );
        }
      }else{
        //Select all first
        param.apiService
        .post("/api/product/autocompleteProductNameList",{'max_update':'2000-10-01'})
        .subscribe(
          (result) => { 
            // console.log(result); 
            storage.setItem('productlistname',JSON.stringify(result.data));
            return resolve(result.data); 
          },
          (error) => {
            console.log(error);
            return reject(error);
          }
        );
      }
    });
  }

}
