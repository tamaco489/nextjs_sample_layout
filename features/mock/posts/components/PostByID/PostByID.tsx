import React from 'react';
import { MockPost } from '@/app/types/posts';

const MockPostByID: React.FC<MockPost> = ({ userId, id, title, body }) => {
  return (
    <div className="">
      <p>
        ./features/mock/components/配下で定義したMockPostByIDのコンポーネントです。
      </p>
      <p>
        <strong>User ID:</strong> {userId}
      </p>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>Body:</strong> {body}
      </p>
    </div>
  );
};

export default MockPostByID;
