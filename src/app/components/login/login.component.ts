import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
errorMsg:string;
title:string="login";
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      tel: ["", [Validators.minLength(8), Validators.maxLength(8)]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    })
  }
login(){
  let users=JSON.parse(localStorage.getItem("users"||"[]"));
  let exist=false;
  let user;
  for (let i = 0; i < users.length; i++) {
    if (users[i].tel==this.loginForm.value.tel && users[i].pwd==this.loginForm.value.pwd ) {
      exist=true;
      user=users[i];
      break;
    }  
  }
  if (exist) {
    localStorage.setItem("connectedUser", user.id);
this.router.navigate([""]);

  } else {
   this.errorMsg="Please check Tel/Pwd";
  }
}
}
