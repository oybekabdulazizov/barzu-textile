import { ProductContainer } from '@/components/shared/Product';
import { productsGirl } from '@/lib/products';

export default function Girl() {
  const title = 'For Girls';
  const description = `Discover timeless elegance and playful charm in our girls' clothing collection. 
                        From adorable dresses to comfy leggings, each piece is crafted with care for comfort and durability. 
                        xplore our range today and dress your little princess in style for any occasion.`;

  return (
    <ProductContainer
      title={title}
      description={description}
      productsData={productsGirl}
      model='girl'
    />
  );
}
