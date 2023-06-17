import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals-of-the-weak',
  templateUrl: './deals-of-the-weak.component.html',
  styleUrls: ['./deals-of-the-weak.component.css']
})
export class DealsOfTheWeakComponent implements OnInit {

  constructor() { }
@Input() dealInput:any;
  ngOnInit() {
  }

}
