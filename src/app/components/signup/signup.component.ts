import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
errorMsg:string; 
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      
      tel: ["", [Validators.minLength(8), Validators.maxLength(8)]],
      address:[""]
    })
    
  }
  signup(){
    console.log("Here user", this.signupForm.value);
    let users= JSON.parse(localStorage.getItem("users")||"[]");
  let phoneExist= this.chekTel(this.signupForm.value.tel, users);
  if (phoneExist) {
    this.errorMsg="Tel Exists"
  } else {
    this.signupForm.value.id=this.generateId(users);
    users.push(this.signupForm.value);
    localStorage.setItem("users", JSON.stringify(users));
    this.router.navigate(["login"])
  }

  }
//Function generatedId
 generateId(T) {
    let max;
    if (T.length == 0) {
      max = 0;
    } else {
      max = T[0].id;
      for (let i = 0; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id;
        }
      }
    }
    return max + 1;
  }

 chekTel(tel, usersTab) {
let exist=false
for (let i = 0; i < usersTab.length; i++) {
if (usersTab[i].tel==tel) {
  exist=true;
  break;
}  
}
return exist;
 }
}
