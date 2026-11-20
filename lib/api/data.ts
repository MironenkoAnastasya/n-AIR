import type { Category, Product, Seller } from "@/types";

export const categories: Category[] = [
  { id: "c1", slug: "electronics", name: "Електроніка", image: "https://picsum.photos/seed/c1/600/600" },
  { id: "c2", slug: "home", name: "Дім", image: "https://picsum.photos/seed/c2/600/600" },
  { id: "c3", slug: "handmade", name: "Хендмейд", image: "https://picsum.photos/seed/c3/600/600" },
];

export const sellers: Seller[] = [
  { id: "s1", slug: "tech-shop", name: "TechShop" },
  { id: "s2", slug: "maysternia", name: "Майстерня Олени" },
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "bluetooth-navushnyky",
    title: "Bluetooth-навушники",
    description: "Бездротові навушники з шумозаглушенням.",
    price: 129900,
    images: ["https://picsum.photos/seed/p1/600/600"],
    categoryId: "c1",
    sellerId: "s1",
    stock: 12,
  },
  {
    id: "p2",
    slug: "keramichna-chashka",
    title: "Керамічна чашка ручної роботи",
    description: "Об'єм 350 мл, глазур, можна в посудомийку.",
    price: 45000,
    images: ["https://picsum.photos/seed/p2/600/600"],
    categoryId: "c3",
    sellerId: "s2",
    stock: 5,
  },
  {
    id: "p3",
    slug: "nastilna-lampa",
    title: "Настільна лампа",
    description: "LED-лампа з регулюванням яскравості.",
    price: 89900,
    images: ["https://picsum.photos/seed/p3/600/600"],
    categoryId: "c2",
    sellerId: "s1",
    stock: 0,
  },
];