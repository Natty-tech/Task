import React from "react";
import Navbar from "../Components/Navbar";
import classes from "./Personal.module.css";
const Personal = () => {
  return (
    <>
      <Navbar />
      <div className={`${classes.personalwrapper}`}>
        <h2>Ciao NOME ecco i tuoi eventi</h2>
        <div className={`${classes.cardwrapper}`}>
          <div className={`${classes.cards}`}>
            <h2>Nome evento</h2>
            <p>15-10-2022 15:00</p>
            <button>JOIN</button>
          </div>
          <div className={`${classes.cards}`}>
            <h2>Nome evento</h2>
            <p>15-10-2022 15:00</p>
            <button>JOIN</button>
          </div>
          <div className={`${classes.cards}`}>
            <h2>Nome evento</h2>
            <p>15-10-2022 15:00</p>
            <button>JOIN</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
