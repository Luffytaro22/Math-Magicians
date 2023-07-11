import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import styles from '../styles/navBar.module.css';

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
      <div className={styles.divlink}>
        <h1>Math Magicians</h1>
        <nav id="nav-bar">
          <ul id="nav-ul" className={styles.navul}>
            {links.map((link) => (
              <li className={styles.ulinks} key={link.text}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="outlet">
        <Outlet />
      </div>
    </>
  );
}
