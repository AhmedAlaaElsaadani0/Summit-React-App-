
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AparmentSlider from '../ApartmentSliderComponent/AparmentSlider';

const ApartmentDetails = (props) => {


  useEffect(() => {
    document.querySelectorAll('.AbartmentImage').forEach((apartmentImage) => {
      document.querySelectorAll('.AbartmentDesc').forEach((apartmentDesc) => {
        apartmentImage.style.height = `${apartmentDesc.clientHeight}px`;
      });
    });
  });
  const location = useLocation();
  let flat=location.state;
  const flag = false;

  return (
    <React.Fragment>
      <div className="myVh-100 d-flex justify-content-center align-items-center">

        <div className={`w-75 p-0 rounded-4 m-auto shadow ${flag ? 'bg-primColor' : 'bg-white'}`}>
          <div className="container-fluied overflow-hidden">
            <div className="row">
              <div className={`col-md-8 fs-3 fw-bolder AbartmentDesc ${flag ? 'text-white' : 'text-primColor'}`}>
                <div className="fs-3 px-3 fw-bolder w-100">
                  <h2 className="py-2">{flat.title} </h2>
                  <h2 className="py-2">{flat.governorate + "/ " + flat.area + "/ " + flat.region}</h2>
                  <div className={`text-black fs-4 p-4 ${flag ? 'text-white' : 'text-black'}`}>
                  <p id="Floor">
                      Floor : <span className="fw-normal"> {flat.floor} </span>
                    </p>
                    <p id="Price">
                      Price : <span className="fw-normal"> {flat.price} </span>
                    </p>
                    <p id="Apartmentn">
                      Apartmentn: <span className="fw-normal">{flat.condition}</span>
                    </p>
                    <p id="Descripition">
                      Descripition: <span className="fw-normal">{flat.description}</span>
                    </p>   <div className="w-100  d-flex justify-content-between">
                      <div className="contact text-primColor">
                        <h5 className='fw-bolder'>Contact us Now!</h5>

                        <div className={'d-flex justify-content-center socialMedia '}>
                          <div className={"rounded-circle bg-primColor me-2 "} style={
                            {
                              width: '20px',
                              height: '20px',
                            }
                          }>
                          </div>

                          <div className={"rounded-circle bg-primColor me-2"} style={{
                            width: '20px',
                            height: '20px',
                          }
                          }>
                          </div>

                          <div className={"rounded-circle bg-primColor me-2"} style={
                            {
                              width: '20px',
                              height: '20px',
                            }

                          }>
                          </div>
                        </div>

                      </div>
                      <button className='sButton sButtonGreen'>Apartment Price : {flat.price}</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 AbartmentImage">
                <div className="w-100 h-100">

                  <AparmentSlider />
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </React.Fragment >
  );
};

export default ApartmentDetails;
