import { useEffect, useState } from "react";
import apiRequestHandler from "../services/ApiRequestHandler";
import { Link } from "react-router-dom";

const BlogPages = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await apiRequestHandler("posts", "GET");
        setPosts(res?.data || []);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };
    getPost();
  }, []);

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {posts.map((post) => (
          <div
            key={post._id}
            className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300 border border-gray-200"
          >
            <img className="rounded-xl"
              src={post.thumbnail}
              alt={post.title}
            />

            <h3 className="text-base text-slate-900 font-medium mt-3">
              {post.title}
            </h3>

            <p className="text-xs text-indigo-600 font-medium mt-1">
              {post.category || "General"}
            </p>
            <Link
              to={`/posts/${post._id}`}
              className="text-sm text-blue-600 font-medium mt-2 inline-block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPages