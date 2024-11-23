import { NextRequest, NextResponse } from 'next/server';
import { API_KEY } from '@/constants/api';
import { MockProduct } from '@/app/types/products';

const mockProductList: MockProduct[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 1000,
    inStock: true,
    category: 'Electronics',
    description: 'A powerful laptop with great performance.',
    imageUrl: 'https://example.com/laptop.jpg',
  },
  {
    id: 2,
    name: 'Headphones',
    price: 200,
    inStock: false,
    category: 'Accessories',
    description: 'Noise-canceling headphones.',
    imageUrl: 'https://example.com/headphones.jpg',
  },
  {
    id: 3,
    name: 'Smartphone',
    price: 800,
    inStock: true,
    category: 'Electronics',
    description: 'A sleek smartphone with an amazing camera.',
    imageUrl: 'https://example.com/smartphone.jpg',
  },
];

// GET api/v1/products
export async function GET(request: NextRequest) {
  const authToken = request.headers.get('Authorization');
  if (authToken !== `Bearer ${API_KEY}`) {
    return NextResponse.json(
      { error: 'Missing Authorization token' },
      { status: 401 },
    );
  }

  return NextResponse.json(mockProductList, { status: 200 });
}
