import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent
  implements OnInit {

  pageTitle: string = 'Product Detail';

  ngOnInit(): void {
    //    console.log(id);
  }

  constructor(private _router: Router, private _route: ActivatedRoute) {
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += ` : ${id}`;
  };

  onBack(): void {
    this._router.navigate(['product-list']);
  }

}
