import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  signupUser: any[] = [];
  loginObj : any = {
    email : '',
    password: '',
  }
  constructor() {
    const storedUsers = localStorage.getItem('signupUser');
    this.signupUser = storedUsers ? JSON.parse(storedUsers) : [];
   }

  ngOnInit(): void { }
  onLogin(){
   const user = this.signupUser.find(
    u  => u.email == this.loginObj.email && u.password == this.loginObj.password
   );
   if(user){
    alert('Login Successfull');
   }else{
    alert('Login failed');
   }
  }

}
