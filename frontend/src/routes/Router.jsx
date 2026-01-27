import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import UserHome from "../pages/dashboard/user/UserHome";
import Profile from "../pages/dashboard/user/Profile";
import AddBlog from "../pages/dashboard/user/Blog/AddBlog";
import MyBlog from "../pages/dashboard/user/Blog/MyBlog";
import AdminDashboard from "../pages/dashboard/admin/adminDashboard";
import AllBlog from "../pages/dashboard/admin/AllBlog";
import AllUser from "../pages/dashboard/admin/AllUser";
import PrivateRoute from "./PrivateRoutes";
import Invitelogger from "../pages/dashboard/admin/Invitelogger";
import HomePage from "../pages/HomePage";
import BlogPages from "../pages/BlogPages";
import BlogDetailsPage from "../pages/BlogDetailsPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPages />} />
        <Route path="/posts/:id" element={<BlogDetailsPage/>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/userDashboard" element={<PrivateRoute><UserHome /></PrivateRoute>}>
        <Route index element={<MyBlog />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addBlog" element={<AddBlog />} />
      </Route>

      <Route path="/adminDashboard" element={<PrivateRoute><AdminDashboard/></PrivateRoute>}>
          <Route path="allBlog" element={<AllBlog/>} />
          <Route path="allUser" element={<AllUser />} />
          <Route path="adminProfile" element={<AddBlog />} />
          <Route path="invite" element={<Invitelogger/>} />
      </Route>
    </Routes>
  );
};

export default Router;
