export interface ProductCategory {
  id: any;
  category: any;
  uuid: any;
  date: any;
}

export interface Product {
  id: number;
  product: string;
  folio?: string;
  price?: any;
  cost?: any;
  created_at?: string | Date;
  category_id?: number;
  category?: ProductCategory;
  category_name?: string;
  stock?: number;
  color?: string;
  size?: string;
}
