import React from "react";
import ImgPrev from '../../assets/images/btn_prev.png'
import ImgNext from '../../assets/images/btn_next.png'

const CarouselControl = (props) => {
  const { onClick, className, prev } = props
  return (
    <button onClick={onClick} className={`${className}`}>
      <img src={prev ? ImgPrev : ImgNext} alt="arrow" />
    </button>
  )
}

export default CarouselControl