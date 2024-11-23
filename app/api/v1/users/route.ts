import { NextRequest, NextResponse } from 'next/server';
import { API_KEY } from '@/constants/api';
import { MockUser } from '@/app/types/users';

const mockUserListResponse: MockUser[] = [
  { id: 1, name: 'John Doe', age: 30, isLogin: true },
  { id: 2, name: 'Jane Smith', age: 25, isLogin: false },
  { id: 3, name: 'Alice Johnson', age: 28, isLogin: true },
  { id: 4, name: 'Bob Brown', age: 35, isLogin: false },
];

// GET api/v1/users
export async function GET(request: NextRequest) {
  const authToken = request.headers.get('Authorization');
  console.log('[info] Authorization:', authToken);

  if (authToken !== `Bearer ${API_KEY}`) {
    return NextResponse.json(
      { error: 'Missing Authorization token' },
      { status: 401 },
    );
  }

  return NextResponse.json(mockUserListResponse, { status: 200 });
}
