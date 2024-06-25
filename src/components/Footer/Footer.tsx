const Footer = () => {
  return (
    <nav className="navbar shadow-sm rounded-4 rounded-bottom-0 p-3">
      <div className="container d-flex justify-content-center align-items-center">
        <ul className="navbar-nav d-flex flex-row gap-4 flex-nowrap">
          <li className="nav-item">
            <a href="#" className="footer-link">О нас</a>
          </li>
          <li className="nav-item">
            <a href="#" className="footer-link">Лицензия</a>
          </li>
          <li className="nav-item">
            <a href="#" className="footer-link">Блог</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;