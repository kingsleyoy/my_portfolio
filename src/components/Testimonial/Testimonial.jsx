import React from "react";
import pics2 from "../../assets/pic2.jpg";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Testimonial = () => {
  return (
    <div className=" bg-[#EEEEEE] w-full py-10 md:py-14 mont ">
      <div className="  w-[90%] md:w-[80%] mx-auto ">
        <h3 className="text-xl md:text-2xl font-bold myshade pb-5 md:pb-8 text-center capitalize">
          Testimonials
        </h3>

        <div className=" hidden md:block mont">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            Navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className=" rounded-md shadow-2xl py-12 border-solid border-[#393E46] border-[1px]">
                <div className=" w-[90%] mx-auto flex flex-col gap-5">
                  <div className=" ">
                    "
                    <em>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error qui doloremque nisi, molestiae harum!
                    </em>
                    "
                  </div>

                  <div className=" flex justify-center items-center gap-3">
                    <span className=" w-20 h-20  ">
                      <img
                        src={pics2}
                        alt="pix"
                        className=" rounded-full shadow object-cover w-full h-full"
                      />
                    </span>

                    <div>
                      <p>name</p>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" rounded-md shadow-2xl py-12 border-solid border-[#393E46] border-[1px]">
                <div className=" w-[90%] mx-auto flex flex-col gap-5">
                  <div className=" ">
                    "
                    <em className=" text-[#000]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error qui doloremque nisi, molestiae harum!
                    </em>
                    "
                  </div>

                  <div className=" flex justify-center items-center gap-3">
                    <span className=" w-20 h-20  ">
                      <img
                        src={pics2}
                        alt="pix"
                        className=" rounded-full shadow object-cover w-full h-full"
                      />
                    </span>

                    <div>
                      <p>name</p>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" rounded-md shadow-2xl py-12 border-solid border-[#393E46] border-[1px]">
                <div className=" w-[90%] mx-auto flex flex-col gap-5">
                  <div className=" ">
                    "
                    <em className=" text-[#000]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error qui doloremque nisi, molestiae harum!
                    </em>
                    "
                  </div>

                  <div className=" flex justify-center items-center gap-3">
                    <span className=" w-20 h-20  ">
                      <img
                        src={pics2}
                        alt="pix"
                        className=" rounded-full shadow object-cover w-full h-full"
                      />
                    </span>

                    <div>
                      <p>name</p>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" rounded-md shadow-2xl py-12 border-solid border-[#393E46] border-[1px]">
                <div className=" w-[90%] mx-auto flex flex-col gap-5">
                  <div className=" ">
                    "
                    <em className=" text-[#000]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error qui doloremque nisi, molestiae harum!
                    </em>
                    "
                  </div>

                  <div className=" flex justify-center items-center gap-3">
                    <span className=" w-20 h-20  ">
                      <img
                        src={pics2}
                        alt="pix"
                        className=" rounded-full shadow object-cover w-full h-full"
                      />
                    </span>

                    <div>
                      <p>name</p>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

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
            <SwiperSlide>
              <div className=" rounded-md py-10 border-solid border-[#393E46] border-[1px] shadow-2xl ">
                <div className=" w-[90%] mx-auto flex flex-col gap-5">
                  <div className=" ">
                    "
                    <em className=" text-[#000]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error qui doloremque nisi, molestiae harum!
                    </em>
                    "
                  </div>

                  <div className=" flex justify-center items-center gap-3">
                    <span className=" w-20 h-20  ">
                      <img
                        src={pics2}
                        alt="pix"
                        className=" rounded-full shadow object-cover w-full h-full"
                      />
                    </span>

                    <div>
                      <p>name</p>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" rounded-md py-10 border-solid border-[#393E46] border-[1px] shadow-2xl ">
                <div className=" w-[90%] mx-auto flex flex-col gap-5">
                  <div className=" ">
                    "
                    <em className=" text-[#000]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error qui doloremque nisi, molestiae harum!
                    </em>
                    "
                  </div>

                  <div className=" flex justify-center items-center gap-3">
                    <span className=" w-20 h-20  ">
                      <img
                        src={pics2}
                        alt="pix"
                        className=" rounded-full shadow object-cover w-full h-full"
                      />
                    </span>

                    <div>
                      <p>name</p>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" rounded-md py-10 border-solid border-[#393E46] border-[1px] shadow-2xl ">
                <div className=" w-[90%] mx-auto flex flex-col gap-5">
                  <div className=" ">
                    "
                    <em className=" text-[#000]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error qui doloremque nisi, molestiae harum!
                    </em>
                    "
                  </div>

                  <div className=" flex justify-center items-center gap-3">
                    <span className=" w-20 h-20  ">
                      <img
                        src={pics2}
                        alt="pix"
                        className=" rounded-full shadow object-cover w-full h-full"
                      />
                    </span>

                    <div>
                      <p>name</p>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" rounded-md py-10 border-solid border-[#393E46] border-[1px] shadow-2xl ">
                <div className=" w-[90%] mx-auto flex flex-col gap-5">
                  <div className=" ">
                    "
                    <em className=" text-[#000]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus error qui doloremque nisi, molestiae harum!
                    </em>
                    "
                  </div>

                  <div className=" flex justify-center items-center gap-3">
                    <span className=" w-20 h-20  ">
                      <img
                        src={pics2}
                        alt="pix"
                        className=" rounded-full shadow object-cover w-full h-full"
                      />
                    </span>

                    <div>
                      <p>name</p>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
