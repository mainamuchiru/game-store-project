import { Link } from "react-router-dom";
import Products from "../pages/Products";
import AdminLandingPage from "../pages/adminpanel/AdminLandingPage";
import Contacts from "../pages/Contacts"
import Home from "../pages/Home"

function NavBar() {
  console.log("Hello World");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Gaming Store
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/"  className="nav-link active" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/adminpanel" className="nav-link" >
                Admin Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contacts" className="nav-link">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
     
    </nav>
    
  );
}

export default NavBar;
