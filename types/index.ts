export type Category = {
    id: string;
    name: string;
    slug: string;
    image: string;
}

export type Seller = {
    id: string;
    name: string;
    slug: string;
}

export type Product = {
    id: string;
    title: string;
    description: string;
    images: string[];
    price: number;
    categoryId: string;
    sellerId: string;
    stock: number;
    slug: string;
}

export type ProductQuery = {
    categorySlug?: string;
    page?: number;
    limit?: number;
}

export type Paginated<T> = {
    items: T[];
    total: number;
    page: number;
    limit: number;
}