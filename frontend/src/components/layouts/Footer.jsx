import { FaFacebookSquare, FaYoutube, FaInstagramSquare  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-15 bg-gray-100 text-black">
      <h3 className="text-3xl">DevDiary</h3>
      <p className="mt-2 text-center">
        Copyright © 2026 DevDiary. All rights reservered.
      </p>
      <div className="flex items-center gap-4 mt-5">
        <FaFacebookSquare size={24}/>
        <FaYoutube size={24}/>
        <FaInstagramSquare size={24}/>

      </div>
    </footer>
  );
};

export default Footer;
