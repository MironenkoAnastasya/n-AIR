import { Category, Paginated, Product, Seller } from "@/types";
import { DataSource } from "./types";

const API_URL = process.env.API_URL;

class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

// GET-запит. revalidate — скільки секунд Next.js кешує відповідь
async function apiGet<T>(path: string, revalidate = 60): Promise<T> {
  if (!API_URL) throw new Error("API_URL не задано в .env.local");

  const res = await fetch(`${API_URL}${path}`, { next: { revalidate } });
  if (!res.ok) throw new ApiError(res.status, `GET ${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

// Те саме, але 404 перетворюємо на null (за контрактом DataSource)
async function apiGetOrNull<T>(path: string, revalidate?: number): Promise<T | null> {
  try {
    return await apiGet<T>(path, revalidate);
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) return null;
    throw e;
  }
}

export const httpSource: DataSource = {
  getCategories: () => apiGet<Category[]>("/categories", 3600),

  getCategoryBySlug: (slug) =>
    apiGetOrNull<Category>(`/categories/${encodeURIComponent(slug)}`, 3600),

  getProducts: (query = {}) => {
    const params = new URLSearchParams();
    if (query.categorySlug) params.set("category", query.categorySlug);
    params.set("page", String(query.page ?? 1));
    params.set("limit", String(query.limit ?? 12));
    return apiGet<Paginated<Product>>(`/products?${params}`);
  },

  getProductBySlug: (slug) =>
    apiGetOrNull<Product>(`/products/${encodeURIComponent(slug)}`),

  getSellerById: (id) =>
    apiGetOrNull<Seller>(`/sellers/${encodeURIComponent(id)}`),
};