import { NextRequest, NextResponse } from 'next/server';
import { MockProduct } from '@/app/types/products';
import { verifyAuthorizationHeader } from '@/library/api/validate';

// モックデータ
const mockProducts: MockProduct[] = [
  {
    id: 10000001,
    name: 'Laptop',
    price: 1000,
    inStock: true,
    category: 'Electronics',
    description: 'A powerful laptop with great performance.',
    imageUrl: '/mock/products/10000001.jpg',
  },
  {
    id: 10000002,
    name: 'Headphones',
    price: 200,
    inStock: false,
    category: 'Accessories',
    description: 'Noise-canceling headphones.',
    imageUrl: '/mock/products/10000002.png',
  },
  {
    id: 10000003,
    name: 'Smartphone',
    price: 800,
    inStock: true,
    category: 'Electronics',
    description: 'A sleek smartphone with an amazing camera.',
    imageUrl: '', // frontで「no_content」の画像を表示させる
  },
];

// GET api/v1/products/{productID}
export async function GET(request: NextRequest) {
  // 認証ヘッダーの検証
  const authError: NextResponse | null = verifyAuthorizationHeader(request);
  if (authError) return authError;

  // 商品IDをエンドポイントから取得
  const url = new URL(request.url);
  const idParam = url.pathname.split('/').pop();
  const productId = Number(idParam);

  // 商品IDの検証
  if (isNaN(productId)) {
    return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
  }

  // 商品を検索
  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  // 商品を返却
  return NextResponse.json(product, { status: 200 });
}
