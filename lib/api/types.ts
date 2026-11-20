import { Category, Paginated, Product, ProductQuery, Seller } from "@/types";

export interface DataSource {
  getCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | null>;
  getProducts(query?: ProductQuery): Promise<Paginated<Product>>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getSellerById(id: string): Promise<Seller | null>;
}