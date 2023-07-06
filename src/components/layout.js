import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.get("_token")) navigate("/login");
  });

  return (
    <div>
      <ToastContainer />
      <div>
        <Navbar />
        <section className="relative">
          <div className="wrapper d-flex align-items-stretch">
            <Sidebar />
            <div id="content" className="p-4 p-md-5 pt-5 relative">
              <div id="loading" hidden>
                <div className="spinner"></div>
              </div>
              <Outlet />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
