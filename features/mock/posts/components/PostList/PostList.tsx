import React from 'react';
import { MockPost } from '@/app/types/posts';

interface MockPostListProps {
  posts: MockPost[];
}

const MockPostList: React.FC<MockPostListProps> = ({ posts }) => {
  return (
    <div className="p-4">
      {' '}
      <h2 className="font-bold mb-4">投稿リスト</h2>
      <p className="mb-4">
        ./features/mock/components/
        配下で定義したMockPostListのコンポーネントです。
      </p>
      {posts.length === 0 ? (
        <p>投稿はありません。</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            {' '}
            <p className="font-semibold">
              <strong>User ID:</strong> {post.userId}
            </p>
            <p className="font-semibold">
              <strong>Post ID:</strong> {post.id}
            </p>
            <p className="font-semibold">
              <strong>Title:</strong> {post.title}
            </p>
            <p className="text-gray-700">
              <strong>Body:</strong> {post.body}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default MockPostList;
