import React, { useState, useEffect, useRef } from 'react';
import user from '../images/user.png';
import {
  FaSearch,
  FaCaretDown,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt
} from 'react-icons/fa';

import '../styles/components/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleProfileClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="search_bar">
        <input type="text" placeholder="Rechercher..." />
        <FaSearch className="search_icon" />
      </div>
      <div className="profile_image" ref={menuRef}>
        <img src={user} alt="user" className="user_image" onClick={handleProfileClick} />
        <FaCaretDown className="dropdown_icon" onClick={handleProfileClick} />
        {isMenuOpen && (
          <div className="dropdown_menu">
            <ul>
              <div className="menu_links_container"> {/* Conteneur des liens du menu */}
                <li>
                  <FaUser className="dropdown_menu_icon" />{' '} 
                  <span className="menu_text">Edit Profile</span>
                </li>
                <li>
                  <FaCog className="dropdown_menu_icon" />{' '}
                  <span className="menu_text">Account Settings</span>
                </li>
                <li>
                  <FaQuestionCircle className="dropdown_menu_icon " />{' '} 
                  <span className="menu_text">Help Center</span>
                </li>
              </div>
              <hr className="separator_line" />
              <li className="logout">
                <FaSignOutAlt className="dropdown_menu_icon" />{' '} 
                <span className="menu_text">Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
