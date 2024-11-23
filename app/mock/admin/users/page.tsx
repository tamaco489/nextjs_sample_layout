import * as MockUserComponents from '@/features/mock/users/components/index';
import type { MockUser } from '@/app/types/users';
import { getRequest } from '@/library/api/client';

const MockAdminUserPage = async (): Promise<JSX.Element> => {
  try {
    const userList: MockUser[] = await getRequest.simple<MockUser[]>('/users');
    return (
      <div>
        <MockUserComponents.UserList userList={userList} />
      </div>
    );
  } catch (e) {
    return <div>ユーザ情報の取得に失敗しました。</div>;
  }
};

export default MockAdminUserPage;
