import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container text-center">
      <span className="text-muted">&copy; {new Date().getFullYear()} ADB</span>
    </div>
  </footer>
);

export default Footer;
