import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/imageSlider.css'; // Ensure this path is correct
import uvb from '../images/promoimages/uvb.png';
import stock1 from '../images/promoimages/stock1.png';
import stock2 from '../images/promoimages/stock2.jpg';
import stock3 from '../images/promoimages/stock3.jpg';
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000
  };

  const images = [
    stock1,
    stock2,
    stock3
  ];

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
