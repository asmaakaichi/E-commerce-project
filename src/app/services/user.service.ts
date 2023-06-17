import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL:string="http://localhost:3001/users";
  constructor(private httpClient:HttpClient) { }
  signup(user){
    return this.httpClient.post(this.userURL, user)
  }
  search(obj){
return this.httpClient.post<{searchArray:any}>(this.userURL+"/search", obj);
  }
}
