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
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Update Post</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            {...register("title")}
            className="w-full border p-2 rounded"
            placeholder="Title"
          />

          <input
            {...register("thumbnail")}
            className="w-full border p-2 rounded"
            placeholder="Thumbnail URL"
          />

          <textarea
            {...register("content")}
            rows={4}
            className="w-full border p-2 rounded"
            placeholder="Content"
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
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
