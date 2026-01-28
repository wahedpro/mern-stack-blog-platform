import { useEffect, useState } from "react";
import apiRequestHandler from "../../../services/ApiRequestHandler";
import { RxUpdate } from "react-icons/rx";

const AllBlog = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const getAllPost = async () => {
      const token = localStorage.getItem("token");
      const res = await apiRequestHandler(
        "posts/admin/all-posts",
        "GET",
        null,
        token,
      );
      setAllPosts(res.data);
    };
    getAllPost();
  }, []);

  const publishPost = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      await apiRequestHandler(`posts/${postId}/publish`, "PATCH", null, token);
      setAllPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, status: "PUBLISHED" } : post,
        ),
      );
    } catch (error) {
      console.error("Failed to publish post", error);
    }
  };

  return (
    <div className="grid gap-6 px-6 pt-6 sm:grid-cols-2 lg:grid-cols-5">
      {allPosts.map((post) => (
        <div key={post._id} className="bg-white shadow-sm">
          <img
            src={post.thumbnail}
            className="h-44 w-full object-cover rounded-t-xl"
          />
          <div className="flex justify-between items-center">
            <div className="p-4">
              <h3 className="text-sm font-semibold">{post.title}</h3>
              <p className="text-red-400">{post.status}</p>
            </div>
            <button
              disabled={post.status === "PUBLISHED"}
              className={`p-2 rounded text-xs mr-2 ${
                post.status === "PUBLISHED"
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
              onClick={() => publishPost(post._id)}
            >
              <RxUpdate size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBlog;
