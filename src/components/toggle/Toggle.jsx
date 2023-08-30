import React, { useContext } from "react";
import "./toggle.css";
import Sun from "/images/sun.png";
import Moon from "/images/moon.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const themeContext = useContext(ThemeContext);

  const toggleHandler = () => {
    themeContext.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className={`toggle ${themeContext.state.darkmode ? "dark" : "light"}`}>
      <img className="toggle-icon" src={Sun} alt="" />
      <img className="toggle-icon" src={Moon} alt="" />
      <div
        className="toggle-button"
        onClick={toggleHandler}
        style={{ right: themeContext.state.darkmode ? "25px" : "0px" }}
      ></div>
    </div>
  );
};

export default Toggle;
