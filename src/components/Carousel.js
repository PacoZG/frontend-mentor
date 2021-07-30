import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const CarouselComp = ({ img1, img2 }) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Link
          className="text-gray-200 hover:text-indigo-300 hover:underline"
          to="/stats_preview"
        >
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Link>

        <Carousel.Caption>
          <h1 className="text-sm">Stats Preview</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          className="text-gray-200 hover:text-indigo-300 hover:underline"
          to="/profile_card"
        >
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Link>
        <Carousel.Caption>
          <h1 className="text-sm">Profile Card</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
