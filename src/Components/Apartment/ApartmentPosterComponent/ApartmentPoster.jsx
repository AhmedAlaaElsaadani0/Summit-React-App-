import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AparmetSlider from '../ApartmentSliderComponent/AparmentSlider';
import { useTranslation } from 'react-i18next';

const ApartmentPoster = (props) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [flag] = useState(!props.flag);
  const [flat] = useState(props.flat);
  // const [previousPage, setpreviousPage] = useState(props.previousPage);
  const toApartmentDetails = () => {
    
    navigate(`/ApartmentDetails/${flat.id}`, { state: flat });


  };
  
  // useEffect(() => {
    // }, []);
    
    return (
      <React.Fragment>
      {
        
        <div className={`w-75 w-sm-90 p-0 mb-3  rounded-4 overflow-hidden m-auto shadow Apartment ${flag ? 'bg-primColor' : 'bg-whiteToBlack'}`}>
          <div className="container-fluied overflow-hidden">
            <div className="row position-relative ">
              <div className="col-md-4 AbartmentImage AparmentSlider " style={{ Height: document.querySelectorAll('.AbartmentDesc').clientHeight, maxHeight: '500px' }}>
                <AparmetSlider key={flat.id} uniqeNum={flat.id} flatImages={flat.pictures} />
              </div>
              <div className={`col-md-8 fs-3 fw-bolder AbartmentDesc ${flag ? 'text-white' : 'text-primColor'}`}>
                <div className="fs-3 px-3 fw-bolder w-100">
                  <h2 className="py-2">{flat.title} </h2>
                  <h2 className="py-2">{flat.governorate + "/ " + flat.area + "/ " + flat.region}</h2>
                  <div className={`text-black fs-4 p-4 ${flag ? 'text-white' : 'text-blackToWhite'}`}>
                    {/* <p id="Floor">
                      Floor : <span className="fw-normal"> {flat.floor} </span>
                    </p> */}
                    <p id="Price">
                      {t("Apart Price")}<span className="fw-normal"> {flat.price} </span>
                    </p>
                    {/* <p id="Apartmentn">
                      Apartmentn: <span className="fw-normal">{flat.condition}</span>
                    </p> */}
                    {/* <p id="Descripition">
                      Descripition: <span className="fw-normal">{flat.description.split(" ").slice(0, 5).join(" ")}.....</span>
                    </p> */}
                    <div className='w-100 d-flex justify-contnet-end text-center'>

                      <button onClick={toApartmentDetails} className={` sButton   ms-md-auto m-smalldevice-auto    ${!flag ? "sButtonGreen" : "sButtonWhite"} `}  > 
                      {t("Apart Button")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`data position-absolute top-0 end-0 me-3 mt-2 rounded  ${!flag ? "bg-primColor text-white" : "bg-white  text-primColor"} `} style={{ width: "fit-content" }}>

                <p id="date" className='mb-0' >
                  {t("Apart Post")} <span className=""> {flat.createdAt} </span>
                </p>


              </div>

            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default ApartmentPoster;