import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import classes from "./Registration.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
const Login = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Navbar />
      <div className={`${classes.loginwrapper}`}>
        <h2>Crea il tuo account</h2>
        <form action="">
          <div className={`${classes.inputs}`}>
            <label htmlFor="">inserisci il nome</label>
            <input type="text" placeholder="Mario" required />
          </div>
          <div className={`${classes.inputs}`}>
            {" "}
            <label htmlFor="">inserisci il cognome</label>
            <input type="text" placeholder="Rossi" required />
          </div>
          <div className={`${classes.inputs}`}>
            <label htmlFor="">inserisci l'email</label>
            <input type="email" placeholder="name@example.com" required />
          </div>
          <div className={`${classes.inputs}`}>
            <label htmlFor="">inserisci la password</label>
            <div id={`${classes.flex}`}>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={visible ? "text" : "password"}
                placeholder="Scrivila qui"
                required
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
            <button type="submit">REGISTRATI</button>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="">Hai gia un account? Accedi</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
