import { useEffect, useState } from "react";
import apiRequestHandler from "../../../services/ApiRequestHandler";
import { FaUser } from "react-icons/fa";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUser = async () => {
      const token = localStorage.getItem("token");
      const result = await apiRequestHandler("users", "GET", null, token);
      setUsers(result.data);
    };
    getAllUser();
  }, []);

  return (
    <div className="text-sm rounded grid grid-cols-5 gap-5">
      {users.map((user) => (
        <div
          key={user._id}
          className="flex flex-col items-center justify-between py-8 border border-gray-200"
        >
          {user.profilePicture === "" ? (
            <FaUser className="bg-gray-100 h-24 w-24 p-2 rounded-full object-cover" />
          ) : (
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={user.profilePicture}
              alt={user.name}
            />
          )}

          <h2 className="text-lg text-gray-800 mt-3">{user.name}</h2>

          <p className="text-xs text-gray-500">{user.email}</p>

          <p
            className={`px-2 py-0.5 rounded-full mt-2 text-xs border ${
              user.role === "admin"
                ? "bg-green-500/20 text-green-600 border-green-500/30"
                : "bg-blue-500/20 text-blue-600 border-blue-500/30"
            }`}
          >
            {user.role}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllUser;
