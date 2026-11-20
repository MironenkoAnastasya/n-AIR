import { categories, products, sellers } from "./data";
import { DataSource } from "./types";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockDataSource: DataSource = {
  async getCategories() {
    await delay(200);
    return categories;
  },
    async getCategoryBySlug(slug: string) {
      await delay(200);
      return categories.find(category => category.slug === slug) || null;
    },
    async getProducts(query={}) {
        await delay(200);
        const { categorySlug, page = 1, limit = 10 } = query;
        let list = products;

        if (categorySlug) {
            const category = categories.find(cat => cat.slug === categorySlug);
          list = category?list.filter(product => product.categoryId === categorySlug): [];

        }
        const start = (page - 1) * limit;
        return {
            items: list.slice(start, start + limit),
            total: list.length,
            page,
            limit
        }
      },
      async getProductBySlug(slug: string) {
        await delay(200);
        return products.find(product => product.slug === slug) || null;
      },
      async getSellerById(id: string) {
        await delay(200);
        return sellers.find(seller => seller.id === id) || null;
      },
}