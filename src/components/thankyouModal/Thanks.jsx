import React, { useContext } from "react";
import "./thanks.css";
import Lottie from "react-lottie-player";
import animation from "../../heart.json";
import darkanimation from "../../heartBlack.json";
import { ThemeContext } from "../../context";

const Thanks = ({ setShowModal }) => {
  const theme = useContext(ThemeContext);
  const { darkmode } = theme.state;
  return (
    <div className="modal-overlay">
      <div
        style={{
          backgroundColor: darkmode ? "#333" : "#fff",
          color: darkmode ? "#fff" : "#000",
        }}
        className="modal"
      >
        <div className="modal-content">
          <Lottie
            style={{
              display: "flex",
              alignItems: "center",
              width: "300px",
              height: "300px",
            }}
            animationData={darkmode ? darkanimation : animation}
            play
          />
          <h2>You've won my heart!</h2>
          <p>Your message has won my affection.</p>
          <button
            className="modal-close-btn"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
