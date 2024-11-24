'use client';

import { MockProduct } from '@/app/types/products';
import Image from 'next/image';

interface MockProductProps {
  product: MockProduct;
}

const ProductByID: React.FC<MockProductProps> = ({ product }) => {
  return (
    <div className="p-4 md:p-8">
      {/* 商品詳細のヘッダー */}
      <h1 className="text-3xl font-bold text-center mb-8">{product.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 商品画像 */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            <Image
              src={product.imageUrl || '/mock/products/no_contents.png'}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* 商品詳細情報 */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <p className="text-xl font-semibold text-gray-700">
              価格:{' '}
              <span className="text-2xl text-green-600">¥{product.price}</span>
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-bold">カテゴリ:</span> {product.category}
            </p>
            <p
              className={`text-sm mt-2 ${
                product.inStock ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {product.inStock ? '在庫あり' : '在庫切れ'}
            </p>
            <p className="mt-4 text-gray-600">{product.description}</p>
          </div>

          {/* 購入ボタン */}
          <div className="mt-6 flex justify-center">
            <button
              className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition ${
                !product.inStock ? 'cursor-not-allowed bg-gray-300' : ''
              }`}
              disabled={!product.inStock}
              onClick={() => alert('商品を購入しました！')}
            >
              {product.inStock ? '購入する' : '在庫切れ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductByID;
