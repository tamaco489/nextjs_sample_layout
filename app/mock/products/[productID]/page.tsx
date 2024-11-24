// import * as MockProductComponents from '@/features/mock/products/components/index';
import type { MockProduct } from '@/app/types/products';
import { getRequest } from '@/library/api/client';

const MockProductByIDPage = async ({
  params,
}: {
  params: { productID: string };
}) => {
  const { productID } = params;
  console.log('[info] 2 productID:', `/products/${productID}`); // products/10000001
  const product: MockProduct = await getRequest.simple<MockProduct>(
    `/products/${productID}`,
  );

  return (
    <div>
      <h1>商品詳細ページ</h1>
      <p>{product.name}</p>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ maxWidth: '200px' }}
      />
      <p>価格: ${product.price}</p>
      <p>{product.description}</p>
      <p>カテゴリ: {product.category}</p>
      <p>在庫: {product.inStock ? 'あり' : 'なし'}</p>
    </div>
  );
};

export default MockProductByIDPage;
