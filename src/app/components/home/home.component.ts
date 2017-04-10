import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // private uploadUrl:string = "/upload/tesy";

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    console.log("home.component");
    // this.uploadUrl = this.apiService.upl + this.uploadUrl;
  }

  
  // onUploaded(event:any){
  //     console.log("onUploaded = ", event);
  //     console.log("get xhr = ", event.xhr.response);
  // }

  // onUploadedError(event:any){
  //     console.log("upload error = ", event);
  //     // this.toastr.warning('บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง', 'Oops!');
  // }

}
