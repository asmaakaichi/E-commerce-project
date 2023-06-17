import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-all-products',
  templateUrl: './display-all-products.component.html',
  styleUrls: ['./display-all-products.component.css']
})
export class DisplayAllProductsComponent implements OnInit {
productsTab:any=[];
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit() {
this.productService.getAllProducts().subscribe((data)=>{
  this.productsTab=data.productArray;
})
  }
  goToDisplay(id){
this.router.navigate([`displayOneProduct/${id}`]);
  }

}
