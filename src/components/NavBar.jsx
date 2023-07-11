import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

const links = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: 'calculator',
    text: 'Calculator',
  },
  {
    path: 'quotes',
    text: 'Quotes',
  },
];

export default function NavBar() {
  return (
    <>
      <header style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
      >
        <h1>Math Magicians</h1>
        <nav id="nav-bar">
          <ul id="nav-ul">
            {links.map((link) => (
              <li className="ul-links" key={link.text}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div id="outlet">
        <Outlet />
      </div>
    </>
  );
}
