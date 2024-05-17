import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left_arrow from "../../assets/icons/private-limited-company-registration/carousel/left_arrow.svg";
import right_arrow from "../../assets/icons/private-limited-company-registration/carousel/right_arrow.svg";
import ClientComponent from "./ClientComponent";
import Image from "next/image";
import clientimg1 from '../../assets/images/private-limited-company-registration/carouselimg1.png'
import clientimg2 from '../../assets/images/private-limited-company-registration/carouselimg2.png'
import clientimg3 from '../../assets/images/private-limited-company-registration/carouselimg3.png'


const testimonialsList = [
  {
    image: clientimg1,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"There was a bit of to and fro but the RegisterKaro team kept me updated on the whole process. Special shout out to Joel for being so helpful!. Overall, I'm very pleased with the service and would definitely recommend it to anyone who's looking for an easy way to register a business.Onwards and upwards!"
  },
  {
    image: clientimg2,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"Team Register Karo helped our company incorporated into MCA.Team was very professional and cooperative.Response to all our doubts were cleared well."
  },
  {
    image: clientimg3,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"RegisterKaro, Enough said.If you want prompt service and precise direction get in touch with RegisterKaro.Amazing service, on-time response, and super courteous people make the business experience beautiful."
  },
  {
    image: clientimg3,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"RegisterKaro, Enough said.If you want prompt service and precise direction get in touch with RegisterKaro.Amazing service, on-time response, and super courteous people make the business experience beautiful."
  },
  {
    image: clientimg1,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"There was a bit of to and fro but the RegisterKaro team kept me updated on the whole process. Special shout out to Joel for being so helpful!. Overall, I'm very pleased with the service and would definitely recommend it to anyone who's looking for an easy way to register a business.Onwards and upwards!"
  },
  {
    image: clientimg2,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"Team Register Karo helped our company incorporated into MCA.Team was very professional and cooperative.Response to all our doubts were cleared well."
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
      </div>
    );
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows:false,
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite:false,
        }
      }
    ]
  };

  return (
    <div className="landingpage3-test-slider">
      <div className="container">
        <Slider {...settings}>
          {
            testimonialsList.map((testimonial, index) => {
              return (
                <ClientComponent
                  key={index}
                  image={testimonial.image.src}
                  stars={testimonial.stars}
                  clientName={testimonial.clientName}
                  review={testimonial.review}
                />
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
