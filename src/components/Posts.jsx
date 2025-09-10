const Posts = ({ currentPosts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="flex flex-col mt-5 mb-5">
      {currentPosts.map((post) => (
        <li key={post.id} className="relative py-3 px-5 -mb-px border border-solid border-black/12.5">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
