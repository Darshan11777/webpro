import React from 'react'
import {motion} from 'framer-motion'
export default function OurProgessSectionCard() {
  return (
    
      <motion.div className="row">
        {/* Number Section */}
        <motion.div
          className="lg:w-[16.66%] md:w-[16.66%] sm:w-full w-full"
          initial={{ opacity: 0, y: 150, scale: 1 }} // Initial state
          whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="number__Section">
            <span>.01</span>
          </div>
        </motion.div>
  
        {/* Research Section */}
        <motion.div
          className="lg:w-[83.3%] md:w-[83.3%] sm:w-full w-full"
          initial={{ opacity: 0, y: 100, scale: 1 }} // Initial state
          whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Add a delay for staggered effect
        >
          <div className="reserach__section">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
              Research and Discovery
            </motion.h2>
          
          <motion.div
            className="Research_details mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            <p>Identify who your target audience is, including their needs, pain points, and how your services can address these.</p>
          </motion.div>
  
          <motion.div
            className="mainn__reserach"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
          >
            <div className="research__sec">
              <ul>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
                >
                  <a>Research</a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
                >
                  <a>Goals</a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 1.4 }}
                >
                  <a>Discovery</a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
          </div>
        </motion.div>
      </motion.div>
  )
}
