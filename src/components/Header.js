import React from 'react';
import PropTypes from 'prop-types';

// Stateless functional component
const Header = ({tagLine}) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{tagLine}</span>
    </h3>
  </header>
);

Header.propTypes = {
    tagLine: PropTypes.string.isRequired
};

export default Header;
