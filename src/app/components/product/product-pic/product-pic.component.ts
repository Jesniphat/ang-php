import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../../../service/api.service";
declare var $ : any;

@Component({
  selector: 'app-product-pic',
  templateUrl: './product-pic.component.html',
  styleUrls: ['./product-pic.component.css'],
  providers: []
})
export class ProductPicComponent implements OnInit {

  private storage: any;
  private imgLink: any;
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
  private images:any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService ,
    private _elRef: ElementRef
  ) { 
    this.storage = localStorage;
  }

  ngOnInit() {
    console.log("product_pic.component");
    this.imgLink = this.apiService.img;
    this.product.id = this.route.snapshot.params['id'];

    this.getProductById(this.product.id);
  }

  private getProductById(id:any){
    let param = {
          product_id: id
      };
      this.apiService
          .post("/api/getproductbyid", param)
          .subscribe(
              res => this.getProductByidDoneAction(res),
              error => this.getProductByidErrorAction(error)
          )
  }

  private getProductByidDoneAction(res){
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
         
          let pic_name = prodResData.pic;
          if(pic_name.length > 0){
              for(var z = 0; z < pic_name.length; z++){
                  prodResData.pic[z].productpic_path = this.imgLink + pic_name[z].productpic_path;
                  this.images.push({source: prodResData.pic[z].productpic_path, alt: prodResData.pic[z].productpic_name, title: prodResData.pic[z].id})
              }
          }
          // console.log("Product Pic = ", prodResData.pic);
      }   
  }

  private getProductByidErrorAction(error){
      console.log(error);
  }

}
