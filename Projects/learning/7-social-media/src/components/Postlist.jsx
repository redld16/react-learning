import Post from "./Post";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-context";

const Postlist = () => {
  const { posts } = useContext(PostListContext);

  return (
    <div className="d-flex flex-wrap gap-4">
      {posts.length === 0 ? (
        <div className="alert alert-info w-100">
          No posts yet. Create your first post!
        </div>
      ) : (
        posts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      )}
    </div>
  );
};

export default Postlist;

