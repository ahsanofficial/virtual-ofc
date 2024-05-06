import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left_arrow from "../../../assets/icons/landing-page-two/carousel/left_arrow.svg";
import right_arrow from "../../../assets/icons/landing-page-two/carousel/right_arrow.svg";
import left_plain_arrow from "../../../assets/icons/landing-page-two/carousel/left_plain_arrow.svg";
import right_plain_arrow from "../../../assets/icons/landing-page-two/carousel/right_plain_arrow.svg";
import ClientComponent from "./ClientComponent";
import Image from "next/image";


const testimonialsList = [
  {
    clientName: "Sarah, Founder",
    review:"I travel frequently, but thanks to LaunchWise's virtual office, I can run my consultancy from anywhere. It's flexible, reliable, and keeps me connected."
  },
  {
    clientName: "Kajal, Co-Founder",
    review:"As a small business owner, LaunchWise's virtual office allowed me to scale without the overhead. Their support team is responsive, and the setup was seamless."
  },
  {
    clientName: "Rahul, Owner",
    review:"LaunchWise's virtual office helped us establish a presence in new markets without the cost of physical expansion. It's been instrumental in our growth strategy."
  },
  {
    clientName: "Deepak, CEO",
    review:"With LaunchWise, our remote team feels connected and professional. Their virtual office services have simplified our operations and boosted our productivity."
  },


]


interface ColorProps {
  clientTestmonailColor?: string;
}
const Carousel: React.FC<ColorProps> = ({ clientTestmonailColor })=> {
  const CustomPrevArrow: React.FC<CustomArrowProps> = ({
    className,
    onClick,
  }) => {
    return (
      <div className={`${className} left-arrow`} onClick={onClick}>
        {/* Desktop arrow */}
        <div className="desktop_arrow">
          <Image onClick={onClick} src={left_arrow} alt="Previous" />
        </div>
        {/* Mobile arrow */}
        <div className="mobile_arrow">
          <Image src={left_plain_arrow} alt="Previous" />
        </div>
      </div>
    );
  };

  const CustomNextArrow: React.FC<CustomArrowProps> = ({
    className,
    onClick,
  }) => {
    return (
      <div className={`${className} right-arrow`} onClick={onClick}>
        {/* Desktop arrow */}
        <div className="desktop_arrow">
          <Image onClick={onClick} src={right_arrow} alt="next" />
        </div>
        {/* Mobile arrow */}
        <div className="mobile_arrow">
          <Image src={right_plain_arrow} alt="next" />
        </div>
      </div>
    );
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="slider-container">
      <div className="container">
        <Slider {...settings}>

          {
            testimonialsList.map((testimonial, index) => {
              return (
                <div key={index}>
                  <ClientComponent clientTestmonailColor={clientTestmonailColor} clientName={testimonial.clientName} review={testimonial.review}/>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
