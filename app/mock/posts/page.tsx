import * as MockPostComponents from '@/features/mock/posts/components/index';
import type { MockPost } from '@/app/types/posts';

const MockPostListPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    return <div>投稿データの取得に失敗しました。</div>;
  }

  const posts: MockPost[] = await response.json();

  return (
    <div className="p-4">
      <h1 className="font-bold">投稿一覧</h1>
      <MockPostComponents.MockPostList posts={posts} />
    </div>
  );
};

export default MockPostListPage;
