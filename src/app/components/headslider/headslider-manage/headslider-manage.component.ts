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
  public storage: any;
  public slider = {
    id:"",
    name:"",
    description:"",
    link_to:"",
    link_id:"",
    image:"",
    staff:"",
    image_data:{}
  }
  public uploadUrl:string = "";
  public imgLink:string = "";
  public uploadedFiles = {
    flag: "",
    pic_name:"",
    pic_path:"",
    sliderpic_path:""
  };
  public categoryList = [];
  public warningmsg:string = "";
  public dialogmsg:string = "";

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

    this.slider.id = this.route.snapshot.params['id'];

    this.storage = localStorage;
    let logindata = JSON.parse(this.storage.getItem('logindata'));
    this.slider.staff = logindata.id;

    this.getCategoryList();

    this.uploadUrl = this.apiService.upl + "/upload/slider";
    console.log(this.uploadUrl);
    this.imgLink = this.apiService.img;

    if(this.slider.id != "create"){
      this.getSliderById();
    }
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

  public uploadFile(data:any){
      console.log("file = ", data.target.files[0]);
      console.log("upload = ", this.uploadUrl);
      let uploadFile = data.target.files[0];

      let myUploadItem = new MyUploadItem(uploadFile, this.uploadUrl);
      myUploadItem.formData = { FormDataKey: 'Form Data Value' };  // (optional) form data can be sent with file

      this.uploaderService.onSuccessUpload = (item, response, status, headers) => {
        //  console.log("onSuccessUpload = ", response);
        let pic_name:any;
        if(typeof response == 'string'){
            pic_name = JSON.parse(response);
        } else {
            pic_name = response;
        }
        //  let pic_name = JSON.parse(response);
         if(pic_name.status === true){
            pic_name.data.sliderpic_path = this.imgLink + pic_name.data.pic_path;
            pic_name.data.flag = "c";
            this.uploadedFiles = pic_name.data;
            // console.log(this.uploadedFiles);
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

  public beforeRemoveImg(data:any){
    $('#productImgModel').modal('show');
  }

  public removeImg(){
    this.uploadedFiles = {
      flag: "",
      pic_name:"",
      pic_path:"",
      sliderpic_path:""
    };
  }

  public checkBeforSave(){
      if(this.uploadedFiles.pic_path == ""){
          this.warningmsg = "Warning!";
          this.dialogmsg = "You doesn't upload product picture. Do you want to save this product?";
          $('#productSaveModel').modal('show');
      } else {
        this.warningmsg = "Save product";
          this.dialogmsg = "Are you sure that you want to save this product?";
          $('#productSaveModel').modal('show');
      }
  }

  public saveSlider(){
    console.log("save slider");
    this.slider.image_data = this.uploadedFiles;
    console.log(this.slider);
    this.apiService
        .post("/api/saveslider", this.slider)
        .subscribe(
            res => this.saveSliderDoneAction(res),
            error => this.saveSliderErrorAction(error)
        )
  }

  public saveSliderDoneAction(data:any){
    console.log("res = ", data);
      if(data.status === true){
          this.reset();
          toastr.success('บันทึกข้อมูลสำเร็จ', 'Success!');
      } else {
          console.log("can't save ", data.error);
          toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Warning!');
      }
  }

  public saveSliderErrorAction(error:any){
    // this.error = error.message;
    console.log("error = ", error);
    toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Warning!');
  }

  public getSliderById(){
    let param = {id: this.slider.id};
    this.apiService
        .post("/api/getsliderbyid", param)
        .subscribe(
            res => this.getSliderDoneAction(res),
            error => this.getSliderErrorAction(error)
        )
  }

  public getSliderDoneAction(res:any){
    let data = res.data;

    this.uploadedFiles.flag = "u";
    this.uploadedFiles.pic_name = data.pic_name;
    this.uploadedFiles.pic_path = data.pic_path;
    this.uploadedFiles.sliderpic_path = this.imgLink + data.pic_path;
    
    this.slider.id = data.id;
    this.slider.name = data.name;
    this.slider.description =  data.description;
    this.slider.link_to =  data.link_to;
    this.slider.link_id =  data.link_id;
    this.slider.image_data = this.uploadedFiles;
  }

  public getSliderErrorAction(error:any){
    console.log(error);
  }

  public reset(){
      this.slider.id = "create";
      this.slider.name = "";
      this.slider.description = "";
      this.slider.link_to = "";
      this.slider.link_id = "";
      this.slider.image_data = {};

    this.uploadedFiles = {
      flag: "",
      pic_name:"",
      pic_path:"",
      sliderpic_path:""
    };
  }

}