'use client';
import React, { useState } from 'react';
import { MockProduct } from '@/app/types/products';

interface MockProductListProps {
  productList: MockProduct[];
}

const ProductList: React.FC<MockProductListProps> = ({ productList }) => {
  // モーダルの状態管理
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MockProduct | null>(
    null,
  );

  // モーダルを開閉処理
  const openModal = (product: MockProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">商品一覧ページ</h2>

      {productList.length === 0 ? (
        <p>商品情報は存在しません。</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productList.map((p) => (
            <div
              key={p.id}
              className="border-2 border-gray-300 rounded-lg shadow-md p-6 bg-gray-50 hover:shadow-lg hover:border-blue-500 transition-all transform hover:translate-x-[-5px] hover:translate-y-[-5px]"
            >
              {/* 商品情報の表示 */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {p.name}
                </h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">価格:</span> ¥{p.price}
                </p>
                <p
                  className={`mb-2 ${
                    p.inStock ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {p.inStock ? '在庫あり' : '在庫切れ'}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-bold">カテゴリ:</span> {p.category}
                </p>
                <p className="text-sm text-gray-500 mb-4">{p.description}</p>

                {/* ボタン */}
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                  onClick={() => openModal(p)}
                >
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 「詳細を見る」を押下された際に表示するモーダル画面 */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">価格:</span> ¥{selectedProduct.price}
            </p>
            <p
              className={`mb-2 ${selectedProduct.inStock ? 'text-green-600' : 'text-red-600'}`}
            >
              {selectedProduct.inStock ? '在庫あり' : '在庫切れ'}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">カテゴリ:</span>{' '}
              {selectedProduct.category}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              {selectedProduct.description}
            </p>

            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
              onClick={closeModal}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
