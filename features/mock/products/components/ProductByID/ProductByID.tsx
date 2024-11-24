'use client';

import { MockProduct } from '@/app/types/products';

interface MockProductProps {
  product: MockProduct;
}

const ProductByID: React.FC<MockProductProps> = ({ product }) => {
  console.log('[info] ProductByID page component', product);
  return (
    <div>
      商品の詳細ページ
      <p>{product.imageUrl}</p>
      <p>{product.category}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.inStock}</p>
    </div>
  );
};

export default ProductByID;
