import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupUser : any[] = [];
  signupObj : any = {
    userName : '',
    email : '',
    password :'',
  };

  constructor() { }

  ngOnInit(): void {
  }
  areInputsValid(): boolean {
    return this.signupObj.userName.trim() !== '' &&
           this.signupObj.email.trim() !== '' &&
           this.signupObj.password.trim() !== '';
  }
  onSignup(){
    this.signupUser.push(this.signupObj)
    localStorage.setItem('signupUser',JSON.stringify(this.signupUser));
    this.signupObj ={
      userName : '',
      email : '',
      password :''
    }
  }

}
