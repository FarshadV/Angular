import { Component } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/Rx.js';
// import { Observable } from 'rxjs/Observable';
import { NgModule } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `
        <div>
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
        </div>`,
    providers: [ProductService, Http]
})
export class AppComponent { pageTitle: String = 'Angular2: Getting Started'; }
