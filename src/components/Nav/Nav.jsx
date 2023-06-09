import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

function Nav() {
  return (
    <>
      <button className="Main-navigation-button" type="button">
        <MenuIcon width="22px" height="22px" />
      </button>
      <nav className="Main-navigation">
        <ul>
          <li>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
