import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl,Validators} from '@angular/forms'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  name = '';
  birth='';
  number='';
  gender ='';
  country = '';
  bio ='';
  email1='';
  save(signInForm:NgForm):void{
  {

    let data = [
      {name:this.name},
      {birth:this.birth},
      {number:this.number},
      {gender:this.gender},
      {country:this.country},
      {bio:this.bio},
      {email1:this.email1},
  ];
    console.log(data);
    localStorage.setItem("userData", JSON.stringify(data));
    this.router.navigate(['/account']);
    }

  }
}
