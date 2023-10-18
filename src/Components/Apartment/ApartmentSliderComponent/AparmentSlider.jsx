import React, { Component } from 'react'

export default class AparmetSlider extends Component {
  render() {
    return <React.Fragment>
      <div id="carouselExampleWhite" className="carousel h-100 carousel-white hide slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleWhite" data-bs-slide-to="0" style={{ width: "20px" }} className="active rounded-circle py-2 bg-primColor" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleWhite" data-bs-slide-to="1" style={{ width: "20px" }} className='rounded-circle py-2 bg-primColor' aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleWhite" data-bs-slide-to="2" style={{ width: "20px" }} className='rounded-circle py-2 bg-primColor' aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner h-100">
          <div className="carousel-item h-100 active" data-bs-interval="10000">
            <img src="Images/RandomBuilding.jpg" className="w-100 h-100 d-block" alt="apartment Picture" />
          </div>
          <div className="carousel-item h-100" data-bs-interval="2000">
            <img src="Images/RandomBuilding.jpg" className="w-100 h-100 d-block" alt="apartment Picture" />
          </div>
          <div className="carousel-item h-100">
            <img src="Images/RandomBuilding.jpg" className="w-100 h-100 d-block" alt="apartment Picture" />
          </div>
        </div>
      </div>
    </React.Fragment>
  }
}
