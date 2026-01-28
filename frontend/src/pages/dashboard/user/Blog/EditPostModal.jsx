import { useForm } from "react-hook-form";

const EditPostModal = ({ post, onClose, onUpdate }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: post,
  });

  const onSubmit = (data) => {
    onUpdate({ ...post, ...data });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[40%] mx-auto rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Update Post</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <label className="font-medium">Blog Title</label>
          <input
            {...register("title")}
            className="w-full border p-2 border-gray-300 rounded mb-5"
            placeholder="Title"
          />

          <label className="font-medium">Thumbnail URL</label>
          <input
            {...register("thumbnail")}
            className="w-full border p-2 border-gray-300 rounded mb-5"
            placeholder="Thumbnail URL"
          />

          <label label className="font-medium">Blog Content</label>
          <textarea
            {...register("content")}
            rows={5}
            className="w-full border p-2 border-gray-300 rounded mb-5"
            placeholder="Content"
          />

          <label label className="font-medium">Tags</label>
          <input
            {...register("tags")}
            className="w-full border p-2 border-gray-300 rounded"
            placeholder="Thumbnail URL"
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostModal;
