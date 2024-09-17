import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Only import faChevronDown
import maskgroup from '../assets/images/Mask group (6).png';
import bottomimage from '../assets/images/card_img.png';

export default function CardSection({ open }) {
  // const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [showImage, setShowImage] = useState(open || false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
    setIsRotated(!isRotated); // Toggle image visibility
  };

  return (

<div className="silderr__title card">
  <motion.div 
    className="w-full"
    initial={{ opacity: 0, y: 20, scale: 0.8 }} // Initial state
    whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
    transition={{ duration: 1, ease: 'easeOut' }} // Transition options
  >
    <motion.div
      className="sub__title"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
    >
      <span>01.</span>
      <h3>Web Development</h3>
      <div className="button__text">
        <ul>
          <li><a href="#">Learn more</a></li>
        </ul>
      </div>
      <div className="iconn__section">
        <button 
          className={`icon animation ${isRotated ? 'rotate-icon' : ''}`} 
          onClick={toggleImage}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </motion.div>
    
    <motion.h3 
      className="heading_section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
    >
      Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.
    </motion.h3>
    
    <motion.div 
      className="three__button__Section mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
    >
      <ul>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Web Development</a></li>
      </ul>
    </motion.div>
    
    {/* Conditionally render the image with transition */}
    <motion.div
      className={`bottom__img ${showImage ? 'show' : ''}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: showImage ? 1 : 0, scale: showImage ? 1 : 0.9 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <img src={bottomimage} alt="Bottom Image" className="img-fluid" />
    </motion.div>
  </motion.div>
</div>
  );
}
