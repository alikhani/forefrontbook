import { usePostQuery } from "../lib/post.graphql";
import Post from "./post";

const Feed = () => {
  const { data, loading, error } = usePostQuery();
  const post = data?.post;
  if (error) {
    return <p></p>;
  }
  if (post) {
    return (
      <div>
        {post.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    );
  }
  return <div>loading</div>;
};

export default Feed;
