import React from 'react';
import { useTranslation } from 'react-i18next';

const ApartmentLoading = ({ flag }) => {
    const{t}=useTranslation();
    return (

        <div className={`w-75 w-sm-90 p-0 mb-3 rounded-4 placeholder-glow overflow-hidden m-auto shadow ${flag ? 'bg-primColor' : 'bg-whiteToBlack'}`}>
            <div className="container-fluid overflow-hidden">
                <div className="row">
                    <div className="col-md-4 AbartmentImage p-0 overflow-hidden" >
                        <img src="Images/RandomBuilding.jpg" className="w-100 h-100" alt="apartment Picture" />
                    </div>
                    <div className={`col-md-8 fs-3 fw-bolder AbartmentDesc ${flag ? 'text-white' : 'text-primColor'}`}>
                        <div className="fs-3 px-3 fw-bolder w-100">
                            <h2 className="py-2"> <span className="placeholder col-7"></span> </h2>
                            <h2 className="py-2"> <span className="placeholder col-10"></span></h2>
                            <div className={`text-black fs-4 p-4 ${flag ? 'text-white' : 'text-blackToWhite'}`}>
                                <p id="Price">
                                    {t("Apart Price")} <span className="placeholder col-5"></span>
                                </p>
                                <p id="Descripition">
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-10"></span>
                                </p>
                                <div className='w-100 d-flex justify-content-end'>
                                    <span className={`sButton ms-auto placeholder col-2`}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ApartmentLoading;
