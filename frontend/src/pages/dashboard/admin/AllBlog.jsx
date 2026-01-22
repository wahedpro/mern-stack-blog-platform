import React, { useEffect, useState } from "react";
import apiRequestHandler from "../../../services/ApiRequestHandler";

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

  return (
    <div className="grid gap-6 px-6 pt-6 sm:grid-cols-2 lg:grid-cols-5">
      {allPosts.map((post) => (
        <div key={post._id} className="bg-white shadow-sm">
          <img src={post.thumbnail} className="h-44 w-full object-cover rounded-t-xl"/>
          <div className="p-4">
            <h3 className="text-sm font-semibold">{post.title}</h3>
            <p className="text-red-400">{post.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBlog;
