import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav class='bg-primary'>
      <h1>
        <i class={icon}> {title}</i>
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github-Finder',
  icon: 'fab fa-github fa-2x'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
