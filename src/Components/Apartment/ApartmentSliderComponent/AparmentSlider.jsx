import React, { Component } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
export default class AparmetSlider extends Component {
  render() {
    let uniqeNum = this.props.uniqeNum;
    let flagDetails = this.props.flagDetails?? false;
    return <React.Fragment>
      {/* <div id={"carouselExampleWhite"+uniqeNum}  className="carousel  carousel-white hide slide" style={
        flagDetails?{ 

          height: "100%",
          width: "100%",
        }:{
          height: "100%",
          width: "100%",
          maxHeight: "350px",
        }
      }>
        <div className="carousel-indicators">
          {
            
            this.props.flatImages.length >0? 
            this.props.flatImages.map((item, index) => {
              return <button key={index}  type="button" data-bs-target={"#carouselExampleWhite"+uniqeNum} data-bs-slide-to={index} style={{ width: "20px" }} className={index == 0 ? "active rounded-circle py-2 bg-primColor" : 'rounded-circle py-2 bg-primColor'} aria-current="true" aria-label={`Slide ${index + 1}`}></button>
            })
          :
          <button type="button" data-bs-target={"#carouselExampleWhite"+uniqeNum} data-bs-slide-to="0" style={{ width: "20px" }} className="active rounded-circle py-2 bg-primColor" aria-current="true" aria-label="Slide 1"></button>
          }
        </div>
        <div className="carousel-inner h-100">
        {
            
            this.props.flatImages.length >0? 
            this.props.flatImages.map((item, index) => {
              return <div key={index}  className={index == 0 ? "carousel-item h-100 active" : 'carousel-item h-100'} data-bs-interval={(index+1) *10000}>
                <img src={item.url} className="w-100 h-100 d-block" alt="apartment Picture" />
              </div>
               })
          :<div className="carousel-item h-100 active" data-bs-interval="10000">
          <img src="Images/RandomBuilding.jpg" className="w-100 h-100 d-block" alt="apartment Picture" />
        </div>
 
          }
        </div>
      </div> */}
            <style>
        {`
          .swiper-pagination {
            bottom: 15px;
            text-align: center;
            width: 100%;
          }

          .swiper-pagination-bullet {
            width: 20px;
            height: 20px;
            background-color: #fff;
            opacity: 1;
            margin: 0 5px;
          }

          .swiper-pagination-bullet-active {
            background-color: #377474;
            opacity: 1;
          }
            `}
      </style>
      <Swiper
        modules={[Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

      >

        {
          this.props.flatImages.length > 0 ?
            this.props.flatImages.map((item, index) => {
              return <SwiperSlide key={index}  >
                <img src={item.url} className="d-block rounded-3" style={{ height: `350px`, width: `100%` }} alt="apartment Picture" />
              </SwiperSlide>
            })
            :
            <SwiperSlide  >
              <img src="Images/RandomBuilding.jpg" className="w-100 h-100 d-block" alt="apartment Picture" />
            </SwiperSlide>
        }
      </Swiper>

    </React.Fragment>
  }
}
