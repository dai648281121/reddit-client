// src/components/Header.js
import React from 'react';


const Header = ({ title, subtitle }) => {
  return (
    <header className="App-header">
      <div className="App-header-text">
        {/* add logo to h1 */}
        <h1>
        <img src="https://pbs.twimg.com/profile_images/1729909787029078016/dBjB3Fnr_400x400.jpg" alt="Logo" className="header-logo" />
          {title}
        </h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: 'RedditMinimal',
  subtitle: '', // Optional
};

export default Header;
