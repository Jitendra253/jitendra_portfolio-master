import React, { useContext, useEffect, useState } from "react";
import "./Intro.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import profileImage from "../../img/profileImage.png";
import react from "../../img/react.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    console.log('text:', text);
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[i]);
      i++;
      if (i === text.length) clearInterval(intervalId);
    }, 50);
  }, [text]);
  return <span>{displayText}</span>;
};


const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Jitendra Mahali</span>
          <h1><TypingEffect text="As a full-stack web developer with expertise in React and Node.js, I have the skills and knowledge to develop dynamic and responsive web applications from start to finish.  Let's work together to build the next great web application!" /></h1>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons" >
          <a href="https://www.linkedin.com/in/jitendramahali" target="_blank" rel="noopener noreferrer">
            <LinkedIn color="#00337C" size={"3.5rem"} />
          </a>
          <a href="https://github.com/Jitendra253" target="_blank" rel="noopener noreferrer">
            <Github color="#00337C" size={"3.5rem"} />
          </a>
          <a href="https://www.instagram.com/jitendramahali/" target="_blank" rel="noopener noreferrer">
            <Insta color="#00337C" size={"3.5rem"} />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <svg id="sw-js-blob-svg" viewBox="8 8 70 70" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
              <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <mask id="mask1" mask-type="alpha">
            <path
              fill="url(#sw-gradient)"
              d="M23.6,-27.7C28.9,-23.7,30.4,-14.6,30.1,-6.8C29.7,1.1,27.6,7.9,24.1,13.9C20.7,20,15.9,25.3,9.9,27.5C4,29.8,-3.2,29.1,-9,26.3C-14.8,23.5,-19.2,18.6,-25.3,12.4C-31.5,6.3,-39.3,-1,-39,-7.5C-38.6,-14,-29.9,-19.7,-22.1,-23.3C-14.2,-26.8,-7.1,-28.3,1,-29.5C9.1,-30.7,18.3,-31.7,23.6,-27.7Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              stroke-width="0"
              style={{ transition: "all 0.3s ease 0s" }}
            ></path>
          </mask>
          <g mask="url(#mask1)">
            <path
              fill="url(#sw-gradient)"
              d="M23.6,-27.7C28.9,-23.7,30.4,-14.6,30.1,-6.8C29.7,1.1,27.6,7.9,24.1,13.9C20.7,20,15.9,25.3,9.9,27.5C4,29.8,-3.2,29.1,-9,26.3C-14.8,23.5,-19.2,18.6,-25.3,12.4C-31.5,6.3,-39.3,-1,-39,-7.5C-38.6,-14,-29.9,-19.7,-22.1,-23.3C-14.2,-26.8,-7.1,-28.3,1,-29.5C9.1,-30.7,18.3,-31.7,23.6,-27.7Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              stroke-width="0"
              style={{ transition: "all 0.3s ease 0s" }}
            ></path>
            <image href={profileImage} x="12" y="15" width="70" height="70" alt="" />
          </g>
        </svg>

        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={react}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "12rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Design" text2="Excellence" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
