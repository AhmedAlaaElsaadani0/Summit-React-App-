import React, { useEffect, useState } from 'react'
import style from "./Filter.module.css"
import PriceRange from './PriceRange/PriceRange';
import SelectFilter from './SelectFilter/SelectFilter';
import { useTranslation } from 'react-i18next';
export default function Filter() {
    const [objSearch, setObjSearch] = useState({
        price: {
            min: 0,
            max: 10000
        },
        govId: "",
        areaId: "",
        regionId: ""

    })
    const [flag, setFlag] = useState(false)
    const { t, i18n } = useTranslation();
    let filterDiv;
    let filterButton;
    useEffect(() => {
        filterDiv = document.getElementById('filterDiv');
        filterButton = document.getElementById('filterButton');

    })

    const showFilter = (e) => {

        filterDiv.classList.add(i18n.language=="en"? style.show:style.showRtl);
        setTimeout(() => {
            filterDiv.classList.add(style.filterDivShow);
            filterDiv.classList.remove(style.filterDivHide);
            filterDiv.classList.remove(i18n.language=="en"? style.show:style.showRtl);

        }, 500);
        setFlag(true);
        filterButton.style.display = 'none';

    }
    const hideFilter = () => {
        filterDiv.classList.add(i18n.language=="en"?style.hide:style.hideRtl);
        setTimeout(() => {
            filterDiv.classList.add(style.filterDivHide);
            filterDiv.classList.remove(style.filterDivShow);
            filterDiv.classList.remove(i18n.language=="en"?style.hide:style.hideRtl);

        }, 500);
        setFlag(false);
    }
    return (
        <React.Fragment>
            <div className={"position-fixed top-0 bottom-0 d-flex align-items-center "} style={{ zIndex: "999999" }}>
                <div className={'bg-primColor rounded-4 py-3 p-2 align-items-center ' + style.filterDivHide} id='filterDiv' style={{ width: "300px" }}>
                    <div className="bg-white py-5 w-100 rounded-3 d-flex flex-column justify-content-center align-items-center px-2 position-relative">
                        {/* button close */}
                        <button type='button'
                            onClick={() => {
                                hideFilter();
                                setTimeout(() => {
                                    filterButton.style.display = 'block';
                                }, 500);
                            }}
                            className={" rounded-circle p-2 m-3 border-0 position-absolute top-0 "+(i18n.language=="en"?"end-0 ":"start-0 ")+style.closebutton}
                            style={{ width: "50px", height: "50px", fontWeight: "bolder", fontSize: "24px" }}>
                            X
                        </button>
                        <h3 className='Filter text-primColor fw-bolder'>{t("Filter")}</h3>
                        <form action=" " className='d-flex flex-column'>

                        <PriceRange t={t} i18n={i18n}/>
                        <SelectFilter t={t} i18n={i18n}/>
                        <button type='submit' className='sButton sButtonGreen '>
                            {t("Search")}
                        </button>
                        </form>


                    </div>
                </div>
                <div className=' h-100 d-flex align-items-center'>

                    <button type='button' id='filterButton'
                        onClick={(e) => (flag ? hideFilter() : showFilter(e))}

                        className={" sButton sButtonGreen rounded-circle p-2 border-0  " + style.filterButton}
                        style={{ width: "75px", height: "75px", fontWeight: "bolder", fontSize: "32px" }}>
                        <i class="fa-solid fa-sliders"></i>
                    </button>

                </div>

            </div>



        </React.Fragment>
    )
}