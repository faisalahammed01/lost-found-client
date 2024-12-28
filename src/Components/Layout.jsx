import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const Titles = {
      "/": "Home",
      "/LostAndFound": "Lost & Found",
      "/MyItems": "My Items",
      "/AllItems": "All Recovered Items",
      "/AddItems": "Add Lost & Found Item",
      "/login": "Login",
      "/register": "Register",
    };

    const current = Titles[location.pathname] || "Lost & Found";
    document.title = `${current} `;
  }, [location]);
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
