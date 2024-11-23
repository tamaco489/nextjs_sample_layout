/**
 * Mock向けユーザーデータの型定義
 * @property {number} id - ユーザーの一意なID
 * @property {string} name - ユーザーの名前
 * @property {number} age - ユーザーの年齢
 * @property {boolean} isLogin - ユーザーがログインしているかどうかの状態
 */
export type MockUser = {
  id: number;
  name: string;
  age: number;
  isLogin: boolean;
};
