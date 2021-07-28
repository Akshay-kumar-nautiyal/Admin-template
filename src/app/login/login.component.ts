import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  email=''
  password=''
  data = {"email":"akshay@99gmail.com","password":"Akshay@99"}
  error = ''
  submit(){
    if(this.email===this.data.email&&this.password===this.data.password){
      this.router.navigate(['/admin']);
    }
    else{
      this.error = 'Incorrect user name or password ';
     }

  }
}
