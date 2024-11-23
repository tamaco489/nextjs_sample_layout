import React from 'react';
import { MockUser } from '@/app/types/users';

const MockUsersMe: React.FC<MockUser> = ({ id, name, age, isLogin }) => {
  return (
    <div className="">
      <p>
        ./features/mock/components/
        配下で定義したMockUsersMeのコンポーネントです。
      </p>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Status:</strong> {isLogin ? 'Logged In' : 'Logged Out'}
      </p>
    </div>
  );
};

export default MockUsersMe;
