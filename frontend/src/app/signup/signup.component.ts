import { Component, OnInit ,ViewChild, AfterViewInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit ,AfterViewInit{
  signupinfo={} as any;

  ngAfterViewInit(): void {
    this.signupForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  @ViewChild('signupForm') signupForm: NgForm;

  constructor(private router: Router,private userService:UserService) {
  }

  ngOnInit(): void {
    this.signupinfo.role='1'
  }
  alerts: Alert[];
  submitForm(obj: any) {
      console.log(JSON.stringify(obj));
  }
  onValueChanged(data) {

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.signupForm.form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '';
        }
      }

    }
  }
  formErrors = {
    'email': '',
    'userName': '',
    'password':'',
    'confirmpassword':'',
    'role':''
  };

  //Error corresponding prompt
  validationMessages = {
    'email': {
      'required': 'Email must be filled in.',
      'pattern': 'The mailbox must be filled in the wrong format',
    },
    'userName': {
      'required': 'User name required.',
      'minlength': 'The username is too short',
    },
    'password':{
      'required': 'Please input your Password!',
      'minlength': 'The password is too short',
    },
    'confirmpassword':{
      'required': 'Please repeat the password',
      'minlength': 'The password is too short',
      'passwordNEQ':'Confirm password must be password consistent.',
      'passwordInValid':''
    },
    'role':{
      'required':'Role required'
    }

  };
}
