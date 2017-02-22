import { Component } from '@angular/core';
import 'rxjs/Rx.js';    //Load all features

import { NgModule } from '@angular/core';
import { ProductService } from './products/product.service';


@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['welcome']">Home</a></li>
                    <li><a [routerLink]="['product-list']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    providers: [ProductService]
})
export class AppComponent { pageTitle: String = 'Angular2: Getting Started'; }
