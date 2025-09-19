import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));

    fetch(`http://localhost:4000/comments/${id}`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="single-post">
      <h1>{post.title}</h1>
      <small>By {post.author} | {new Date(post.date).toLocaleDateString()}</small>
      <p>{post.content}</p>

      <h3>Comments</h3>
      {comments.map(c => (
        <div key={c._id} className="comment">
          <p>{c.content}</p>
        </div>
      ))}
    </div>
  );
}
