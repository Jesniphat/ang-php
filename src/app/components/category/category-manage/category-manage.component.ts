import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../../../service/api.service";
declare var $ : any;
declare var toastr : any;

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.css'],
  providers: []
})
export class CategoryManageComponent implements OnInit {
error:string = "";
cate = {
      cateId: "",
      cateName: "",
      cateDescription: "",
      selectedStatus: "Y"
  }
statusLists = [{label:'Active', value:'Y'},
                          {label:'Unactive', value:'N'}];

msgs:any;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public apiService: ApiService ,
    public el: ElementRef
  ) { }

  ngOnInit() {
    console.log("category_managet.component");
    
    this.cate.cateId = this.route.snapshot.params['id'];
    //   console.log(this.cateId);
    if(this.cate.cateId != "create"){
        this.getCategoryByid(this.cate.cateId);
    }
  }

getCategoryByid(id:any){
      let param = {
          cate_id: id
      };
      this.apiService
          .post("/api/getcategorybyid", param)
          .subscribe(
              res => this.getCategoryByidDoneAction(res),
              error => this.getCategoryByidErrorAction(error)
          )
  }

getCategoryByidDoneAction(res:any){
      if(res.status === true){
          // console.log(res);
          let cateResData = res.data;
          this.cate.cateId = cateResData.id;
          this.cate.cateName = cateResData.cate_name;
          this.cate.cateDescription = cateResData.cate_description;
          this.cate.selectedStatus = cateResData.status;
      } else {
          console.log("No data");
      }
  }

getCategoryByidErrorAction(error:any){
      this.error = error.message;
      console.log("error = ", this.error);
  }

changeStatus(newValue:any) {
      console.log(newValue);
      this.cate.selectedStatus = newValue;
  }

confirmSaveCate(){
    $('#cateModal').modal('show');
  }

saveCategory(){
      this.apiService
          .post("/api/savecategory", this.cate)
          .subscribe(
              res => this.saveCategoryDoneAction(res),
              error => this.saveCategoryErrorAction(error)
          )
  }

saveCategoryDoneAction(res:any){
      if(res.status === true){
          toastr.success('บันทึกข้อมูลสำเร็จ', 'Success!');
          this.reset();
      } else {
          console.log("can't save");
          toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Warning!');
      }
  }

saveCategoryErrorAction(error:any){
      this.error = error.message;
      console.log("error = ", this.error);
      // this.toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Oops!');
      toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Warning!');
      setTimeout(() => this.error = null, 4000);
  }

reset(){
      this.cate = {
          cateId: "create",
          cateName: "",
          cateDescription: "",
          selectedStatus: "Y"
      }
  }

}
