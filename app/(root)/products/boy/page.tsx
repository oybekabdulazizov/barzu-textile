import ProductContainer from '@/components/shared/ProductContainer';
import { productsBoy } from '@/lib/constants';

export default function page() {
  const title = 'For Boys';
  const description = `Explore our boys' clothing collection for stylish, durable
  essentials. From cozy sweaters and hoodies, to vibrant t-shirts, our
  quality garments ensure comfort and style for every adventure.`;

  return (
    <ProductContainer
      title={title}
      description={description}
      productsData={productsBoy}
      model='boy'
    />
  );
}
