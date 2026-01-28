import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import apiRequestHandler from "../../../../services/ApiRequestHandler";
import toast from "react-hot-toast";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();

  const addBlogMutation = useMutation({
    mutationFn: async (userData) => {
      const token = localStorage.getItem("token");
      return await apiRequestHandler("posts", "POST", userData, token);
    },
    onSuccess: (data) => {
      toast.success("Post Add Successfully");
      reset();
    },
  });

  const onSubmit = (data) => {
    const blogData = {
      title: data.title,
      slug: data.slug,
      content: data.content,
      thumbnail: data.thumbnail,
      tags: data.tags?.split(",").map((tag) => tag.trim()),
    };
    console.log(blogData);
    addBlogMutation.mutate(blogData);
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white text-gray-600 w-full max-w-lg p-6 rounded-lg border border-gray-200 space-y-4"
      >
        {/* Title */}
        <div>
          <label className="font-medium">Blog Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            className="w-full border mt-1 border-gray-300 rounded px-3 py-2 outline-none"
            {...register("title", { required: "Title is required" })}
          />
        </div>

        {/* Slug */}
        <div>
          <label className="font-medium">Slug</label>
          <input
            type="text"
            placeholder="example-blog-title"
            className="w-full border mt-1 border-gray-300 rounded px-3 py-2 outline-none"
            {...register("slug", { required: "Slug is required" })}
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="font-medium">Thumbnail URL</label>
          <input
            type="text"
            placeholder="enter image url"
            className="w-full border mt-1 border-gray-300 rounded px-3 py-2 outline-none"
            {...register("thumbnail", { required: "Thumbnail is required" })}
          />
        </div>

        {/* Content */}
        <div>
          <label className="font-medium">Content</label>
          <textarea
            rows="5"
            placeholder="Write blog content..."
            className="w-full border mt-1 border-gray-300 rounded px-3 py-2 outline-none resize-none"
            {...register("content", { required: "Content is required" })}
          ></textarea>
        </div>

        {/* Tags */}
        <div>
          <label className="font-medium">Tags</label>
          <input
            type="text"
            placeholder="react, mongodb, node"
            className="w-full border mt-1 border-gray-300 rounded px-3 py-2 outline-none"
            {...register("tags")}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white py-2 rounded font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
