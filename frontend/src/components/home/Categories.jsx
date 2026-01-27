const categories = [
  "Web Development",
  "Programming",
  "AI & ML",
  "Career",
  "Tutorials",
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-5 py-2 bg-white border rounded-full cursor-pointer hover:bg-blue-50 transition"
          >
            {cat}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Categories;
