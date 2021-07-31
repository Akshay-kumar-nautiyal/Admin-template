import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  user='';
  email_user='';
  upassword='';
  cpassword='';
  submit(AccountForm:NgForm)
  {
    if(AccountForm.value.password===AccountForm.value.ConfirmPassword)
    {
      alert(" Success! ");
      console.log(AccountForm.value.password);
      console.log(AccountForm.value.ConfirmPassword);

      this.user="Success! the password match";
      this.email_user=AccountForm.value.email;
      this.upassword=AccountForm.value.password;
      this.router.navigate(['/admin']);
    }
    else{


      alert("Ooop's you entered the wrong Credentials, try it again ");
      this.user="Sorry ! the password not match"
    }
  }
}
