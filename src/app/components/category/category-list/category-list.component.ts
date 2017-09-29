import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { RootscopeService } from "../../../service/rootscope.service";
import { DialogService } from "../../../service/dialog.service";
import { CategoryManageComponent }  from '../category-manage/category-manage.component';
declare var $: any;

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
	@ViewChild(CategoryManageComponent) private categoryManageComponent: CategoryManageComponent;
	public item = 1;
	public error: string = "";
	public query: string = "";
	public categoryLists: any = [];
	// public categoryList: any = [];
	public categorys: any = [];
	public filterText: any = "";
	public pageNo: any = 1;

	public categoryId: any = "create";

	public testPipes = "";
	public dialog;
	public columns = [
		{prop: 'cate_name', name: 'Category Name'},
		{prop: 'cate_description', name: 'category Description'},
		{name: 'Action'}
	]

	constructor(
		public router: Router,
		public apiService: ApiService,
		public $rootScope: RootscopeService,
		public dialogService: DialogService
	) { }

	public ngOnInit() {
		console.log("category_list.component");
		this.dialog = this.dialogService.build(document.getElementById('add-cate'));
		this.getCategoryList();
	}

	public getCategoryList() {
		this.$rootScope.setBlock(true);
		let param = { "id": "ทดสอบ" }
		this.apiService
			.post("/api/category/category_list", param)
			.subscribe(
			data => this.getCategoryDoneAction(data), // OR this.categoryLists = data.data,
			error => this.errorAction(error)
			);
	}

	public getCategoryDoneAction(data: any) {
		console.log("data = ", data);
		this.categoryLists = data.data;
		this.$rootScope.setBlock(false);
	}

	public errorAction(error: any) {
		this.error = error.message;
		console.log("errer = ", this.error);
		this.$rootScope.setBlock(false);
	}

	public focusFilter() {
		this.pageNo = 1;
	}

	public add_new_category(data: any) {
		// console.log("add new cate = ", data);
		// let link: any;
		// if(data == 'create'){
		// 		link = ['/category_list/create_cate', data];
		// }else{
		// 		link = ['/category_list/create_cate', data.id];
		// }
		// this.router.navigate(link);
		this.dialog.showModal();
		if(data == 'create'){
			this.categoryId = data;
			this.categoryManageComponent.reset();
		}else{
			this.categoryId = data.id;
			this.categoryManageComponent.getCategoryByid(data.id);
		}
	}

	public childReturn(result){
		if(result){
			this.getCategoryList();
		}else{
			console.log("can't save");
		}
		console.log(result);
	}

}
