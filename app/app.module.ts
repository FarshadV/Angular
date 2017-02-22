import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';

import { StarComponent } from './shared/star.component';

import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';


const appRoutes: Routes = [
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: 'welcome', component: WelcomeComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [BrowserModule, 
            FormsModule, 
            HttpModule,
            RouterModule.forRoot(appRoutes) ],

  declarations: [AppComponent, 
                 WelcomeComponent,
                 ProductListComponent, 
                 ProductFilterPipe,
                 StarComponent,
                 ProductDetailComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
