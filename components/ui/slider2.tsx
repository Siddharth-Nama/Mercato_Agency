"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderTwo = () => {
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
    rtl : true,
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div>
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

export default SliderTwo;
