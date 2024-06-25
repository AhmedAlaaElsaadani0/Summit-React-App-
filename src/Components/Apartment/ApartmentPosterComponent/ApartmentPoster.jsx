import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApartmentSlider from '../ApartmentSliderComponent/ApartmentSlider';
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
        
        <div className={`col-xl-5 w-sm-90  p-0 mb-3  rounded-4 overflow-hidden m-auto shadow Apartment ${flag ? 'bg-primColor' : 'bg-whiteToBlack'}`}>
          <div className="overflow-hidden">
            <div className="row position-relative ">
              <div className="col-md-5 ApartmentImage ApartmentSlider " style={{ Height: document.querySelectorAll('.ApartmentDesc').clientHeight, maxHeight: '500px' }}>
                <ApartmentSlider key={flat.id} flatImages={flat.pictures}  functionOnClickImage={toApartmentDetails} />
              </div>
              <div className={`col-md-7 fs-3 fw-bolder ApartmentDesc ${flag ? 'text-white' : 'text-primColor'}`}>
                <div className="fs-3 px-3 fw-bolder w-100">
                  {/* make it at least line */}
                  <p  className="py-2 fs-5">{flat.title.slice(0,25).length<flat.title.length?flat.title.slice(0,25)+"...." :flat.title  } </p>
                  <p className="py-2 ApartmentAddress fs-6">{flat.governorate + "- " + flat.area + "- " + flat.region}</p>
                  <div className={`text-black fs-4 p-4 ${flag ? 'text-white' : 'text-blackToWhite'}`}>
                    {/* <p id="Floor">
                      Floor : <span className="fw-normal"> {flat.floor} </span>
                    </p> */}
                    <p id="Price">
                      {t("Apart Price")}<span className="fw-normal"> {flat.price} </span>
                    </p>
                    {/* <p id="Apartmentn">
                      Apartmentn: <span className="fw-normal">{flat.condition}</span>
                    </p> */ }
                    {/* <p id="Descripition">
                      Descripition: <span className="fw-normal">{flat.description.split(" ").slice(0, 5).join(" ")}.....</span>
                    </p> */}
                    <div className='w-100 d-flex justify-content-end text-center'>

                      <button onClick={toApartmentDetails}  className={` sButton   ms-md-auto m-smalldevice-auto    ${!flag ? "sButtonGreen" : "sButtonWhite"} `}  > 
                      {t("Apart Button")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`data position-absolute fw-bolder z-1 top-0 ${i18n.language=="ar"?"end-0 me-3":"start-0 ms-3"} mt-2 rounded   ${!flag ? "bg-primColor text-white" : "bg-white  text-primColor"} `} style={{ width: "fit-content",fontSize:"11px" }}>

                <p id="date" className='mb-0 ' >
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