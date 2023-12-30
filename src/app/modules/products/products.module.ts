import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';


@NgModule({
  declarations: [
    ProductsComponent,
    IndexComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
