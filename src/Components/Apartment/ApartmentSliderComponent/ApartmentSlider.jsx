import React, { Component } from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default class ApartmentSlider extends Component {
  render() {
    let { functionOnClickImage, thePopImageFlag } = this.props;
    return (
      <React.Fragment>
        <style>
          {`
            .swiper-button-next, .swiper-button-prev {
              color: #fff; /* Change arrow color to white */
              font-size: 30px; /* Increase the size of the arrows */
              width: 40px; /* Optional: Increase button area for better clickability */
              height: 40px; /* Optional: Increase button area for better clickability */
              text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Add shadow for better visibility */
            }
            .swiper-button-next::after, .swiper-button-prev::after {
              font-size: 30px; /* Increase the size of the arrow icons */
              font-weight: bold;
            }
            .swiper-initialized {
              height: 100%;
              width: 100%;
              
            }
          `}
        </style>
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          navigation={true}
        >
          {
            this.props.flatImages.length > 0 ?
              this.props.flatImages.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <a style={{ cursor: "pointer" }} onClick={functionOnClickImage}>
                      <img
                        src={item.url}
                        className={"d-block rounded-3 rounded-bottom-0 " + (thePopImageFlag ? "object-fit-contain" : "object-fit-cover")}
                        style={{ height: '100%', width: '100%' }}
                        alt="apartment Picture"
                      />
                    </a>
                  </SwiperSlide>
                );
              })
              :
              <SwiperSlide>
                <img
                  src="Images/RandomBuilding.jpg"
                  style={{ height: '100%', width: '100%' }}
                  className="rounded-bottom-0"
                  alt="apartment Picture"
                />
              </SwiperSlide>
          }
        </Swiper>
      </React.Fragment>
    );
  }
}
