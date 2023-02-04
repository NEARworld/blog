import React from "react";
import { headerStyle } from "styles";

export const Header = () => {
  const { div, ul } = headerStyle;
  return (
    <div className={div.container}>
      <div>my blog</div>
      <nav>
        <ul className={ul.menuContainer}>
          <li>tech</li>
          <li>math</li>
          <li>books</li>
        </ul>
      </nav>
    </div>
  );
};
