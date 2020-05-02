import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signinfo:any={
    role:'1',
    username:'',
    password:'',
    confirmpassword:'',
    email:'',
    mobile:'',
    companyname:'',
    GSTIN:'',
    brief:'',
    postal:'',
    website:'',
    contactnumber:'',



}
  // userterms:{checked:false}
  // signForm: FormGroup;
  // role:string = 'buyer';
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // this.signForm = this.fb.group(
    //   {
    //     userName: ['', [Validators.required]],
    //     email: ['', [Validators.required]],
    //     password: ['', [Validators.required,Validators.minLength(8)]],
    //     comfirmpassward: ['', [Validators.required,Validators.minLength(8)]]
    //
    //   });
  }

  onSubmit(value:any) {
    console.log(value);
  }
}
