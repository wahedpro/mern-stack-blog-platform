import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import apiRequestHandler from "../../../../services/ApiRequestHandler";

const AddBlog = () => {
  const {register, handleSubmit} = useForm();
  const token = localStorage.getItem("token");

  const addBlogMutation = useMutation({
      mutationFn: async (userData) => {
        return await apiRequestHandler("posts", "POST", userData, token);
      },
      onSuccess: (data) => {
        console.log("Post Add successful:", data);
      }
    });
  
    const onSubmit = data => {
      const blogData = {
        title: data.title,
        slug: data.slug,
        content: data.content,
        thumbnail: data.thumbnail,
        tags: data.tags?.split(",").map(tag => tag.trim()),
      };
      console.log(blogData);
      addBlogMutation.mutate(blogData);
    };
  

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white text-gray-600 w-full max-w-lg p-6 rounded-lg border border-gray-300 space-y-4"
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
          <p className="text-xs text-gray-400 mt-1">
            Must be unique, lowercase, hyphen-separated
          </p>
        </div>

        {/* Thumbnail */}
        <div>
          <label className="font-medium">Thumbnail URL</label>
          <input
            type="text"
            placeholder="https://image-url.com/thumb.jpg"
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
