import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
declare var $ : any;

@Component({
  selector: 'app-headslider-list',
  templateUrl: './headslider-list.component.html',
  styleUrls: ['./headslider-list.component.css']
})
export class HeadsliderListComponent implements OnInit {

  constructor(
    public router: Router,
    public apiService: ApiService ,
    public _elRef: ElementRef
  ) { }

  ngOnInit() {

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

}
