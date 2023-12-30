import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { IndexComponent } from './components/index/index.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'list',
        component: IndexComponent,
        pathMatch: 'full',
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
