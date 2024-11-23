import * as MockUserComponents from '@/features/mock/users/components/index';
import type { MockUser } from '@/app/types/users';

const MockUserPage = async () => {
  // ここでAPIリクエストを行い必要なデータを取得する。
  const response = await fetch('http://localhost:3000/api/v1/users/me');

  if (!response.ok) {
    return <div>ユーザ情報の取得に失敗しました。</div>;
  }

  const user: MockUser = await response.json();

  return (
    <div>
      {/* 取得したデータはpropsとして1つにまとめ、feature/components側に渡す。 */}
      <MockUserComponents.UsersMe {...user} />
    </div>
  );
};

export default MockUserPage;
