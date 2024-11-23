// import React from 'react';
import { MockProduct } from '@/app/types/products';

interface MockProductListProps {
  productList: MockProduct[];
}

const ProductList: React.FC<MockProductListProps> = ({ productList }) => {
  return (
    <div className="p-4">
      <h2>商品一覧ページ</h2>

      {/* <p>./features/mock/components/ 配下で定義したProductListのコンポーネントです。</p> */}

      {productList.length < 0 ? (
        <p>商品情報は存在しません。</p>
      ) : (
        productList.map((p) => (
          <div key={p.id}>
            <p>商品名: {p.name}</p>
            <p>価格: {p.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
