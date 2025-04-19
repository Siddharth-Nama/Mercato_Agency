"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
    
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div>
      <div
          className="text-4xl md:text-7xl text-center 
        bg-clip-text text-transparent md:pb-2 bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50 "
        >
          General<br /> AI Agents
        </div>

      <Slider {...settings}>
        
        <>

          <div className="rounded-md px-2 md:p-10">
          <a  href="https://www.youtube.com/watch?v=Xz0fMH6ClKY&ab_channel=RajuSingh-Topic">
          <Image              
              priority
              src="/images/business.jpeg"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl
                      "
            /> 
            <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-4xl text-center mx-auto">
            Customer Service AI Agent</p>
          </a>
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
          <a href="https://www.youtube.com/watch?v=Xz0fMH6ClKY&ab_channel=RajuSingh-Topic"><Image              priority
              src="/images/coffe.jpeg"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </a>
          </div>
        </>

        
        <>
          <div className="rounded-md px-2 md:p-10">
            <a href="https://www.youtube.com/watch?v=Xz0fMH6ClKY&ab_channel=RajuSingh-Topic"><Image
              priority
              src="/images/man.jpeg"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
            </a>
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
          <a href="https://www.youtube.com/watch?v=Xz0fMH6ClKY&ab_channel=RajuSingh-Topic"><Image              priority
              src="/images/image-business.jpeg"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </a>
          </div>
        </>
      </Slider>
    </div>
  );
};

export default SliderOne;
