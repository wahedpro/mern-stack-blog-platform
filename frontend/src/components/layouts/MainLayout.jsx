import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
function MainLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  )
}

export default MainLayout