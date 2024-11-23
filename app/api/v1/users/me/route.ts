import { NextResponse } from 'next/server';

export type MockUserResponse = {
  id: number;
  name: string;
  age: number;
  isLogin: boolean;
};

const mockUserResponse: MockUserResponse = {
  id: 1,
  name: 'semi shigure',
  age: 20,
  isLogin: true,
};

// GET api/v1/users/me
export async function GET() {
  return NextResponse.json(mockUserResponse);
}
