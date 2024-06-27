import React, { FC } from 'react';
import { singleProductType } from '../utils/type';
import { ProductCard } from '../ui/ProductCard';

interface ProductGridProps {
  productData: Array<singleProductType>;
}

const ProductGrid: FC<ProductGridProps> = ({ productData }) => {
  return (
    <section className='text-gray-600'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {productData.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
