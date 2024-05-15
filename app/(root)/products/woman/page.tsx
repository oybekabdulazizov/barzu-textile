import { ProductContainer } from '@/components/shared/Product';
import { productsWoman } from '@/lib/products';

export default function page() {
  const title = 'For Women';
  const description = `Embrace elegance and versatility in our women's clothing collection. 
                        From chic blouses and tailored trousers to cozy knitwear and sweaters, 
                        each piece is designed to enhance your unique style while providing maximum comfort. 
                        Whether you're powering through the workday or unwinding on a leisurely weekend, 
                        our collection ensures you look and feel fantastic in any setting. 
                        Discover your next wardrobe staples with us today.`;

  return (
    <ProductContainer
      title={title}
      description={description}
      productsData={productsWoman}
      model='woman'
    />
  );
}