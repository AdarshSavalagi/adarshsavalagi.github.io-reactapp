import { Outlet, Link } from "react-router-dom";
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
const Layout = () => {
  return (
    <>
         <NavBar />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;