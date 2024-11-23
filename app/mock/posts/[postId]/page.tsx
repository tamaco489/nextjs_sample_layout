import * as MockPostComponents from '@/features/mock/posts/components/index';
import type { MockPost } from '@/app/types/posts';

const MockPostByIDPage = async () => {
  const postId = 100;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );

  if (!response.ok) {
    return <div>投稿が見つかりませんでした。</div>;
  }

  const post: MockPost = await response.json();

  return (
    <div className="">
      <MockPostComponents.MockPostByID {...post} />
    </div>
  );
};

export default MockPostByIDPage;
