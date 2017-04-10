import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ApiService } from "../../../service/api.service";
import { RootscopeService } from "../../../service/rootscope.service";
declare var $ : any;

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})
export class StaffCreateComponent implements OnInit {
  private msgs:any;
  private error:any;
  private staff:any = {
    staffName:"",
    staffUserName:"",
    staffLastName:"",
    staffPassword:""
  }
  constructor(
    private apiService:ApiService,
    private $rootScope:RootscopeService,
    private _elRef: ElementRef
  ) { }

  ngOnInit() {
    console.log("staff_create.component");
  }

  private saveStaff(){
    // console.log(this.staff);
    this.apiService
        .post("/api/createstaff", this.staff)
        .subscribe(
          res => this.saveStaffDoneAction(res),
          error => this.saveStaffErrorAction(error)
        )
  }

  private saveStaffDoneAction(res:any){
    console.log(res);
    if(res.status){
      this.msgs = [];
      this.msgs.push({severity:'success', summary:'Success!', detail:'บันทึกข้อมูลสำเร็จ'});

      this.reset();
    }else{
      console.log(res.error);
      this.msgs = [];
      this.msgs.push({severity:'warn', summary:'Oops!', detail:'บันทึกข้อมูลไม่สำเร็จ'});
    }
  }

  private saveStaffErrorAction(error:any){
    this.error = error.message;
    console.log("error = ", this.error);
    setTimeout(() => this.error = null, 4000);
  }

  private reset(){
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
