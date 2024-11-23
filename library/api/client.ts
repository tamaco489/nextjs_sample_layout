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
   *
   * @param {string} url   - リクエスト先のURL
   * @returns {Promise<T>} - APIのレスポンスデータ。
   * @throws {HTTPError}   - HTTPリクエストが成功しなかった場合にエラーをスローします。
   */
  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      method: 'GET',
      headers: this.headers,
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

  /**
   * パスパラメータを使ったGETリクエストを送信するメソッド
   *
   * @param {string} path                                - APIエンドポイントのパス。
   * @param {Record<string, string | number>} pathParams - パスパラメータを含むオブジェクト。
   * @returns {Promise<T>}                               - APIのレスポンスデータ。
   * @throws {HTTPError}                                 - HTTPリクエストが成功しなかった場合にエラーをスローします。
   */
  public async withPathParameters<T>(
    path: string,
    pathParams: Record<string, string | number>,
  ): Promise<T> {
    Object.entries(pathParams).forEach(([key, value]) => {
      path = path.replace(`:${key}`, encodeURIComponent(value));
    });

    const url = `${API_HOST}${path}`;
    return this.fetchData<T>(url);
  }
}

export const getRequest = new GetRequest();
