import React from "react";
import pics2 from "../../assets/pic1.jpg";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Testimonial = () => {
  const testInfo = [
    {
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error qui doloremque nisi, molestiae harum!",
      name: "name",
      title: "title",
      picture: pics2,
    },
    {
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error qui doloremque nisi, molestiae harum!",
      name: "name",
      title: "title",
      picture: pics2,
    },
    {
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error qui doloremque nisi, molestiae harum!",
      name: "name",
      title: "title",
      picture: pics2,
    },
    {
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error qui doloremque nisi, molestiae harum!",
      name: "name",
      title: "title",
      picture: pics2,
    },
  ];
  return (
    <div className=" bg-[#EEEEEE] w-full py-10 md:py-14 mont h-auto">
      <div className="  w-[90%] md:w-[80%] mx-auto ">
        <h3 className="text-xl md:text-2xl font-bold myshade pb-5 md:pb-8 text-center capitalize">
          Testimonials
        </h3>

        <div className=" hidden md:block mont">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            Navigation
            autoplay={{
              delay: 7000,
            }}
            pagination={{ clickable: true }}
          >
            {testInfo.map((data, id) => (
              <SwiperSlide>
                <div
                  key={id}
                  className=" rounded-md shadow-2xl py-12 border-solid border-[#393E46] border-[1px]"
                >
                  <div className=" w-[90%] mx-auto flex flex-col gap-5">
                    <div className=" ">
                      "<em>{data.msg}</em>"
                    </div>

                    <div className=" flex justify-center items-center gap-3">
                      <span className=" w-20 h-20  ">
                        <img
                          src={data.picture}
                          alt="pix"
                          className=" rounded-full shadow object-cover w-full h-full"
                        />
                      </span>

                      <div>
                        <p>{data.name}</p>
                        <p>{data.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Swiper on mobile devices */}
        <div className=" w-[90%] mx-auto md:hidden mont">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            Navigation
            autoplay={{
              delay: 5000,
            }}
            pagination={{ clickable: true }}
          >
            {testInfo.map((data, id) => (
              <SwiperSlide>
                <div
                  key={id}
                  className=" rounded-md py-10 border-solid border-[#393E46] border-[1px] shadow-2xl "
                >
                  <div className=" w-[90%] mx-auto flex flex-col gap-5">
                    <div className=" ">
                      "<em className=" text-[#000]">{data.msg}</em>"
                    </div>

                    <div className=" flex justify-center items-center gap-3">
                      <span className=" w-20 h-20  ">
                        <img
                          src={data.picture}
                          alt="pix"
                          className=" rounded-full shadow object-cover w-full h-full"
                        />
                      </span>

                      <div>
                        <p>{data.name}</p>
                        <p>{data.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
