import React, { Component } from 'react'

export default class ApartmentLoading extends Component {

    render() {
        return <div className={`w-75 p-0 mb-3 rounded-4  placeholder-glow overflow-hidden m-auto shadow ${this.props.flag ? 'bg-primColor' : 'bg-white'}`}>
            <div className="container-fluied overflow-hidden">
                <div className="row">
                    <div className="col-md-4 AbartmentImage ">
                        <img src="Images/RandomBuilding.jpg" className="w-100 h-100" alt="apartment Picture" />
                    </div>
                    <div className={`col-md-8 fs-3 fw-bolder AbartmentDesc ${this.props.flag ? 'text-white' : 'text-primColor'}`}>
                        <div className="fs-3 px-3 fw-bolder w-100">
                            <h2 className="py-2">      <span className="placeholder col-7"></span>  </h2>
                            <h2 className="py-2"> <span className="placeholder col-10"></span></h2>
                            <div className={`text-black fs-4 p-4 ${this.props.flag ? 'text-white' : 'text-black'}`}>
                                {/* <p id="Floor">
                                    Floor :  <span className="placeholder col-4"></span>
                                </p> */}
                                <p id="Price">
                                    Price :  <span className="placeholder col-5"></span>
                                </p>
                                {/* <p id="Apartmentn">
                                    Apartmentn:  <span className="placeholder col-6"></span>
                                </p> */}
                                <p id="Descripition">
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-10"></span>
                                </p>
                                <div className='w-100 d-flex justify-contnet-end'>

                                    <span className={` sButton  ms-auto placeholder col-2 `}  >
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
