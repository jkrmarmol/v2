import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion';
import FeaturedRightProject from './FeaturedRightProject';
import FeaturedLeftProject from './FeaturedLeftProject';
import BmisCover from '../../assets/images/bims.png';
import { projectInfo } from './projectInfo';
import { FeaturedProps } from './TypeProject';

const cardRightVariants: Variants = {
  offscreen: {
    x: 1200
  },
  onscreen: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      staggerDirection: 0.5
    }
  }
};

const cardLeftVariants: Variants = {
  offscreen: {
    x: -1200
  },
  onscreen: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      staggerDirection: 0.5
    }
  }
};

function Project() {
  return (
    <div className="project" id="project">
      <div className="proj-header">
        <h2>My Project.</h2>
        <p>
          I am proud to showcase a diverse portfolio of web development,
          mobile development, and web design projects that demonstrate
          my expertise in various technologies 😎
        </p>
      </div>

      {projectInfo.map((e: FeaturedProps, index: number) => {
        if (index % 2) {
          return <FeaturedLeftProject {...e} />
        } else {
          return <FeaturedRightProject {...e} />
        }
      })}

      <div className="view-all">
        <a href="https://github.com/jkrmarmol?tab=repositories" target='_blank'>
          <motion.button whileHover={{ scale: 1.1 }}>VIEW ALL</motion.button>
        </a>
      </div>
    </div >
  )
}

export default Project