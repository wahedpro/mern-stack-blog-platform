import { useEffect, useState } from "react";
import apiRequestHandler from "../../../../services/ApiRequestHandler";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import EditPostModal from "./EditPostModal";

const MyBlog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const token = localStorage.getItem("token");
      const res = await apiRequestHandler("posts/my-posts", "GET", null, token);
      setPosts(res.data);
    };
    getPost();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await apiRequestHandler(`posts/${id}`, "DELETE", null, token);
    setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleEdit = (post) => {
    setSelectedPost(post);
  };

  const handleUpdate = async (updatedData) => {
    const token = localStorage.getItem("token");
    const res = await apiRequestHandler(
      `posts/${updatedData._id}`,
      "PATCH",
      updatedData,
      token,
    );

    if (res.success) {
      setPosts((prev) =>
        prev.map((p) => (p._id === updatedData._id ? res.data : p)),
      );
      setSelectedPost(null);
    }
  };
  

  return (
    <>
      <div className="grid gap-6 px-6 pt-6 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-xl shadow-sm">
            <img
              src={post.thumbnail}
              className="h-44 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="text-sm font-semibold">{post.title}</h3>
              <p className="text-red-400">{post.status}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(post)}
                  className="text-blue-600 flex items-center gap-1"
                >
                  <FaRegEdit /> Edit
                </button>

                <button
                  onClick={() => handleDelete(post._id)}
                  className="text-red-600 flex items-center gap-1"
                >
                  <MdOutlineDelete /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <EditPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
};

export default MyBlog;
