// components/Layout.jsx
import { NavLink, Outlet } from 'react-router-dom'
//import AppBar from '@mui/material/AppBar';

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">MyBrand</div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      
      {/* The Outlet renders the child route components */}
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}
