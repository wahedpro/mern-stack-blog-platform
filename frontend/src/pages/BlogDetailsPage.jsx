import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiRequestHandler from "../services/ApiRequestHandler";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await apiRequestHandler(`posts/id/${id}`, "GET");
        setPost(res.data);
      } catch (error) {
        console.error("Failed to fetch blog", error);
      }
    };
    getPost();
  }, [id]);

  if (!post) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <img
        src={post.thumbnail}
        alt={post.title}
        className="rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-3">
        {post.title}
      </h1>

      <p className="text-sm text-indigo-600 mb-6">
        {post.category}
      </p>

      <div className="prose max-w-none">
        {post.content}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
