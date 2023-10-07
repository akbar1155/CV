import React from 'react';
import { Carousel } from 'antd';
import avtoelon from "../../assets/autoelon.png";
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carouselimg = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>    <img src={avtoelon} alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Carouselimg;