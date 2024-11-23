import React from 'react';
import { MockUser } from '@/app/types/users';

interface MockUserListProps {
  userList: MockUser[];
}

const UserList: React.FC<MockUserListProps> = ({ userList }) => {
  return (
    <div className="p-4">
      <h2 className="font-semibold mb-4">管理者ページ</h2>

      <p>
        ./features/mock/components/ 配下で定義したUserListのコンポーネントです。
      </p>

      {userList.length === 0 ? (
        <p>ユーザは存在しません。</p>
      ) : (
        userList.map((u) => (
          <div key={u.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <p>ID: {u.id}</p>
            <p>Name: {u.name}</p>
            <p>Age: {u.age}</p>
            <p>Is Login?: {u.isLogin}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
