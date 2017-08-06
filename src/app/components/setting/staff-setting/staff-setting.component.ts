import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { RootscopeService } from "../../../service/rootscope.service";
declare var $ : any;
declare var toastr : any;

@Component({
  selector: 'app-staff-setting',
  templateUrl: './staff-setting.component.html',
  styleUrls: ['./staff-setting.component.css']
})
export class StaffSettingComponent implements OnInit {
  public storage: any;
  public staff:any = {
      staffId: "",
      password: "",
      staffName: "",
      staffLastName: "",
      staffUserName: ""
  };
  public staffData: any;
  public error: any;
  public msgs:any;

  constructor(
    public apiService:ApiService,
    public $rootScope:RootscopeService,
    public _elRef: ElementRef
  ) { }

  ngOnInit() {
    console.log("staff_setting.component");
    this.storage = localStorage;
    this.getStaffFromStorage();
  }

  public getStaffFromStorage(){
      if(this.storage.getItem('logindata')){
          let logindata = JSON.parse(this.storage.getItem('logindata'));
          this.staffData = logindata;
        //   console.log("staff = ", this.staffData);

          this.staff.staffName = this.staffData.display_name;
          this.staff.staffLastName = this.staffData.last_name;
          this.staff.staffUserName = this.staffData.login_name;
          this.staff.staffId = this.staffData.id;
          this.staff.password = this.staffData.password
      }
  }

  public updateStaff(){
      let param = {
        name: this.staff.staffName,
        lastName: this.staff.staffLastName,
        user: this.staff.staffUserName,
        id: this.staff.staffId,
        password: this.staff.password
      }
      this.apiService
          .post("/api/staff/updatestaff", param)
          .subscribe(
              res => this.updateStaffDoneAction(res),
              error => this.updateStaffErrorAction(error)
          )
  }

  updateStaffDoneAction(res:any){
      if(res.status === true){
          let loginData = JSON.stringify(res.data);
          this.storage.setItem('logindata',loginData);
          // console.log("logindata => ", loginData);
          this.$rootScope.loginShow({hiddenLogin:false, class10:true});
          toastr.success('บันทึกข้อมูลสำเร็จ', 'Success!');
      } else {
          console.log("can't change");
      }
  }

  updateStaffErrorAction(error:any) {
      this.error = error.message;
      console.log("error = ", this.error);
      toastr.warning('บันทึกไม่สำเร็จกรุณาลองใหม่อีกครั้ง', 'Warning!');
      setTimeout(() => this.error = null, 4000);
  }

}
