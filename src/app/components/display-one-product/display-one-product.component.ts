import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-one-product',
  templateUrl: './display-one-product.component.html',
  styleUrls: ['./display-one-product.component.css']
})
export class DisplayOneProductComponent implements OnInit {
id:any;
product:any={};
  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService) { }

  ngOnInit() {
  this.id=this.activatedRoute.snapshot.paramMap.get("id");
this.productService.getProductById(this.id).subscribe((data)=>{
  console.log("Here pro", data.product);
  this.product=data.product;
  
})
  }

}
