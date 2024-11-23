'use client';

/**
 * HTTPエラーを表現するクラス
 */
export class HTTPError extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'HTTP Error';
  }
}
