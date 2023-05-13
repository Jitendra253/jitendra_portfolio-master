import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'

import { themeContext } from '../../Context'
import { useContext } from "react";
const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vfv5ze', 'template_poad6ra', form.current, 'q5isx0oNU-i-TbCDx')
      .then((result) => {
        console.log(result.text);
        setDone(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
          <span>Contact Me</span>
          <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" required />
          <input type="email" name="user_email" className="user" placeholder="Email" required />
          <textarea name="message" className="user" placeholder="Message" required ></textarea>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting Me"}</span>

          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
}
export default Contact;