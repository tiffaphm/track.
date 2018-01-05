import React from 'react';
import './styles/Nav.css';

const Nav = () => {
  let navContainer = null;
  let navMenu = null;

  const addFixedClass = (event) => {
    if (window.scrollY > 144) {
      navContainer.classList.add('light', 'fixed');
      navMenu.classList.remove('inverted');
    } else {
      navContainer.classList.remove('light', 'fixed');
      navMenu.classList.add('inverted');
    }
  };

  window.addEventListener('scroll', addFixedClass);

  return (
    <div className="nav-container" ref={(div) => { navContainer = div; }}>
      <div className="ui container nav-content">
        <div className="ui large secondary menu inverted" ref={(div) => { navMenu = div; }}>
          <a className="view-ui item">track.</a>
          <a className="item">goals</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
