import React from 'react'
import clientphoto from '../../assets/images/cilent_photo.png'
import starimage from '../../assets/images/star_image.png'
import afterImg from '../../assets/images/Group 650.png'
import { motion } from 'framer-motion';



const ReviewCard = () => {
  return (
    <motion.div
      className="our_cilents_section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container relative">
        <div className="absolute top-[-50px] z-[-1] right-[-10px] h-[130px] w-[130px] animate-scaleUpDown">
          <img src={afterImg} alt="Background" className="h-full w-full object-cover" />
        </div>
        <div className="row justify-between">
          <div className="lg:w-[25%] md:w-[25%] sm:w-full w-full">
            <div className="cilent__photo">
              <img src={clientphoto} alt="Client" />
            </div>
          </div>
          <div className="lg:w-[66%] md:w-[66%] sm:w-full w-full">
            <div className="Cilent__details">
              <div className="Cilent__img">
                <img src={starimage} alt="Star" />
              </div>
              <p className='mb-5'>
                Working with [Your Company] has been a game-changer for our business. Their team not only resolved our immediate IT issues but also provided valuable insights for future growth.
              </p>
              <div className="cilent__main">
                <h3 className='text-[30px] mb-2'>Jane Doe, CEO of XYZ Corp.</h3>
              </div>
              <div className="email__details">
                <h5>abc12345@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ReviewCard;