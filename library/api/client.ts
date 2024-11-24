import { API_HOST, API_REQUEST_OPTIONS } from '@/constants/api';
import { HTTPError } from '@/library/api/error';

/**
 * GET リクエストを送信するクラス
 */
class GetRequest {
  private headers: HeadersInit;

  constructor() {
    this.headers = API_REQUEST_OPTIONS.headers;
  }

  /**
   * APIリクエストを送信する共通メソッド
   * cacheオプションには「no-store」を指定しているため、キャッシュは行わず常に最新のデータを取得します。
   *
   * @param {string} url   - リクエスト先のURL
   * @returns {Promise<T>} - APIのレスポンスデータ。
   * @throws {HTTPError}   - HTTPリクエストが成功しなかった場合にエラーをスローします。
   */
  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      method: 'GET',
      headers: this.headers,
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new HTTPError(
        response.status,
        `HTTP error Status: ${response.status}`,
      );
    }

    return response.json() as Promise<T>;
  }

  /**
   * シンプルなGETリクエストを送信するメソッド
   *
   * @param {string} path  - APIエンドポイントのパス。
   * @returns {Promise<T>} - APIのレスポンスデータ。
   * @throws {HTTPError}   - HTTPリクエストが成功しなかった場合にエラーをスローします。
   */
  public async simple<T>(path: string): Promise<T> {
    const url = `${API_HOST}${path}`;
    return this.fetchData<T>(url);
  }
}

export const getRequest = new GetRequest();
