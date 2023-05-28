import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isRouteMatch = (path) => {
    if (location.pathname.indexOf(path) === 0) return true;
    return false;
  };
  return (
    <nav id="sidebar">
      <div className="custom-menu" id="sidebarCollapse">
        <button type="button" className="btn btn-primary">
          <i className="fa fa-bars"></i>
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
      <div className="p-4">
        <h1>
          <a className="logo">
            Operator{" "}
            <span className="text-sm">
              Effortlessly organize your documents with our intelligent
              classification system Workflow
            </span>
          </a>
        </h1>
        <ul className="list-unstyled components mb-5">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" className="nav-link link-dark" aria-current="page">
              <i className="fa-solid fa-user mr-3"></i>
              Dashboard
            </Link>
          </li>
          <li className={isRouteMatch("/projects") ? "active" : ""}>
            <Link to="/projects" className="nav-link link-dark">
              <i className="fa-solid fa-users mr-3"></i>
              Projects
            </Link>
          </li>
          <li className={isRouteMatch("/documents") ? "active" : ""}>
            <Link to="/documents" className="nav-link link-dark">
              <i className="fa-solid fa-users mr-3"></i>
              Documents
            </Link>
          </li>
          <li>
            <Link to="/settings" className="nav-link link-dark">
              <i className="fa-solid fa-file mr-3"></i>
              Setting
            </Link>
          </li>
        </ul>

        <div className="footer">
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | Made{" "}
            <i className="icon-heart" aria-hidden="true"></i>
            by <b>hoangtruongvann</b>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
