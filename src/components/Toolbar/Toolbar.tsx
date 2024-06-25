import React from 'react';
import { NavLink } from 'react-router-dom';

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar bg-body-secondary shadow-sm bg-body-tertiary rounded-4 rounded-top-0">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <h4 className="text-uppercase m-0">Books</h4>
        </NavLink>
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Литература
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/нон-фикшн">
              Нон-фикшн
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/писатели">
              Писатели
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;
