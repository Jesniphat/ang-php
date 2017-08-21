import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { RootscopeService } from "../../../service/rootscope.service";
import { DialogService } from "../../../service/dialog.service";
declare var $: any;
declare var toastr: any;
// declare var dialogPolyfill: any;

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.css'],
  providers: []
})
export class CategoryManageComponent implements OnInit {
  @Input() categoryId:any;
  @Output() calculate: EventEmitter<number> = new EventEmitter();
  error: string = "";
  cate = {
    cateId: "",
    cateName: "",
    cateDescription: "",
    selectedStatus: "Y"
  }
  statusLists = [{ label: 'Active', value: 'Y' },
  { label: 'Unactive', value: 'N' }];

  msgs: any;

  public dialog;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public apiService: ApiService,
    public $rootscope: RootscopeService,
    public el: ElementRef,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    console.log("category_managet.component");
    if(this.route.snapshot.params['id']){
      this.cate.cateId = this.route.snapshot.params['id'];
    } else {
      this.cate.cateId = this.categoryId;
    }
    // console.log(this.cate.cateId);
    if (this.cate.cateId != "create") {
      this.getCategoryByid(this.cate.cateId);
    }
    this.dialog = this.dialogService.build(document.querySelector('dialog'));
  }

  getCategoryByid(id: any) {
    this.$rootscope.setBlock(true);
    let param = {
      cate_id: id
    };
    this.apiService
      .post("/api/category/getcategorybyid", param)
      .subscribe(
      res => this.getCategoryByidDoneAction(res),
      error => this.getCategoryByidErrorAction(error)
      )
  }

  getCategoryByidDoneAction(res: any) {
    if (res.status === true) {
      // console.log(res);
      let cateResData = res.data;
      this.cate.cateId = cateResData.id;
      this.cate.cateName = cateResData.cate_name;
      this.cate.cateDescription = cateResData.cate_description;
      this.cate.selectedStatus = cateResData.status;
    } else {
      console.log("No data");
    }
    this.$rootscope.setBlock(false);
  }

  getCategoryByidErrorAction(error: any) {
    this.error = error.message;
    console.log("error = ", this.error);
    this.$rootscope.setBlock(false);
  }

  changeStatus(newValue: any) {
    console.log(newValue);
    this.cate.selectedStatus = newValue;
  }

  confirmSaveCate() {
    this.dialog.showModal();
  }

  saveCategory() {
    this.$rootscope.setBlock(true);
    this.apiService
      .post("/api/category/savecategory", this.cate)
      .subscribe(
      res => this.saveCategoryDoneAction(res),
      error => this.saveCategoryErrorAction(error)
      )
  }

  saveCategoryDoneAction(res: any) {
    if (res.status === true) {
      toastr.success('บันทึกข้อมูลสำเร็จ', 'Success!');
      this.dialog.close();
      this.reset();
    } else {
      console.log("can't save");
      toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Warning!');
    }
    this.$rootscope.setBlock(false);
  }

  saveCategoryErrorAction(error: any) {
    this.error = error.message;
    console.log("error = ", this.error);
    // this.toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Oops!');
    toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Warning!');
    setTimeout(() => this.error = null, 4000);
    this.$rootscope.setBlock(false);
  }

  reset() {
    this.cate = {
      cateId: "create",
      cateName: "",
      cateDescription: "",
      selectedStatus: "Y"
    }
  }

}
