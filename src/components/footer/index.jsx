import React from "react";
import '../../App.css';

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>© {new Date().getFullYear()}, <b>Black React</b> is a page to help developers with React components, inspirations, themes and everything that involves development mobile/web.</li>
      </ul>
    </div>
  );
}

export default Footer;
