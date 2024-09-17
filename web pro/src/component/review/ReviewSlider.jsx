import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewCard from './ReviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ReviewSlider() {
  const reviews = [0, 1, 2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(true);

  const handlePrevSlide = () => {
    if (!animationComplete) return;
    setAnimationComplete(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    if (!animationComplete) return;
    setAnimationComplete(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  <motion.div
      className="relative w-full h-[600px]"
      initial={{ opacity: 0, y: 0, scale: 0.8 }} // Initial state
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
      transition={{ duration: 1, ease: 'easeOut' }} // Transition options
    >
      <button
        className="absolute top-[40%] left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center z-10"
        onClick={handlePrevSlide}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="relative overflow-hidden w-full h-full">
        <AnimatePresence
          onExitComplete={() => setAnimationComplete(true)}
        >
          {reviews.map((review, index) =>
            index === currentIndex ? (
              <motion.div
                key={index}
                className="absolute w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, x: 100 }}  // Start with x translation
                animate={{ opacity: 1, scale: 1, x: 0 }}  // Move to original position with x: 0
                exit={{ opacity: 0, scale: 0.8, x: -100 }}  // Move out with negative x translation
                transition={{ duration: 1, ease: 'easeOut' }}  // Transition options
              >
                <ReviewCard review={review} />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <button
        className="absolute top-[40%] right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center z-10"
        onClick={handleNextSlide}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </motion.div>
  );
}
