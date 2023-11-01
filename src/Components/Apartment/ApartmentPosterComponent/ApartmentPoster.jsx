import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AparmetSlider from '../ApartmentSliderComponent/AparmentSlider';

const ApartmentPoster = (props) => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(!props.flag);
  const [flat, setflat] = useState(props.flat);
  const [previousPage, setpreviousPage] = useState(props.previousPage);
  const toApartmentDetails = () => {
    
    navigate(`/ApartmentDetails`, { state: flat });


  };
  
  useEffect(() => {
    document.querySelectorAll('.AbartmentImage').forEach((apartmentImage) => {
      document.querySelectorAll('.AbartmentDesc').forEach((apartmentDesc) => {
        apartmentImage.style.height = `${apartmentDesc.clientHeight}px`;
      });
    });
  }, []);
  
  return (
    <React.Fragment>
      {

        <div className={`w-75 p-0 mb-3 rounded-4 overflow-hidden m-auto shadow Apartment ${flag ? 'bg-primColor' : 'bg-white'}`}>
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
                      Descripition: <span className="fw-normal">{flat.description.split(" ").slice(0,5).join(" ")}.....</span>
                    </p>
                    <div className='w-100 d-flex justify-contnet-end'>

                      <button onClick={toApartmentDetails} className={` sButton  ms-auto   ${!flag ? "sButtonGreen" : "sButtonWhite"} `}  > Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 AbartmentImage AparmentSlider ">
                <AparmetSlider flatImages={flat.pictures}/>
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default ApartmentPoster;