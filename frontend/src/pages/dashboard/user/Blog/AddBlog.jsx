import { useForm } from "react-hook-form";

const AddBlog = () => {
    const {register, handleSubmit} = useForm()
  return (
    <div className="flex justify-center mt-10">
      <form className="bg-white text-gray-600 w-full max-w-lg p-6 rounded-lg border border-gray-300 space-y-4">

        {/* Title */}
        <div>
          <label className="font-medium">Blog Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            className="w-full border mt-1 border-gray-300 rounded px-3 py-2 outline-none"
            id="title"
            {...register("title", { required: "The title is required." })}
          />
        </div>

        {/* Slug */}
        <div>
          <label className="font-medium">Slug</label>
          <input
            type="text"
            placeholder="example-blog-title"
            className="w-full border mt-1 border-gray-300 rounded px-3 py-2 outline-none"
            id="slug"
            {...register("slug", { required: "The slug is required." })}
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
            id="thumbnail"
            {...register("thumbnail", { required: "The thumbnail URL is required." })}
          />
        </div>

        {/* Content */}
        <div>
          <label className="font-medium">Content</label>
          <textarea
            rows="5"
            placeholder="Write blog content..."
            className="w-full border mt-1 border-gray-300 rounded px-3 py-2 outline-none resize-none"
            id="content"
            {...register("content", { required: "The content is required." })}
          ></textarea>
        </div>

        {/* Tags */}
        <div>
          <label className="font-medium">Tags</label>
          <input
            type="text"
            placeholder="react, mongodb, node"
            className="w-full border mt-1 border-gray-300 rounded px-3 py-2 outline-none"
            id="tags"
            {...register("tags", { required: "At least one tag is required." })}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-medium"
        >
          Publish Blog
        </button>

      </form>
    </div>
  );
};

export default AddBlog;