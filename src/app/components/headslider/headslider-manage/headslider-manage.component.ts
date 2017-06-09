import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { Uploader }      from 'angular2-http-file-upload';
import { MyUploadItem }  from "../../../upload-item";
declare var $ : any;
declare var toastr : any;

@Component({
  selector: 'app-headslider-manage',
  templateUrl: './headslider-manage.component.html',
  styleUrls: ['./headslider-manage.component.css']
})
export class HeadsliderManageComponent implements OnInit {
  public slider = {
    id:"",
    name:"",
    description:"",
    link_to:"",
    link_id:"",
    image:""
  }
  public uploadUrl:string = "/upload/slider";
  public imgLink:string = "";
  public uploadedFiles: any[] = [];
  public categoryList = [];

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public apiService: ApiService ,
    public uploaderService: Uploader,
    public _elRef: ElementRef
  ) { }

  public ngOnInit() {
    this.slider.link_to = "product";
    this.categoryList = [{"value":"all_product","label":"All product","ishide":true}];
    this.slider.link_id = "all_product";

    this.getCategoryList();

    this.uploadUrl = this.apiService.upl + this.uploadUrl;
    this.imgLink = this.apiService.img;
  }

  public getCategoryList(){
      this.apiService
          .post("/api/category_list",{})
          .subscribe(
            data => this.getCategoryListDoneAction(data), // OR this.categoryLists = data.data,
            error => this.getCategoryListErrorAction(error)
          );
  }

  public getCategoryListDoneAction(res:any){
      if(res.status == true){
          for(let i = 0; i < res.data.length; i++){
              this.categoryList.push({label: res.data[i].cate_name, value: res.data[i].id});
          }
          // this.slider.link_id = res.data[0].id;
      }else{
          console.log("error = ", res.error);
      }
  }

  public getCategoryListErrorAction(error:any){
      console.log("error = ", error);
  }

  public changeLinkTo(data:any){
    console.log(data.target.value);
    if(data.target.value == "category"){
      this.slider.link_id = this.categoryList[1].value;
    }else{
      this.slider.link_id = "all_product";
    }
    console.log(this.categoryList);
  }

  public checkBeforSave(){
    console.log(this.slider);
  }

  public uploadFile(data:any){
      console.log("file = ", data.target.files[0]);
      let uploadFile = data.target.files[0];

      let myUploadItem = new MyUploadItem(uploadFile, this.uploadUrl);
      myUploadItem.formData = { FormDataKey: 'Form Data Value' };  // (optional) form data can be sent with file

      this.uploaderService.onSuccessUpload = (item, response, status, headers) => {
         console.log("onSuccessUpload = ", response);
         let pic_name = JSON.parse(response);
         if(pic_name.status === true){
            pic_name.data.sliderpic_path = this.imgLink + pic_name.data.productpic_path;
            pic_name.data.flag = "c";
            this.uploadedFiles.push(pic_name.data);
            console.log("upload seccess");
         } else {
            console.log("error = ", pic_name.error);
            toastr.warning('บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง', 'Warning!');
         }
        //  this.product.productImage = "";
      };
      this.uploaderService.onErrorUpload = (item, response, status, headers) => {
         console.log("onErrorUpload = ", response);
      };
      this.uploaderService.upload(myUploadItem);
  }

}
