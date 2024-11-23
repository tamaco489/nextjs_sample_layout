/**
 * 商品情報の型定義
 * @property {number} id - 商品の一意なID
 * @property {string} name - 商品の名前
 * @property {number} price - 商品の価格(税込み)
 * @property {boolean} inStock - 商品の在庫があるかどうか
 * @property {string} category - 商品のカテゴリ
 * @property {string} description - 商品の説明
 * @property {string} imageUrl - 商品の画像URL（任意）
 */
export type MockProduct = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  category: string;
  description: string;
  imageUrl?: string; // 画像URLはOption(任意)とする
};
