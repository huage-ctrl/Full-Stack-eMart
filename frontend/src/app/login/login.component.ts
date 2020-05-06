import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logininfo={} as any;
  alerts: Alert[];
  @ViewChild('loginform') loginform: NgForm;
  constructor(private router: Router,private userService:UserService,) {
  }
  ngOnInit(): void {
    this.logininfo.role='1'
   }

  onSubmit(value: any) {
    if (this.validInput(value)) {
      let user:any;
      user = this.userService.checkUser(value.username,value.password,value.role);
      if(!user.error){
        localStorage.setItem("username", user.username);
        localStorage.setItem("password", user.password);
        localStorage.setItem("role", user.role);
        if(user.role === "1"){
          this.router.navigate(["/display-item-summary"])
        } else{
          this.router.navigate(["/seller-selling-list"]);
        }
      }else{
        this.alerts.push({type : 'danger', message:user.error});
      }
    }
  }
  validInput(value: any): boolean {
    this.reset();
    let result = true
    // if (!value.username) {
    //   this.alerts.push({type : 'danger', message: 'username ID required!'});
    //   result = false;
    // }
    //
    // if (!value.password) {
    //   this.alerts.push({type : 'danger', message: 'password required!'});
    //   result =  false;
    // }
    //
    // if (value.password.length < 8) {
    //   this.alerts.push({type : 'danger', message: 'password length must be greater than 6!'});
    //   result =  false;
    // }

    return result;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
