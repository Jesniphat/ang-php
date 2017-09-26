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
  }

  /**
   * Get Data to aucompelte 
   * 
   * @access public
   * @param call back
   * @return call back
   */
  public autocomplete(resule, error){
    let $scope:any;
    this.getMaxProductId(this.apiService)
    .then(this.getProductNameList)
    .then((data) => {
      console.log("test");
      resule(data);
    })
    .catch((error) => {
      console.log(error);
      error(error);
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
      .post("/api/product/maxProductId",{})
      .subscribe(
          data => {
            let param = {
              apiService: apiService,
              max_id: data.data
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
        if(productListName[productListName.length - 1].id == param.max_id){
          return resolve(productListName);
        }else{
          // Select by last id
          let setMax = 0;
          if(productListName[productListName.length - 1].id < param.max_id){
            setMax = productListName[productListName.length - 1].id;
          } else {
            setMax = param.max_id;
          }
          console.log(setMax);
          param.apiService
          .post("/api/product/autocompleteProductNameList",{'max_id':setMax})
          .subscribe(
              (resule) => { 
                console.log(resule);
                if(!resule.status){
                  return resolve(productListName);
                } else {
                  resule.data.forEach(element => {
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
        .post("/api/product/autocompleteProductNameList",{'max_id':'0'})
        .subscribe(
          (result) => { 
            console.log(result); 
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
