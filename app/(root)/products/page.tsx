import { products } from '@/lib/constants';
import { ProductPage } from '@/components/shared/Product';

export default function Products() {
  return <ProductPage productsData={products} />;
}
