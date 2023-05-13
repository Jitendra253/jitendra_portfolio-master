import React, { useContext, useEffect, useState } from "react";
import "./Intro.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
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
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={profileImage} alt="" />
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
          initial={{ left: "9rem", top: "18rem" }}
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
