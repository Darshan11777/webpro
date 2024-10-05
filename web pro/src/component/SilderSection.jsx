import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import maskgroup from '../assets/images/Mask group.png'
import bottomimage from '../assets/images/image 10.png'
import CardSection from './CardSection';
import afterImg from '../assets/images/Group 650.png'
import centerImg from '../assets/images/Ellipse 57 (1).png'

import axios from 'axios';


export default function SilderSection() {
const [data, setData] = React.useState(null);
const baseUrl=import.meta.env.VITE_API_BASE_URL;
 
  // const data = [1, 2, 3]
  const getSlides=async ()=>{
    
      const res = await axios.get(`${baseUrl}slides/our-service`);
      console.log( "res.data",res.data);
      setData(res.data)
    
  }
  useEffect(() => {
    getSlides()
  }, [])
  // console.log( "data && `there is data`",data.length!==0 &&  'there is data ');

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
          { data && data.map((item, index) => {
            return index === 0 ? <CardSection 
            number={(index+1).toString().padStart(2, '0')} 
            key={item.id}
            open={true} 
            title={item.title} 
            description={item.description}
            tags={item.tags}
            image={item.imgUrl} // Pass the image path here
          /> : <CardSection 
          number={(index+1).toString().padStart(2, '0')} 
          key={item.id}
          open={false} 
          title={item.title} 
          description={item.description}
           tags={item.tags}
          image={item.imgUrl} // Pass the image path here
        />
          })}
        </div>
      </div>
    </section>
  )
}
