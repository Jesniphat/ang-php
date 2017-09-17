import { Injectable } from '@angular/core';
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
 * Construtor of class
 * 
 * @access public
 */
  public constructor(public apiService: ApiService) {

  }


/**
 * Automatic start function
 * 
 * @access public 
 */
  public ngOnInit(){
    let $scope:any;

    this.getMaxProductId(this.apiService)
    .then(this.getProductNameList)
    .then(() => {
      console.log("test");
    })
    .catch((error) => {
      console.log(error);
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
      .post("/api/product/autocompleteProductNameList",{'max_id':'0'})
      .subscribe(
          data => { 
            console.log(data, 'sdfdsd');
            let param = {
              apiService: apiService,
              scope: data
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
      productListName = JSON.parse(this.storage.getItem('productlistname'));
    }

    return new Promise<any>((resolve, reject) => {
      let listData:any;
      if(productListName.length != 0){
        //Select by last id
        console.log("dfd", param.scope);
        param.apiService
        .post("/api/product/autocompleteProductNameList",{'max_id':'0'})
        .subscribe(
            (data) => { 
              console.log(data); 
              return resolve(data); 
            },
            (error) => {
              console.log(error);
              return reject(error);
            }
        );
      }else{
        //Select all first
        console.log("dfds", param.scope);
        param.apiService
        .post("/api/product/autocompleteProductNameList",{'max_id':'0'})
        .subscribe(
          (data) => { 
            console.log(data); 
            return resolve(data); 
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
