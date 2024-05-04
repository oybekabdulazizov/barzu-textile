import { ProductContainer } from '@/components/shared/Product';
import { productsMan } from '@/lib/products';

export default function page() {
  const title = 'For Men';
  const description = `Step into a world of sophistication and functionality with our men's clothing collection. 
                      From sharp and casual tailored t-shirts, to trousers and hoodies, our range is designed to cater to every aspect of a man's lifestyle. 
                      Experience unparalleled comfort and style, whether you're at work, enjoying the outdoors, or relaxing at home. 
                      Explore our selection to redefine your wardrobe with quality and class.`;

  return (
    <ProductContainer
      title={title}
      description={description}
      productsData={productsMan}
      model='man'
    />
  );
}
