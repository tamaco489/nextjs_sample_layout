import * as MockProductComponents from '@/features/mock/products/components/index';
import type { MockProduct } from '@/app/types/products';
import { getRequest } from '@/library/api/client';

const MockProductListPage = async () => {
  try {
    const productList: MockProduct[] =
      await getRequest.simple<MockProduct[]>('/products');
    return (
      <div>
        <MockProductComponents.ProductList productList={productList} />
      </div>
    );
  } catch (e) {
    return <div>商品情報の取得に失敗しました。</div>;
  }
};

export default MockProductListPage;
