/**
 * HTTP リクエスト中に発生したエラーを扱うカスタムエラークラスです。
 *
 * このクラスは、HTTP ステータスコードやエラーメッセージを伴うエラーを表現するために使用されます。
 * API レスポンスがエラーを返した場合に、このクラスをインスタンス化してエラーハンドリングを行います。
 */
export default class HTTPError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'HTTPError';
  }
}
