import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useState } from 'react';
import logo from '../images/logo.png';
import '../styles/components/Sidebar.css';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Home from './Home';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh />
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: <FaRegChartBar />
    },
    {
      path: '/comment',
      name: 'Comment',
      icon: <FaCommentAlt />
    },
    {
      path: '/product',
      name: 'Product',
      icon: <FaShoppingBag />
    },
    {
      path: '/productList',
      name: 'Product List',
      icon: <FaThList />
    }
  ];

  return (
    <div className="container">
      <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            <img src={logo} alt="Logo" className="logo" style={{ width: '130px', height: '90px' }} />
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={`link ${isOpen ? '' : 'hide'}`}
            activeClassName="active"
          >
            <div className={`icon ${isOpen ? '' : 'closed'}`}>{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>
        <Home isOpen={isOpen} />
      </main>
    </div>
  );
};

export default Sidebar;
