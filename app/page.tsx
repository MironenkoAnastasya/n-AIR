import ProductGrid from "@/components/product-grid";
import { api } from "@/lib/api";

export default async function Home() {
  const {items} = await api.getProducts();
  return (
    <section className="space-y-6">
      <ProductGrid products={items} />
    </section>
  );
}
