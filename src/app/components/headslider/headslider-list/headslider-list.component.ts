import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
declare var $ : any;
declare var toastr : any;

@Component({
  selector: 'app-headslider-list',
  templateUrl: './headslider-list.component.html',
  styleUrls: ['./headslider-list.component.css']
})
export class HeadsliderListComponent implements OnInit {
  public imgLink:string = "";
  public sliderLists = [];
  public delete_id:any = "";

  constructor(
    public router: Router,
    public apiService: ApiService ,
    public _elRef: ElementRef
  ) { }

  ngOnInit() {
    this.imgLink = this.apiService.img;
    this.getAllSlider();
  }

  public getAllSlider(){
    this.apiService
        .post("/api/slider_list",{})
        .subscribe(
            data => this.getAllSliderDoneAction(data),//this.SliderLists = data.data,
            error => this.getAllSliderErrorAction(error)
        );
  }

  getAllSliderDoneAction(data:any){
    // console.log(data);
    this.sliderLists = data.data;
    for(let i = 0; i < this.sliderLists.length; i++){
      this.sliderLists[i].sliderpic_path = this.imgLink + this.sliderLists[i].pic_path
    }
  }

  public getAllSliderErrorAction(error:any){
    console.log(error);
  }

  public add_new_slider(data:any){
    let link: any;
      if(data == 'create'){
          link = ['/head_slider/slider', data];
      }
      else{
          link = ['/head_slider/slider', data.id];
      }
      this.router.navigate(link);
  }

  public delete_slider(item:any){
    this.delete_id = item.id;
    $('#deleteSlider').modal('show');
  }

  public removeSlider(){
    let param = {id: this.delete_id};
    this.apiService.post("/api/delete_slider",param)
        .subscribe(
          (data) => { 
            console.log(data);
            toastr.success('ลบข้อมูลสำเร็จ', 'Success!');
            this.getAllSlider();
          },
          (error) => { console.log(error); }
        );
  }

}
