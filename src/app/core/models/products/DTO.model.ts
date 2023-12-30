/**
 * Interfaz para representar la categoría de un producto.
 * @interface ProductCategory
 */
export interface ProductCategory {
  id: any;
  category: any;
  uuid: any;
  date: any;
}

/**
 * Interfaz para representar un producto.
 * @interface Product
 */
export interface Product {
  id: number;
  product: string;
  folio?: string;
  price?: number;
  cost?: number;
  created_at?: string | Date;
  category_id?: number;
  category?: ProductCategory;
  category_name?: string;
  stock?: number;
  color?: string;
  size?: string;
}
