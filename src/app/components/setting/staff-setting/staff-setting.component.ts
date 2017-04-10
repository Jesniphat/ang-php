import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { RootscopeService } from "../../../service/rootscope.service";
declare var $ : any;

@Component({
  selector: 'app-staff-setting',
  templateUrl: './staff-setting.component.html',
  styleUrls: ['./staff-setting.component.css']
})
export class StaffSettingComponent implements OnInit {
  private storage: any;
  private staff:any = {
      staffId: "",
      password: "",
      staffName: "",
      staffUserName: ""
  };
  private staffData: any;
  private error: any;
  private msgs:any;

  constructor(
    private apiService:ApiService,
    private $rootScope:RootscopeService,
    private _elRef: ElementRef
  ) { }

  ngOnInit() {
    console.log("staff_setting.component");
    this.storage = localStorage;
    this.getStaffFromStorage();
  }

  private getStaffFromStorage(){
      if(this.storage.getItem('logindata')){
          let logindata = JSON.parse(this.storage.getItem('logindata'));
          this.staffData = logindata;
        //   console.log("staff = ", this.staffData);

          this.staff.staffName = this.staffData.display_name;
          this.staff.staffUserName = this.staffData.login_name;
          this.staff.staffId = this.staffData.id;
          this.staff.password = this.staffData.password
      }
  }

  private updateStaff(){
      let param = {
        name: this.staff.staffName,
        user: this.staff.staffUserName,
        id: this.staff.staffId,
        password: this.staff.password
      }
      this.apiService
          .post("/api/updatestaff", param)
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
          this.msgs = [];
          this.msgs.push({severity:'success', summary:'Success!', detail:'บันทึกข้อมูลสำเร็จ'});
      } else {
          console.log("can't change");
      }
  }

  updateStaffErrorAction(error:any) {
      this.error = error.message;
      console.log("error = ", this.error);
      setTimeout(() => this.error = null, 4000);
  }

}
