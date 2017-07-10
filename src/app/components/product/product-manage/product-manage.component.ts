import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { Uploader } from 'angular2-http-file-upload';
import { MyUploadItem } from "../../../upload-item";
declare var $: any;
declare var toastr: any;

@Component({
    selector: 'app-product-manage',
    templateUrl: './product-manage.component.html',
    styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent implements OnInit {
    public error: string = "";
    public storage: any;
    public product = {
        id: "",
        name: "",
        desc: "",
        price: 0,
        qty: 0,
        pic_id: <any>[],
        pic_ids: "",
        staffid: "0",
        category: "",
        productImage: <any>null,
        coverId: "0",
        recommend: false
    }
    public categoryList = [];
    public selectedStatus: any = "Y";
    public productPicName: any[] = [];
    public uploadedFiles: any[] = [];
    public uploadUrl: string = "/upload/product";
    public imgLink: string = "";
    public warningmsg: string = "";
    public dialogmsg: string = "";
    public imgIndex: any = 0;
    //   public birthday = new Date(1988, 3, 15);

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public apiService: ApiService,
        public uploaderService: Uploader,
        public _elRef: ElementRef
    ) {
        this.storage = localStorage;
    }

    ngOnInit() {
        console.log("product_managet.component");

        this.uploadUrl = this.apiService.upl + this.uploadUrl;
        this.imgLink = this.apiService.img;

        if (this.storage.getItem('logindata')) {
            let logindata = JSON.parse(this.storage.getItem('logindata'));
            this.product.staffid = logindata.id;
        }

        this.product.id = this.route.snapshot.params['id'];
        // console.log("Product Id = ",this.product.id);
        this.getCategoryList();
        if (this.product.id != "create") {
            this.getProductByid(this.product.id);
        }
    }

    getCategoryList(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let param = {}
            this.apiService
                .post("/api/category_list", param)
                .subscribe(
                (data) => {
                    if (data.status == true) {
                        for (let i = 0; i < data.data.length; i++) {
                            this.categoryList.push({ label: data.data[i].cate_name, value: data.data[i].id });
                        }
                        this.product.category = data.data[0].id;
                    } else {
                        console.log("error = ", data.error);
                    }
                }, // OR this.categoryLists = data.data,
                (error) => {
                    console.log("error = ", error);
                }
                );
        });
    }

    getProductByid(productId: any) {
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

    getProductByidDoneAction(res) {
        // console.log(res);
        if (res.status === true) {
            // console.log(res);
            let prodResData = res.data;
            this.product.id = prodResData.id;
            this.product.name = prodResData.product_name;
            this.product.desc = prodResData.product_description;
            this.product.price = prodResData.product_price;
            this.product.qty = prodResData.product_qty;
            this.product.category = prodResData.category_id;
            //   console.log(prodResData.pic);

            if(prodResData.recommend == 'Y'){
                this.product.recommend = true;
            }else{
                this.product.recommend = false;
            }

            let pic_name = prodResData.pic;

            if (pic_name.length > 0) {
                for (var z = 0; z < pic_name.length; z++) {
                    pic_name[z].productpic_path = this.imgLink + pic_name[z].productpic_path;
                    pic_name[z].flag = "u";
                }
            }
            this.uploadedFiles = pic_name;
        }
    }

    getProductByidErrorAction(error) {
        console.log(error);
    }

    changeCategory(newValue: any) {
        console.log(newValue);
        this.product.category = newValue;
    }

    uploadFile(data: any) {
        console.log("file = ", data.target.files[0]);
        let uploadFile = data.target.files[0];

        let myUploadItem = new MyUploadItem(uploadFile, this.uploadUrl);
        myUploadItem.formData = { FormDataKey: 'Form Data Value' };  // (optional) form data can be sent with file

        this.uploaderService.onSuccessUpload = (item, response, status, headers) => {
            // console.log("onSuccessUpload = ", response);
            let pic_name:any;
            if(typeof response == 'string'){
                pic_name = JSON.parse(response);
            } else {
                pic_name = response;
            }
            
            // let pic_name = JSON.parse(response);
            if (pic_name.status === true) {
                pic_name.data.productpic_path = this.imgLink + pic_name.data.productpic_path;
                pic_name.data.flag = "c";
                if(this.uploadedFiles.length == 0){
                    pic_name.data.cover = "Y";
                    this.product.coverId = pic_name.data.id;
                }
                this.uploadedFiles.push(pic_name.data);
                console.log("upload seccess");
            } else {
                console.log("error = ", pic_name.error);
                toastr.warning('บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง', 'Warning!');
            }
            this.product.productImage = "";
        };
        this.uploaderService.onErrorUpload = (item, response, status, headers) => {
            console.log("onErrorUpload = ", response);
        };
        this.uploaderService.upload(myUploadItem);
    }

    checkBeforSave() {
        if ((this.uploadedFiles).length == 0) {
            this.warningmsg = "Warning!";
            this.dialogmsg = "You doesn't upload product picture. Do you want to save this product?";
            $('#productSaveModel').modal('show');
        } else {
            // this.warningmsg = "Save product";
            // this.dialogmsg = "Are you sure that you want to save this product?";
            // $('#productSaveModel').modal('show');
            this.saveProduct();
        }
    }

    saveProduct() {
        // console.log("save product = ");
        if ((this.uploadedFiles).length > 0) {
            for (var i = 0; i < this.uploadedFiles.length; i++) {
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

    saveProductDoneAction(res: any) {
        console.log("res = ", res);
        if (res.status === true) {
            this.reset();
            toastr.success('บันทึกข้อมูลสำเร็จ', 'Success!');
        } else {
            console.log("can't save ", res.error);
            toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Warning!');
        }
    }

    saveProductErrorAction(error: any) {
        this.error = error.message;
        console.log("error = ", this.error);
        toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Warning!');
    }

    onSubmit(value: any) {
        console.log("value submit = ", value);
    }

    beforeRemoveImg(id: any, index: any) {
        console.log('id = ', id, '  index = ', index);
        this.imgIndex = index;
        $('#productImgModel').modal('show');
    }

    removeImg() {
        console.log("index = ", this.imgIndex);
        this.uploadedFiles.splice(this.imgIndex, 1);
    }

    setCoverPic(id:any){
        // console.log(id);
        this.product.coverId = id;
    }

    checkRecommend(){
        console.log(this.product.recommend);
    }

    reset() {
        this.product = {
            id: "create",
            name: "",
            desc: "",
            price: 0,
            qty: 0,
            pic_id: [],
            staffid: "0",
            pic_ids: "",
            category: "1",
            productImage: <any>null,
            coverId: "0",
            recommend:false
        }
        this.uploadedFiles = [];
    }

}
