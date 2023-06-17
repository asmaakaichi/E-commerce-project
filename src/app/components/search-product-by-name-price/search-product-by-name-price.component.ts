import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-product-by-name-price',
  templateUrl: './search-product-by-name-price.component.html',
  styleUrls: ['./search-product-by-name-price.component.css']
})
export class SearchProductByNamePriceComponent implements OnInit {
searchForm:FormGroup;
findedProduct:any;
  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.searchForm=this.formBuilder.group({
      name:[""],
      price:[""]
    })
  }
  search(){
  this.userService.search(this.searchForm.value).subscribe((data)=>{
  this.findedProduct=data.searchArray;
    })
  }
}
