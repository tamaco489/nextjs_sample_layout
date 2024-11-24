const MockPage = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-center text-red-500">
        Mock page list (development member only access)
      </h1>
      <ul className="space-y-4">
        <li>
          <a
            href="/mock/admin/users"
            className="block p-4 bg-white rounded-lg shadow hover:bg-blue-100 transition-colors"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              ユーザ一覧ページに遷移
            </h2>
            <p className="text-gray-600">全てのユーザ情報を表示します。</p>
          </a>
        </li>
        <li>
          <a
            href="/mock/posts"
            className="block p-4 bg-white rounded-lg shadow hover:bg-blue-100 transition-colors"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              投稿記事一覧ページに遷移
            </h2>
            <p className="text-gray-600">最新の投稿記事をご覧いただけます。</p>
          </a>
        </li>
        <li>
          <a
            href="/mock/products"
            className="block p-4 bg-white rounded-lg shadow hover:bg-blue-100 transition-colors"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              商品一覧ページに遷移
            </h2>
            <p className="text-gray-600">すべての商品情報を確認できます。</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MockPage;
