const AboutAuthor = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        
        <div className="w-40 h-40 bg-gray-300 rounded-full"></div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            About the Author
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Hi, I’m Wahid 👋  
            A frontend developer and tech enthusiast. I write blogs to
            share knowledge about web development, programming, and AI
            in a simple way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
