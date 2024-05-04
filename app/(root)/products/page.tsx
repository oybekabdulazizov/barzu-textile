import { products } from '@/lib/products';
import { ProductPage } from '@/components/shared/Product';

export default function Products() {
  return <ProductPage productsData={products} />;
}
