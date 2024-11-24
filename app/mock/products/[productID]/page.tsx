import * as MockProductComponents from '@/features/mock/products/components/index';
import type { MockProduct } from '@/app/types/products';
import { getRequest } from '@/library/api/client';

const MockProductByIDPage = async ({
  params,
}: {
  params: { productID: string };
}) => {
  try {
    const { productID } = params;
    const product: MockProduct = await getRequest.simple<MockProduct>(
      `/products/${productID}`,
    );

    return (
      <div>
        <MockProductComponents.ProductByID product={product} />
      </div>
    );
  } catch (e) {
    return <>商品情報の取得に失敗しました。</>;
  }
};

export default MockProductByIDPage;
