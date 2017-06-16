import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ApiService } from "../../../service/api.service";
import { RootscopeService } from "../../../service/rootscope.service";
declare var $ : any;
declare var toastr : any;

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})
export class StaffCreateComponent implements OnInit {
  public msgs:any;
  public error:any;
  public staff:any = {
    staffName:"",
    staffUserName:"",
    staffLastName:"",
    staffPassword:""
  }
  constructor(
    public apiService:ApiService,
    public $rootScope:RootscopeService,
    public _elRef: ElementRef
  ) { }

  ngOnInit() {
    console.log("staff_create.component");
  }

  public saveStaff(){
    // console.log(this.staff);
    this.apiService
        .post("/api/createstaff", this.staff)
        .subscribe(
          res => this.saveStaffDoneAction(res),
          error => this.saveStaffErrorAction(error)
        )
  }

  public saveStaffDoneAction(res:any){
    console.log(res);
    if(res.status){
      // this.msgs = [];
      // this.msgs.push({severity:'success', summary:'Success!', detail:'บันทึกข้อมูลสำเร็จ'});
      toastr.success('บันทึกข้อมูลสำเร็จ', 'Success!');

      this.reset();
    }else{
      console.log(res.error);
      // this.msgs = [];
      // this.msgs.push({severity:'warn', summary:'Oops!', detail:'บันทึกข้อมูลไม่สำเร็จ'});
      toastr.warning('บันทึกไม่สำเร็จกรุณาลองใหม่อีกครั้ง', 'Warning!');
    }
  }

  public saveStaffErrorAction(error:any){
    this.error = error.message;
    console.log("error = ", this.error);
    setTimeout(() => this.error = null, 4000);
  }

  public reset(){
    this.msgs = [];
    this.error = "";
    this.staff = {
      staffName:"",
      staffUserName:"",
      staffLastName:"",
      staffPassword:""
    }
  }

}
