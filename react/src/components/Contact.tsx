import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left-contact">
        <div className="contact-me">
          <h2>Contact Me.</h2>
          <p>
            Thank you for visiting my website! If you have any questions,
            comments, or business inquiries, please don't hesitate to contact
            me. I would be happy to hear from you and will do my best to
            respond as soon as possible.
            <br />
            <br />
            You can reach me via email at
            <span> jkurtrussellemarmol@gmail.com</span> or by filling out the
            contact form right. Please provide your name, email address, and a
            brief message, and I'll get back to you as soon as I can.
            <br />
            <br />
            I appreciate your interest and look forward to hearing from you!
          </p>
        </div>
      </div>

      <div className="right-contact">
        <div className="send-message">
          <h2>Send a message.</h2>
          <div className="form-inline">
            <input type="text" id="name" placeholder="Name" />
            <input type="text" id="email" placeholder="Email" />
          </div>
          <input type="text" id="subject" placeholder="Subject" />
          <br />
          <textarea
            name=""
            id="message"
            rows={13}
            placeholder="Message"
          ></textarea>

          <div className="form-button">
            <motion.button whileHover={{ scale: 1.1 }}>SEND MESSAGE</motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact