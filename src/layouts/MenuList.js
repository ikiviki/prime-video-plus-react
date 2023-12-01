import { NavLink } from "react-router-dom";

// FC with Arrow fn
const MenuList = () => {
  // must return JSX
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/prime-video">
          Prime Video
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/users">
          User Management
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/products">
          Products
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/todos">
          Todos App
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/unit-testing-demo">
          Unit Testing Demo
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about-us">
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact-us">
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
