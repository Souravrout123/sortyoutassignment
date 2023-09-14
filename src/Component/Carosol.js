import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import images from "../Component/Assets/images.jpeg";
import image1 from "../Component/Assets/image1.jpeg";
import images3 from "../Component/Assets/image3.jpeg";

const Carosol = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images}
          alt="Sunset over beach"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Rob Roy Glacier"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images3}
          alt="Longtail boats at Phi Phi"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carosol;
