
import MainLayout from "../components/layouts/MainLayout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import UserHome from "../pages/dashboard/user/UserHome";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/dashboard/user/Profile";
import AddBlog from "../pages/dashboard/user/Blog/AddBlog";

const router = () => {
  return(
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="/" element={<UserHome/>}>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/addBlog" element={<AddBlog/>} />
      </Route>
    </Routes>
  )
}

export default router;
