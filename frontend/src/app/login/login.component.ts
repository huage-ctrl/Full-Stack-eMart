import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginifo:any={
    role:'1',
    id:'',
    username:'',
    password:''
}
  constructor() {
  }
  ngOnInit(): void {
    // this.loginform = this.fb.group(
    //   {
    //     userName: ['', [Validators.required]],
    //     password: ['', [Validators.required,Validators.minLength(8)]],
    //     remember:true
    //   });
   }
  // get userName():AbstractControl{
  //   return this.loginform.get('userName');
  // }
  //  get password():AbstractControl{
  //    return this.loginform.get('password');
  //  }

  onSubmit(value: any) {
    console.log(value)
  }
}
