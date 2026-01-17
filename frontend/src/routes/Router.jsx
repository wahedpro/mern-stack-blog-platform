
import MainLayout from "../components/layouts/MainLayout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import UserHome from "../pages/dashboard/user/UserHome";
import { Route, Routes } from "react-router-dom";

const router = () => {
  return(
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="/" element={<UserHome/>} />
    </Routes>
  )
}

export default router;
