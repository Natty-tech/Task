import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={`${classes.navbarwrapper}`}>
        <span>
          Edu <br /> Sogno
        </span>
      </div>
    </>
  );
};

export default Navbar;
