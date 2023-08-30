import React from "react";
import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            className="about-img"
            src="https://images.pexels.com/photos/17944818/pexels-photo-17944818/free-photo-of-young-man-taking-photographs-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          Where Design Passion Meets Expert Development!
        </p>
        <p className="about-desc">
          I'm a versatile software engineer with a passion for frontend
          technologies, a flair for design, and a knack for web development.
          With a keen eye for aesthetics and a deep understanding of
          cutting-edge tools, I specialize in turning ideas into visually
          stunning and functionally robust web solutions. Guided by the belief
          that technology and design should harmonize seamlessly, I am dedicated
          to crafting immersive online experiences that captivate users and
          drive meaningful engagement.
        </p>
        <div className="about-award">
          <img src={Award} className="about-award-img" />
          <div className="about-award-texts">
            <h4 className="about-award-title">
              Conquering Algorithms: Achieving the LeetCode 100-Day Badge
            </h4>
            <p className="about-award-desc">
              Embracing the challenge of sharpening my coding skills, I embarked
              on a 100-day journey with LeetCode. Through consistent effort,
              determination, and countless lines of code, I earned the
              prestigious LeetCode 100-Day Badge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
