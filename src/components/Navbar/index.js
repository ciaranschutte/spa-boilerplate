import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


/**
 * 
 * @param {*} param0 
 */
const Navbar = ({ items }) => (
  <div>
    <p>Navbar</p>
    {
      items.map((el, i) => 
        <Link to={el.path} key={i}> { el.title } </Link>
      )
    }
  </div>
);

Navbar.propTypes = {
  items: PropTypes.array
}

export default Navbar;