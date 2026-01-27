import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="text-sm w-full">
      <nav class="relative h-17.5 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 transition-all shadow-sm">
        <NavLink to='/' className='text-xl font-bold'>DevDiary</NavLink>
        
        <ul class="hidden md:flex items-center space-x-8 md:pl-28">
             <NavLink to='/'>Home</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        </ul>

        <NavLink to="/register" className='border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition-all'>Register</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
