import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logininfo={} as any;

  @ViewChild('loginform') loginform: NgForm;
   alerts: Alert[]=[];
  constructor(private router: Router,private userService:UserService) {
  }
  ngOnInit(): void {
    this.logininfo.role = "1";
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
    let result = true
    if (!value.username) {
      this.alerts.push({type : 'danger', message: 'username required!'});
      result = false;
    }

    if (!value.password) {
      this.alerts.push({type : 'danger', message: 'password required!'});
      result =  false;
    }
    return result;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
