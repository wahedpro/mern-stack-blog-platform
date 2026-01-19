import { useForm } from "react-hook-form";

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // convert comma-separated tags to array
    const payload = {
      ...data,
      tags: data.tags
        ? data.tags.split(",").map((tag) => tag.trim())
        : [],
    };

    try {
      const res = await fetch("http://localhost:4000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to create blog");
      }

      const result = await res.json();
      console.log("Blog created:", result);

      reset(); // clear form
      alert("Blog published successfully 🎉");
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
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
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
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
          {errors.slug && (
            <p className="text-red-500 text-sm">{errors.slug.message}</p>
          )}
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
          {errors.thumbnail && (
            <p className="text-red-500 text-sm">
              {errors.thumbnail.message}
            </p>
          )}
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
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
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
          disabled={isSubmitting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white py-2 rounded font-medium"
        >
          {isSubmitting ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
