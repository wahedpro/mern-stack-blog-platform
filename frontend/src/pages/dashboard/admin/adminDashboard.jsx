import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { LuSquareUser } from "react-icons/lu";
import { CgAddR } from "react-icons/cg";
import { FaRegListAlt } from "react-icons/fa";


const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const sidebarLinks = [
    { name: "Dashboard", path: "/adminDashboard", icon: <MdOutlineDashboard size={22}/>},
    { name: "All Blog", path: "/adminDashboard/allBlog", icon: <CgAddR size={22}/> },
    { name: "All User", path: "/adminDashboard/allUser", icon: <FaRegListAlt size={22}/>},
    { name: "Profile", path: "/adminDashboard/profile", icon: <LuSquareUser size={22}/> },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
        <Link to="/dashboard" className="text-xl font-medium text-gray-900">
          Dashboard
        </Link>
        <div className="flex items-center gap-5 text-gray-700">
          <p>Hi! {user?.name || "User"}</p>
          <button
            onClick={handleLogout}
            className="border rounded-full text-sm px-4 py-1 hover:bg-gray-700 hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="md:w-64 w-16 border-r border-gray-300 pt-4 flex flex-col">
          {sidebarLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 transition
                ${
                  isActive
                    ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-600"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              {item.icon}
              <p className="md:block hidden">{item.name}</p>
            </NavLink>
          ))}
        </div>

        {/* Page Content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
