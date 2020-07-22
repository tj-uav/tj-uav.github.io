import React from "react";
import Button from "./Button";
import "../styles/components/Nav.scss";

const Nav = () => {
  return (
    <nav>
      <h1 className="heading">TJUAV</h1>
      <ul>
        <li className="paragraph">Competition</li>
        <li className="paragraph">Members</li>
        <li className="paragraph">Gallery</li>
        <li>
          <Button className="paragraph">Sponsor</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
