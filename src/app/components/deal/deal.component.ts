import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {
  products=[
    {img:"assets/img/product/p9.jpg", name:"T-shirst", price:20},
    {img:"assets/img/product/p10.jpg", name:"Samsung", price:200},
    {img:"assets/img/product/p11.jpg", name:"Dell", price:1000},
    

]
  constructor() { }

  ngOnInit() {
  }

}
