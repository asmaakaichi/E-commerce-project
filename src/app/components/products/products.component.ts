import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:any=[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
  this.productService.getAllProducts().subscribe((data)=>{
this.products=data.productArray;
    })
  }
  priceColor(price){
  if (price>=0 && price<=50 ) {
      return "red"
    }
    else if(price>=51 && price<=150)
    {
   return "green"
    }
    else{
      return "orange"
    }
  }


}
