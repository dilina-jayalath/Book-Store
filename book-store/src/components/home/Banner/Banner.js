import React, { useState } from "react";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
} from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),

  };
  return (
    <div className=" bg-white h-full ">
      <Slider {...settings}>
        {/* <Link to="/#"> */}
          <div>
            <Image imgSrc={bannerImgOne} className="h-full" />
          </div>
        {/* </Link> */}
        {/* <Link to="/#"> */}
          <div>
            <Image imgSrc={bannerImgTwo} />
          </div>
        {/* </Link> */}
        <div>
            <Image imgSrc={bannerImgThree} />
          </div>
          <div>
            <Image imgSrc={bannerImgFour} />
          </div>

      </Slider>
    </div>
  );
};

export default Banner;