import React, { useEffect, useState } from 'react'
import style from "./Filter.module.css"
import PriceRange from './PriceRange/PriceRange';
import SelectFilter from './SelectFilter/SelectFilter';
import { useTranslation } from 'react-i18next';
export default function Filter({ getAllApartments, setResponse, loading, response, setLoading }) {
    const [objSearchSelctor, setObjSearch] = useState({
        govId: "",
        areaId: "",
        regionId: ""

    });
    const [price, setPrice] = useState({
        min: 0,
        max: 10000
    });
    const handleOnChangeSelector = (regionId, areaId = objSearchSelctor.areaId, govId = objSearchSelctor.govId) => {
        setObjSearch({ govId, areaId, regionId })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse({
            ...response,
            ...objSearchSelctor,
            pageIndex: 1,
            data: []
        });
        getAllApartments(1, true, objSearchSelctor.govId, objSearchSelctor.areaId, objSearchSelctor.regionId);
    }
    const [flag, setFlag] = useState(false)
    const { t, i18n } = useTranslation();


    /**
      //////////////
    style for filter 
     /////////////////////
     
     */
    let filterDiv;
    let filterButton;
    useEffect(() => {
        filterDiv = document.getElementById('filterDiv');
        filterButton = document.getElementById('filterButton');

    })

    const showFilter = (e) => {

        filterDiv.classList.add(i18n.language == "en" ? style.show : style.showRtl);
        setTimeout(() => {
            filterDiv.classList.add(style.filterDivShow);
            filterDiv.classList.remove(style.filterDivHide);
            filterDiv.classList.remove(i18n.language == "en" ? style.show : style.showRtl);

        }, 500);
        setFlag(true);
        filterButton.style.display = 'none';

    }
    const hideFilter = () => {
        filterDiv.classList.add(i18n.language == "en" ? style.hide : style.hideRtl);
        setTimeout(() => {
            filterDiv.classList.add(style.filterDivHide);
            filterDiv.classList.remove(style.filterDivShow);
            filterDiv.classList.remove(i18n.language == "en" ? style.hide : style.hideRtl);

        }, 500);
        setFlag(false);
    }




    


    return (
        <React.Fragment>
            <div className={"position-fixed top-0 bottom-0 d-flex align-items-center  vh-100 "} style={{ zIndex: "999" }}>
                <div className={' rounded-4 py-3 p-1 align-items-center mb-5  ' + style.filterDivHide} id='filterDiv' style={{ width: "300px" }}>
                    <div className="bg-white shadow py-5 w-100 rounded-5 d-flex flex-column justify-content-center align-items-center px-2 position-relative">
                        {/* button close */}
                        <button type='button'
                            onClick={() => {
                                hideFilter();
                                setTimeout(() => {
                                    filterButton.style.display = 'block';
                                }, 500);
                            }}
                            className={" rounded-circle p-2 m-3 border-0 position-absolute top-0  " + (i18n.language == "en" ? "end-0 " : "start-0 ") + style.closebutton}
                            style={{ width: "50px", height: "50px", fontWeight: "bolder", fontSize: "24px" }}>
                            X
                        </button>
                        <h3 className='Filter text-primColor fw-bolder'>{t("Filter")}</h3>
                        <form action=" " className='w-100 px-3 d-flex flex-column' onSubmit={(e) => handleSubmit(e)}>
                            {/* 
                            <PriceRange t={t} i18n={i18n} price={{
                                minPrice:response.minPrice??0,
                                maxPrice: response.maxPrice??10000,
                            }} setPrice={setPrice}
                            /> */}
                            <SelectFilter t={t} i18n={i18n} handleOnChangeSelector={handleOnChangeSelector} />
                            <button type='submit' className='sButton sButtonGreen '>
                                {t("Search")}
                            </button>
                        </form>


                    </div>
                </div>
                <div className=' h-100 d-flex align-items-center'>

                    <button type='button' id='filterButton'
                        onClick={(e) => (flag ? hideFilter() : showFilter(e))}

                        className={" sButton sButtonGreen rounded-circle p-2 border-0 shadow  " + style.filterButton}
                        style={{ width: "75px", height: "75px", fontWeight: "bolder", fontSize: "32px" }}>
                        <i className="fa-solid fa-bars-staggered"></i>
                    </button>

                </div>

            </div>



        </React.Fragment>
    )
}