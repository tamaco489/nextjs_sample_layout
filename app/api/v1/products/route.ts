import { NextRequest, NextResponse } from 'next/server';
import { MockProduct } from '@/app/types/products';
import { verifyAuthorizationHeader } from '@/library/api/validate';

const mockProductList: MockProduct[] = [
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
    // imageUrl: '/mock/products/10000003.jpg',
    imageUrl: '', // frontで「no_content」の画像を表示させる
  },
];

// GET api/v1/products
export async function GET(request: NextRequest) {
  // 認証ヘッダーの検証
  const authError: NextResponse | null = verifyAuthorizationHeader(request);
  if (authError) return authError;

  return NextResponse.json(mockProductList, { status: 200 });
}
