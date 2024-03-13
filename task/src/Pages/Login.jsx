import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Navbar />
      <div className={`${classes.registerwrapper}`}>
        <h2>Hai gia un account?</h2>
        <form action="">
          <div className={`${classes.inputs}`}>
            <label htmlFor="">Inserisci l'e-mail</label>
            <input type="email" placeholder="name@example.com" />
          </div>
          <div className={`${classes.inputs}`}>
            <label htmlFor="">Inserisci la password</label>
            <div id={`${classes.flex}`}>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={visible ? "text" : "password"}
                placeholder="Scrivila qui"
              />
              {visible ? (
                <VisibilityIcon
                  style={{ color: "rgb(0, 87, 255)" }}
                  onClick={() => {
                    setVisible((prev) => !prev);
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  style={{ color: "rgb(0, 87, 255)" }}
                  onClick={() => {
                    setVisible((prev) => !prev);
                  }}
                />
              )}
            </div>
          </div>
          <div>
            <Link
              style={{ width: "100%", textDecoration: "none" }}
              to="/Personal"
            >
              {" "}
              <button>ACCEDI</button>{" "}
            </Link>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="">
              Non hai ancora un profilo? <span>Registrati</span>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
