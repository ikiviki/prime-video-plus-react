// FC with Arrow fn
const MenuList = () => {
  // must return JSX
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/prime-video">
          Prime Video
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/users">
          User Management
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/products">
          Products
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/todos">
          Todos App
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/unit-testing-demo">
          Unit Testing Demo
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about-us">
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact-us">
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
