import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../../service/api.service";
import { RootscopeService } from "../../../../service/rootscope.service";
import { DialogService } from "../../../../service/dialog.service";
import { CategoryManageComponent }  from '../category-manage/category-manage.component';
declare let $: any;

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
	/**
	 * Set view child from product manage
	 */
	@ViewChild(CategoryManageComponent) private categoryManageComponent: CategoryManageComponent;

	/**
	 * Create var
	 */
	public item = 1;
	public error: string = "";
	public query: string = "";
	public categoryLists: any = [];
	public categorys: any = [];
	public filterText: any = "";
	public pageNo: any = 1;

	public categoryId: any = "create";

	public testPipes = "";
	public dialog;

	/**
	 * Class constructor
	 * 
	 * @param router 
	 * @param apiService 
	 * @param  
	 * @param dialogService 
	 * 
	 * @access public
	 * 
	 * @return void
	 */
	constructor(
		public router: Router,
		public apiService: ApiService,
		public $rootScope: RootscopeService,
		public dialogService: DialogService
	) { }

	/**
	 * Start function
	 * @access public
	 * @return void
	 */
	public ngOnInit() {
		console.log("category_list.component");
		this.dialog = this.dialogService.build(document.getElementById('add-cate'));
		this.getCategoryList();
	}

	/**
	 * Get Category list
	 * 
	 * @access public
	 * @return void
	 */
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


	/**
	 * When can get category list
	 * 
	 * @param data 
	 * @access public
	 * @return void
	 */
	public getCategoryDoneAction(data: any) {
		console.log("data = ", data);
		this.categoryLists = data.data;
		this.$rootScope.setBlock(false);
	}


	/**
	 * When can't get caategory list
	 * 
	 * @access public
	 * @param error 
	 * @return void
	 */
	public errorAction(error: any) {
		this.error = error.message;
		console.log("errer = ", this.error);
		this.$rootScope.setBlock(false);
	}


	/**
	 * Back to page 1 of data table
	 * 
	 * @access public
	 * @return void
	 */
	public focusFilter() {
		this.pageNo = 1;
		$('.datatable-icon-prev').click();
	}


	/**
	 * Add category function
	 * 
	 * @access public
	 * @param data 
	 * @return void
	 */
	public add_new_category(data: any) {
		console.log("add new cate = ", data);
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
			this.categoryId = data;
			this.categoryManageComponent.getCategoryByid(data);
		}
	}


	/**
	 * Return param from chide view
	 * 
	 * @access public
	 * @param result 
	 * @return void
	 */
	public childReturn(result){
		if(result){
			this.getCategoryList();
		}else{
			console.log("can't save");
		}
		console.log(result);
	}

}
