import React from 'react'
import { motion, Variants } from 'framer-motion'

const upAnimation: Variants = {
  offscreen: {
    y: 200,
    opacity: 0.6
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const namePassionAnimation: Variants = {
  offscreen: {
    x: -800,
    opacity: 0.6
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const profilePictureAnimation: Variants = {
  offscreen: {
    x: 800,
    opacity: 0.6
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

function Home(): JSX.Element {
  return (
    <div className="home">
      <div className="left-home">
        <motion.div
          initial="offscreen"
          animate="onscreen"
          variants={namePassionAnimation}
          className="name"
        >
          <p>Hi! 👋 I am <span>Kurt Russelle Marmol.</span></p>
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          variants={namePassionAnimation}
          className="career-path"
        >
          <h1>An Aspiring Full-Stack Engineer from Philippines</h1>
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          variants={upAnimation}
          className="passion">
          I am a passionate MERN Stack Developer with expertise in building
          web and mobile application. I am dedicated to delivering quality and
          user-friendly solutions that meet my client’s needs.
        </motion.div>
        <a href="#contact">
          <motion.button
            initial="offscreen"
            animate="onscreen"
            variants={upAnimation}
          >
            CONTACT ME
          </motion.button>
        </a>
      </div>
      <motion.div
        className="right-home"
        initial="offscreen"
        animate="onscreen"
        variants={profilePictureAnimation}
      >
        <div className="my-image"></div>
        <div className="social-media">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.3 }}
            className="medium">
            <a href="https://xkurtph.medium.com/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4093 12.2471C13.4093 15.6973 10.6314 18.4944 7.20454 18.4944C3.77771 18.4944 1 15.6982 1 12.2471C1 8.79604 3.77792 6 7.20454 6C10.6312 6 13.4093 8.79688 13.4093 12.2471ZM20.216 12.2471C20.216 15.4951 18.8269 18.1278 17.1136 18.1278C15.4003 18.1278 14.0112 15.4942 14.0112 12.2471C14.0112 8.99998 15.4003 6.36639 17.1136 6.36639C18.8269 6.36639 20.216 8.99998 20.216 12.2471ZM23 12.2471C23 15.1571 22.5114 17.516 21.9088 17.516C21.3063 17.516 20.8177 15.1563 20.8177 12.2471C20.8177 9.33792 21.3063 6.97822 21.9091 6.97822C22.5118 6.97822 23 9.33729 23 12.2471Z"
                />
              </svg>
            </a>

          </motion.div>

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.3 }}
            className="facebook">
            <a href="https://www.facebook.com/jkrmarmol">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
                ></path>
              </svg>
            </a>

          </motion.div>

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.3 }}
            className="github">
            <a href="https://github.com/jkrmarmol">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
            </a>

          </motion.div>

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.3 }}
            className="linkedin">
            <a href="https://linkedin.com/in/jkrmarmol">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
                ></path>
              </svg>
            </a>

          </motion.div>
        </div>
      </motion.div>
    </div >
  )
}

export default Home