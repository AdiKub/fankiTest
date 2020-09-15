import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import * as eva from 'eva-icons';

const Navbar = () => {

  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    eva.replace()
  })

  return (
    <div className='navbar'>

      <nav className="bs-dashboard-nav">
        <ul className="bs-dashboard-nav--list">

          <li className="menu-item bs-collapse">
            <span className="menu-item--link" onClick={() => console.log('zxczxc')}>

              <span className="link-text">Company Name</span>
            </span>
            <div className="bs-collapse--content">
              <ul className="sub-menu-list">
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/"

                  >Summary</Link>
                </li>
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/"

                  >Earnings</Link>
                </li>
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/"

                  >Deposits</Link>
                </li>
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/"

                  >Transactions</Link>
                </li>
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/"

                  >Stats & Reporting</Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item bs-collapse">
            <span className="menu-item--link" onClick={() => console.log('zxczxc')}>
              <i className="link-icon icon-bs-user"></i>
              <span className="link-text">My Profile</span>
            </span>
            <div className="bs-collapse--content">
              <ul className="sub-menu-list">
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/stylist-profile/stylist-info"

                  >Stylist Info</Link>
                </li>
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/"

                  >Portfolio</Link>
                </li>
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/"

                  >Categories</Link>
                </li>
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/"

                  >Opening Hours</Link>
                </li>
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/"

                  >Work Schedule</Link>
                </li>
                <li className="sub-menu-item">
                  <Link
                    className="sub-menu-item--link"
                    to="/"

                  >Services</Link>
                </li>
              </ul>
            </div>
          </li>

        </ul>
      </nav>
    </div>
  )
}
export default Navbar;
