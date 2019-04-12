import React from 'react';

const Footer = () => (
  <footer>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li className="last">item 3</li>
    </ul>

    <style jsx>{`
      footer ul li {
        float: left;
        margin-right: 60px;
      }
      footer ul li.last {
        clear: both:
      }
    `}</style>
  </footer>
);

export default Footer;
