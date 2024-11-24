import * as MockProductComponents from '@/features/mock/products/components/index';
import type { MockProduct } from '@/app/types/products';
import { getRequest } from '@/library/api/client';
import HTTPError from '@/library/api/error';

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
    if (e && e instanceof HTTPError) {
      console.error(
        `data fetch error: status='${e.status}', message='${e.message}'`,
      );
      switch (e.status) {
        case 401:
          return <>認証情報が無効です。ログインし直してください。</>;

        case 403:
          return <>アクセス権限がありません。管理者に確認してください。</>;

        case 404:
          return <>指定された商品が見つかりません。</>;

        case 500:
          return <>サーバーに問題が発生しました。後ほど再度お試しください。</>;

        default:
          return <>エラーが発生しました。再度お試しください。</>;
      }
    }

    return <>商品情報の取得に失敗しました。</>;
  }
};

export default MockProductByIDPage;
