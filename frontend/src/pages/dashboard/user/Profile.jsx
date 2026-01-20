import { useEffect, useState } from "react";
import apiRequestHandler from "../../../services/ApiRequestHandler";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("token");
      const res = await apiRequestHandler("users/me", "GET", null, token);
      setUser(res.data);
    };
    getProfile();
  }, []);

  if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      <div className="flex items-center justify-center w-32 h-32 rounded-full object-cover bg-gray-200 bg-center">
        <FaUser size={90} />
      </div>

      {/* <img
        src={user.profilePicture}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover"
      /> */}

      <p className="mt-2 font-medium">Name: {user.name}</p>
      <p className="mt-1 text-gray-600">Email: {user.email}</p>
    </div>
  );
};

export default Profile;
