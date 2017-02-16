import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent
  implements OnInit {
    
  pageTitle: string = 'Product Detail';

  ngOnInit(): void { }

  constructor(
    private route: ActivatedRoute
//    private location: Location    
  ){
    console.log(this.route.toString());
  }
}
