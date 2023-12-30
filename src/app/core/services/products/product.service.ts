import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as papa from 'papaparse';
import { Product, ProductCategory } from '../../models/products/DTO.model';
import { routes } from 'src/app/utils/global/routes';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';

/**
 * Servicio para obtener y manipular datos relacionados con productos.
 * @@Injectable
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   * Obtiene las categorías de productos desde un archivo CSV.
   * @returns Observable<ProductCategory[]>: Observable de categorías de productos.
   */
  categories(): Observable<ProductCategory[]> {
    return this.http
      .get(routes.repositories.subcategories, { responseType: 'text' })
      .pipe(
        map((csvData: string) => {
          const result = papa.parse(csvData, {
            delimiter: '\t',
            header: false,
          });

          const categories: ProductCategory[] = result.data.map((line: any) => {
            return {
              id: line[0],
              category: line[2],
              uuid: line[3],
              date: line[4],
            };
          });

          return categories;
        })
      );
  }

  /**
   * Obtiene los productos desde un archivo CSV.
   * @returns Observable<Product[]>: Observable de productos.
   */
  products(): Observable<Product[]> {
    return this.http
      .get(routes.repositories.products, { responseType: 'text' })
      .pipe(
        map((csvData: string) => {
          const result = papa.parse(csvData, {
            delimiter: '\t',
            header: false,
          });

          const products: Product[] = result.data.map((line: any) => {
            return {
              id: Number(line[0]),
              product: line[1],
              folio: line[2],
              color: line[5],
              cost: Number(line[8]),
              price: Number(line[9]),
              size: line[10],
              category_id: Number(line[18]),
            };
          });

          return products;
        })
      );
  }

  /**
   * Obtiene los productos con sus respectivas categorías.
   * @returns Observable<Product[]>: Observable de productos con categorías.
   */
  productsWithCategories(): Observable<Product[]> {
    return forkJoin({
      products: this.products(),
      categories: this.categories(),
    }).pipe(
      switchMap(({ products, categories }) => {
        const p: Product[] = products.map((e) => {
          const cat: ProductCategory | undefined = categories.find(
            (el) => el.id == e.category_id
          );

          return {
            ...e,
            category_name: cat?.category,
            category: cat,
          };
        });

        return of(p);
      })
    );
  }
}
