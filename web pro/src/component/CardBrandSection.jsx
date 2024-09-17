import React from 'react'
import image12 from "../assets/images/silder_img.png"
import arrowimg from "../assets/images/arrow_img.png"
export default function CardBrandSection() {
  return (
    <div className="main__details card-brand">
    <div className="img_section">
      <img src={image12} className="img__left"/>
    </div>
    <div className="all__section">
      <div className="main__part">
        <div className="desinger__name">
          <span>Website design</span>
        </div>
        <div className="desinger__name">
          <span>Website design</span>
        </div>
        <div className="desinger__name">
          <span>Website design</span>
        </div>
      </div>
    </div>
    <div className="text__details flex ">
      <p className="w-[90%]">Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy </p>
      <div className="text__img">
        <img src={arrowimg} className="arrow_img "/>
      </div>
    </div>
    </div>
  )
}
