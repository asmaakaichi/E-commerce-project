import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productURL:string="http://localhost:3001/products";
  constructor(private httpClient:HttpClient) { }
  getAllProducts(){
    return this.httpClient.get<{productArray:any}>(this.productURL);
  }
  addProduct(product){
    return this.httpClient.post<{message:boolean}>(this.productURL, product)
  }
  getProductById(id){
    return this.httpClient.get<{product:any}>(`${this.productURL}/${id}`);
  }
  
}
