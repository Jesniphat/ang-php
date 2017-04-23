import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { MyUploadItem }  from "../../../upload-item";
declare var $ : any;

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent implements OnInit {
  private error:string = "";
  private storage: any;
  private product = {
      id : "",
      name: "",
      desc: "",
      price: 0,
      qty: 0,
      pic_id:<any>[],
      pic_ids:"",
      staffid: "0",
      category:""
  }
  private categoryList = [];
  private selectedStatus:any = "Y";
  private productPicName:any[] = [];
  private uploadedFiles: any[] = [];
  private msgs:any;
  private uploadUrl:string = "/upload/product";
  private imgLink:string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService ,
    private _elRef: ElementRef
  ) { 
    this.storage = localStorage;
  }

  ngOnInit() {
    console.log("product_managet.component");

    this.uploadUrl = this.apiService.upl + this.uploadUrl;
    this.imgLink = this.apiService.img;

    if(this.storage.getItem('logindata')){
      let logindata = JSON.parse(this.storage.getItem('logindata'));
      this.product.staffid = logindata.id;
    }

    this.product.id = this.route.snapshot.params['id'];
    // console.log("Product Id = ",this.product.id);
    this.getCategoryList();
    if(this.product.id != "create"){
        this.getProductByid(this.product.id);
    }
  }

  getCategoryList(): Promise<boolean>{
      return new Promise<boolean>((resolve, reject) => {
          let param = {}
          this.apiService
              .post("/api/category_list",param)
              .subscribe(
                data => this.getCategoryListDoneAction(data), // OR this.categoryLists = data.data,
                error => this.getCategoryListErrorAction(error) 
              );
      });
  }

  getCategoryListDoneAction(res:any){
      if(res.status == true){
          for(let i = 0; i < res.data.length; i++){
              this.categoryList.push({label: res.data[i].cate_name, value: res.data[i].id});
          }
          this.product.category = res.data[0].id;
      }else{
          console.log("error = ", res.error);
      }
  }

  getCategoryListErrorAction(error:any){
      console.log("error = ", error);
  }

  getProductByid(productId:any){
      let param = {
          product_id: productId
      };
      this.apiService
          .post("/api/getproductbyid", param)
          .subscribe(
              res => this.getProductByidDoneAction(res),
              error => this.getProductByidErrorAction(error)
          )
  }

  getProductByidDoneAction(res){
      // console.log(res);
      if(res.status === true){
          // console.log(res);
          let prodResData = res.data;
          this.product.id = prodResData.id;
          this.product.name = prodResData.product_name;
          this.product.desc = prodResData.product_description;
          this.product.price = prodResData.product_price;
          this.product.qty = prodResData.product_qty;
          this.product.category = prodResData.category_id;
        //   console.log(prodResData.pic);

          let pic_name = prodResData.pic;

          if(pic_name.length > 0){
              for(var z = 0; z < pic_name.length; z++){
                  pic_name[z].productpic_path = this.imgLink + pic_name[z].productpic_path;
                  pic_name[z].flag = "u"; 
              }
          }
          this.uploadedFiles = pic_name;
      }   
  }

  getProductByidErrorAction(error){
      console.log(error);
  }

  changeCategory(newValue:any) {
      console.log(newValue);
      this.product.category = newValue;
  }

  onUploaded(event:any){
      // console.log("onUploaded = ", event);
      // console.log("get xhr = ", JSON.parse(event.xhr.response));
      let pic_name = JSON.parse(event.xhr.response);
      if(pic_name.status === true){
        //   this.product.pic_id.push(pic_name.data.id);
          pic_name.data.productpic_path = this.imgLink + pic_name.data.productpic_path;
          pic_name.data.flag = "c";
          this.uploadedFiles.push(pic_name.data);
      } else {
          console.log("error = ", pic_name.error);
          this.msgs = [];
          this.msgs.push({severity:'warn', summary:'Oops!', detail:'บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง'});
      }
    //   console.log("File ID = ", this.product.pic_id);
  }

  onUploadedError(event:any){
      console.log("upload error = ", event);
      this.msgs = [];
      this.msgs.push({severity:'warn', summary:'Oops!', detail:'บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง'});
  }

//   removeUploadingId(event:any){
//       console.log("Remove = ", event);
//   }

  hideUploadBt(){
    $(this._elRef.nativeElement).find("[label=Upload]").css({"display": "none"});
    $(this._elRef.nativeElement).find("[label=Cancel]").css({"display": "none"});
    $(this._elRef.nativeElement).find("#cancelAll").css({"display": "inherit"});
  }

  checkBeforSave(){
      if((this.product.pic_id).length == 0){
        //   this.confirmationService.confirm({
        //       message: "You doesn't upload product picture. Do you want to save this product?",
        //       accept: () => {
        //           //Actual logic to perform a confirmation
        //           this.saveProduct();
        //       }
        //   });
      } else {
        //   this.confirmationService.confirm({
        //       message: 'Are you sure that you want to save this product?',
        //       accept: () => {
        //           //Actual logic to perform a confirmation
        //           this.saveProduct();
        //       }
        //   });
      }
  }

  saveProduct(){
      console.log("save product");
      if((this.uploadedFiles).length > 0){
          for(var i = 0; i < this.uploadedFiles.length; i++){
              (this.product.pic_id).push(this.uploadedFiles[i].id);
          }
      }
    //   console.log(this.product);
      this.apiService
          .post("/api/saveproduct", this.product)
          .subscribe(
              res => this.saveProductDoneAction(res),
              error => this.saveProductErrorAction(error)
          )
  }

  saveProductDoneAction(res:any){
      console.log("res = ", res);
      if(res.status === true){
          this.msgs = [];
          this.msgs.push({severity:'success', summary:'Success!', detail:'บันทึกข้อมูลสำเร็จ'});
          this.reset();
      } else {
          console.log("can't save ", res.error);
          this.msgs = [];
          this.msgs.push({severity:'warn', summary:'Oops!', detail:'บันทึกข้อมูลไม่สำเร็จ'});
      }
  }

  saveProductErrorAction(error:any){
      this.error = error.message;
      console.log("error = ", this.error);
      this.msgs = [];
      this.msgs.push({severity:'warn', summary:'Oops!', detail:'บันทึกข้อมูลไม่สำเร็จ'});
  }

  onSubmit(value:any){
      console.log("value submit = ", value);
  }

  removeImg(id:any, index:any){
      console.log(id);
      console.log("index = ", index);
      this.uploadedFiles.splice(index, 1);
  }

  reset(){
      this.product = {
          id : "create",
          name: "",
          desc: "",
          price: 0,
          qty: 0,
          pic_id: [],
          staffid: "0",
          pic_ids: "",
          category: ""
      }
      this.uploadedFiles = [];
  }

}
