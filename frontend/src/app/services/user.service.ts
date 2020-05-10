import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // user testdata
  userList:any[] = [
      {username:"buyer001", password:"buyer001", role:"1"},
      {username:"buyer002", password:"buyer002", role:"1"},
      {username:"seller001", password:"seller001", role:"2"}
  ]

  // getUserId(user:string){
  //   let userinfo:any[] = [];
  //   this.userList.forEach(userIn=>{
  //     if(userIn.username === user){
  //       userinfo.push(userIn)
  //     }
  //   });
  //   return userinfo;
  // }

  checkUser(username:string,password:string,role:string):any{
    for(let i = 0 ; i < this.userList.length ; i++){
        if(username === this.userList[i].username && password === this.userList[i].password && role === this.userList[i].role){
            return { username:this.userList[i].username, password:this.userList[i].password,role:this.userList[i].role};
        }
    }
    return {error:"logon faile"}
  }

  addUser(value:any){
    for(let i = 0 ; i < this.userList.length ; i++){
        if(value.username === this.userList[i].username && value.role === this.userList[i].role){
            return {error:"This user name already exists."};
        }
    }
    this.userList.push(value);
    console.log(value);
    return{successful:"User registration successful."};
  }
}
