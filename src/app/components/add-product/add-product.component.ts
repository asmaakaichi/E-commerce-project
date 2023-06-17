import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
productForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private productService:ProductService, private router:Router) { }

  ngOnInit() {
    this.productForm=this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      price: ["", [Validators.required]],
      stock: ["", [Validators.required]],
      category: ["", [Validators.required]],
    })
  }
  addProduct(){
console.log("Here product obj", this.productForm.value);
this.productForm.value.userId=localStorage.getItem("connectedUser");
this.productService.addProduct(this.productForm.value).subscribe((data)=>{
  console.log("Here msg", data.message);
  this.router.navigate(["userDashboard"]);

  
})

  }

}
