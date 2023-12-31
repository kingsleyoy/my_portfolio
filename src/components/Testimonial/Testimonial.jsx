import React from "react";
import pics2 from "../../assets/pic1.jpg";
import { Autoplay, Pagination, A11y } from "swiper/modules";
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
      id: "001",
    },
    {
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error qui doloremque nisi, molestiae harum!",
      name: "name",
      title: "title",
      picture: pics2,
      id: "002",
    },
    {
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error qui doloremque nisi, molestiae harum!",
      name: "name",
      title: "title",
      picture: pics2,
      id: "003",
    },
    {
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error qui doloremque nisi, molestiae harum!",
      name: "name",
      title: "title",
      picture: pics2,
      id: "004",
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
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 7000,
            }}
            pagination={{ clickable: true }}
          >
            {testInfo.map((data, id) => (
              <SwiperSlide key={id}>
                <div className="  shadow-2xl py-6 bg-kg">
                  <div className=" w-[90%] mx-auto flex flex-col gap-5">
                    <div className=" flex  py-2 items-center gap-3 border-b-[1px] border-solid border-[#393E46]">
                      <span className=" w-16 h-16   ">
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

                    <div className=" ">
                      <em>{data.msg}</em>
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
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
            }}
            pagination={{ clickable: true }}
          >
            {testInfo.map((data, id) => (
              <SwiperSlide key={id}>
                <div className="  shadow-2xl py-6 bg-kg">
                  <div className=" w-[90%] mx-auto flex flex-col gap-5">
                    <div className=" flex  py-2 items-center gap-3 border-b-[1px] border-solid border-[#393E46]">
                      <span className=" w-14 h-14   ">
                        <img
                          src={data.picture}
                          alt="pix"
                          className=" rounded-full shadow object-cover w-full h-full"
                        />
                      </span>

                      <div className=" text-[14px] font-semibold">
                        <p>{data.name}</p>
                        <p>{data.title}</p>
                      </div>
                    </div>

                    <div className=" ">
                      <em>{data.msg}</em>
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
