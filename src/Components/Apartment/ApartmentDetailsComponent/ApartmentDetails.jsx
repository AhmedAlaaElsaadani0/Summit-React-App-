import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AparmentSlider from '../ApartmentSliderComponent/AparmentSlider';
import ErrorPage from '../../ErrorPage/ErrorPage';
import { useTranslation } from 'react-i18next';

const ApartmentDetails = (props) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [flat, setflat] = useState(location.state);

  // const navigate = useNavigate();
  useEffect(() => {
    document.querySelectorAll('.AbartmentImage').forEach((apartmentImage) => {
      document.querySelectorAll('.AbartmentDesc').forEach((apartmentDesc) => {
        apartmentImage.style.height = `${apartmentDesc.clientHeight}px`;
      });
    });

  }, []);

  // if(flat===null){
  //   return <ErrorPage/>;
  //   // window.location.href=window.location.href.split("Apart")[0]   
  // };

  const flag = true;
  return (
    <React.Fragment>
      <div className="myVh-100 mt-3 d-flex justify-content-center  align-items-center">

        <div className={`w-75 w-sm-90 p-0 rounded-4 m-auto shadow ${flag ? 'bg-primColor' : 'bg-white'}`} >
          <div className="container-fluied overflow-hidden">
            <div className="row position-relative">
              <div className="col-md-4 AbartmentImage">
                <div className="w-100 h-100">

                  <AparmentSlider flagDetails={true} flatImages={flat.pictures} />

                </div>
              </div>
              <div className={`col-md-8 fs-3 fw-bolder AbartmentDesc ${flag ? 'text-white' : 'text-primColor'}`}>
                <div className="fs-3 px-3 fw-bolder w-100">
                  <h2 className="py-2">{flat.title} </h2>
                  <h2 className="py-2">{flat.governorate + "/ " + flat.area + "/ " + flat.region}</h2>
                  <div className={`text-black fs-4 p-4 ${flag ? 'text-white' : 'text-black'}`}>
                    <p id="Floor">
                      {t("Apart Floor")}  <span className="fw-normal"> {flat.floor} </span>
                    </p>
                    <p id="Price">
                      {t("Apart Price")} <span className="fw-normal"> {flat.price} </span>
                    </p>
                    <p id="Apartmentn">
                      {t("Apart Condition")} <span className="fw-normal">{flat.condition}</span>
                    </p>
                    <p id="Descripition">
                      {t("Apart Descrp")} <span className="fw-normal">{flat.description}</span>
                    </p>   <div className="w-100  d-flex justify-content-between">
                      <div className="contact text-white">
                        <h5 className='fw-bolder'>{t("Apart Contact")}</h5>

                        <div className={'d-flex justify-content-center socialMedia '}>
                          <div className={"rounded-circle bg-white me-2 "} style={
                            {
                              width: '20px',
                              height: '20px',
                            }
                          }>
                          </div>

                          <div className={"rounded-circle bg-white me-2"} style={{
                            width: '20px',
                            height: '20px',
                          }
                          }>
                          </div>

                          <div className={"rounded-circle bg-white me-2"} style={
                            {
                              width: '20px',
                              height: '20px',
                            }

                          }>
                          </div>
                        </div>

                      </div>
                      <button className={+flag ? "sButtonWhite sButton " : "sButtonGreen sButton "}>{t("Apart Price")}  {flat.price}</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`data position-absolute top-0 end-0 me-3 mt-2 rounded  ${!flag ? "bg-primColor text-white" : "bg-white  text-primColor"} `} style={{ width: "fit-content" }}>

                <p id="date" className='mb-0'>
                  {t("Apart Post")}<span className="fw-normal"> {flat.date?.split(" ")[0]} </span>
                </p>


              </div>

            </div>
          </div>
        </div >
      </div >
    </React.Fragment >
  );
};

export default ApartmentDetails;
