import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[80%] mx-auto py-4 flex justify-between">
        <div>
            <NavLink to='/'>Blog Website</NavLink>
        </div>
        <div>
            <h1>Blog</h1>
        </div>
        <div>
            <NavLink to="/register">Register</NavLink>
        </div>
    </div>
  );
};

export default Navbar;
