import React from 'react'
import { motion } from 'framer-motion'

function Circle() {
  return (
    <div className="circle-03">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 7, repeat: Infinity, type: "spring", bounce: 0.9 }}
        className="c1"
      >
      </motion.div>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 7, repeat: Infinity, type: "spring", bounce: 0.9 }}
        className="c2"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, type: "spring", bounce: 0.9 }}
          className="c3"
        ></motion.div>
      </motion.div>
    </div >
  )
}

export default Circle