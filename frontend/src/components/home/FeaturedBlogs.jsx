import { useEffect, useState } from "react";
import apiRequestHandler from "../../services/ApiRequestHandler";
import { Link } from "react-router-dom";

const FeaturedBlogs = () => {
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
    <div className="mt-10">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Latest Blog
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Stay ahead of the curve with fresh content on code, design, startups,
        and everything in between.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {posts.slice(0, 5).map((post) => (
          <div
            key={post._id}
            className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300"
          >
            <img className="rounded-xl" src={post.thumbnail} alt={post.title} />

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

export default FeaturedBlogs;
