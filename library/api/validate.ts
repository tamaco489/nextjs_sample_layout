import { NextRequest, NextResponse } from 'next/server';
import { API_KEY } from '@/constants/api';

/**
 * HTTP request handlerを検証し、適切なパラメータが設定されているかの検証を行います。
 * 不適切なパラメータが設定されている場合は、HTTP Status Code 401を返します。
 * 適切なパラメータが設定されている場合は、NULLを返します。
 */
export function verifyAuthorizationHeader(
  request: NextRequest,
): NextResponse | null {
  const authToken = request.headers.get('Authorization');
  if (authToken !== `Bearer ${API_KEY}`) {
    return NextResponse.json(
      { error: 'Missing or invalid Authorization token' },
      { status: 401 },
    );
  }
  // 認証成功時はnullを返す
  return null;
}
