import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import maskgroup from '../assets/images/Mask group.png'
import bottomimage from '../assets/images/image 10.png'
import CardSection from './CardSection';
import afterImg from '../assets/images/Group 650.png'
import centerImg from '../assets/images/Ellipse 57 (1).png'


export default function SilderSection() {

  const data = [1, 2, 3]

  return (
    <section className="silder_section relative " >
      <div className="absolute top-[50%] left-[0px] h-[500px] w-[130px] animate-scaleUpDown">
        <img src={centerImg} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="container  relative">
        {/* <div className='absolute top-[-50px] right-[20px] h-[130px] w-[130px] '>
        <img src={afterImg} alt="" className='h-full w-full object-cover '/>
      </div> */}
        <div className="absolute top-[-50px] right-[20px] h-[130px] w-[130px] animate-scaleUpDown">
          <img src={afterImg} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="cards-container">
          {data.map((item, index) => {
            return index === 0 ? <CardSection key={index} open={true} /> : <CardSection key={index} />
          })}
        </div>
      </div>
    </section>
  )
}
