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
    let param = {"id":"check_login"}
    this.apiService
    .post("/api/ping",param)
    .subscribe(
        data => this.pingDoneAction(data),//this.productLists = data.data,
        error => this.pingErrorAction(error)
    );
  }

  pingDoneAction(data:any){
    console.log("OK");
  }

  pingErrorAction(error:any){
    console.log(error);
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
