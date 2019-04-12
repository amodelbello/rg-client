import React from "react";

export default () => {
  return (
    <footer>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li class="last">item 3</li>
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
};
