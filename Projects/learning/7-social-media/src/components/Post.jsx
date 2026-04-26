import { useContext } from "react";
import { PostListContext } from "../store/post-list-context";
import { FaTimes } from "react-icons/fa";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  if (!post || !post.title || !post.text || !post.imageUrl) {
    return <div className="alert alert-danger">Post not found</div>;
  }

  const handleDelete = () => deletePost(post.id);

  return (
    <div className="card" style={{ width: "200px", position: "relative" }}>
      <
        FaTimes
        className="hover"
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          cursor: "pointer",
          color: "#000000", 
          backgroundColor: "#ffffff",
          borderRadius: "50%",
        }}
        onClick={handleDelete}
      />

      <img
        src={post.imageUrl}
        className="card-img-top"
        alt={post.title}
        style={{
          maxHeight: "200px",
          maxWidth: "200px",
          objectFit: "contain",
          width: "auto",
          height: "auto",
        }}
      />
      <div className="card-body p-2">
        <h5
          className="card-title"
          style={{
            fontSize: "0.9rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {post.title}
        </h5>
        <p
          className="card-text"
          style={{
            fontSize: "0.75rem",
            marginBottom: "0",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {post.text}
        </p>
      </div>
    </div>
  );
};

export default Post;
