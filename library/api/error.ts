/**
 * HTTP リクエスト中に発生したエラーを扱うカスタムエラークラスです。
 *
 * このクラスは、HTTP ステータスコードやエラーメッセージを伴うエラーを表現するために使用されます。
 * API レスポンスがエラーを返した場合に、このクラスをインスタンス化してエラーハンドリングを行います。
 */
export default class HTTPError extends Error {
  /**
   * エラーの HTTP ステータスコードを保持します。
   * 例: 404 (Not Found), 500 (Internal Server Error) など。
   */
  status: number;

  /**
   * HTTPError クラスのインスタンスを生成します。
   *
   * @param {number} status - HTTP ステータスコード。
   * @param {string} message - エラーの詳細メッセージ。
   */
  constructor(status: number, message: string) {
    super(message); // 親クラス (Error) のコンストラクタを呼び出し、メッセージを設定します。
    this.status = status; // エラーの HTTP ステータスコードを設定します。
    this.name = 'HTTPError'; // エラー名を "HTTPError" に設定します (Error.name のオーバーライド)。
  }
}
