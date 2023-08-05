import React from 'react'
import Carousel from 'nuka-carousel'
const Section6 = () => {
  return (
    <Carousel
    defaultControlsConfig={{ nextButtonText: ">", prevButtonText: "<" }}
    autoplay={true}
    autoplayInterval={6000}
    wrapAround={true}
    dragging={true}
    cellAlign="center"
    slidesToShow={window.innerWidth > 768 ? 3 : 1}
    className=""
>
    
    
    
    <Carousel/>
  )
}

export default Section6
