import React, { Component } from 'react'

export default class AparmetSlider extends Component {
  render() {
    let uniqeNum = this.props.uniqeNum;
    return <React.Fragment>
      <div id={"carouselExampleWhite"+uniqeNum}  className="carousel h-100 carousel-white hide slide">
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
      </div>
    </React.Fragment>
  }
}
