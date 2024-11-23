/**
 * Mock向け投稿データの型定義
 * @property {number} userId - 投稿者のユーザーID
 * @property {number} id     - 投稿の一意なID
 * @property {string} title  - 投稿のタイトル
 * @property {string} body   - 投稿の内容
 */
export type MockPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
