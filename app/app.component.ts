import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div>
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
        </div>`
})
export class AppComponent {pageTitle: String = 'Angular2: Getting Started'; }
