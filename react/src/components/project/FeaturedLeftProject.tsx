import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import { FeaturedProps } from './TypeProject';



const cardLeftVariants: Variants = {
  offscreen: {
    x: -1200
  },
  onscreen: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      staggerDirection: 0
    }
  }
};

function FeaturedLeftProject({ title, details, techUsed, image, github, view }: FeaturedProps): JSX.Element {

  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    });
  useEffect(() => (window.onresize = updateSize), []);

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0 }}
      variants={size.x < 767 ? {} : cardLeftVariants}
      className="featured-project-left"
    >
      <div className="project-description">
        <p className="f-name">Featured Project</p>
        <h3 className="p-title">{title}</h3>
        <p className="p-detail">{details}</p>

        <div className="tech-uses">
          {techUsed.map((e: string) => <p>{e}</p>)}
        </div>

        <div className="links">
          <a href={github} target='_blank'>
            <motion.svg
              whileHover={{ scale: 1.3 }}
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
            </motion.svg>
          </a>
          <a href={view} target='_blank'>
            <motion.svg
              whileHover={{ scale: 1.3 }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
              <path
                d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"
              ></path>
            </motion.svg>
          </a>
        </div>
      </div>

      <div className="project-image">
        <img
          src={image}
          alt={title}
        />
      </div>
    </motion.div>
  )
}

export default FeaturedLeftProject