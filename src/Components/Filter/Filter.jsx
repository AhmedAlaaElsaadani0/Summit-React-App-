import React, { useEffect, useState } from 'react'
import style from "./Filter.module.css"
export default function Filter() {
    const [flag, setFlag] = useState(false)
    let filterDiv;
    let filterButton;
    useEffect(() => {
        filterDiv = document.getElementById('filterDiv');
        filterButton = document.getElementById('filterButton');
        activeSliderAndItsValue();

    })
    const activeSliderAndItsValue=()=>{
        
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function () {
            output.innerHTML = this.value;
            slider.value=this.value
        }
    }

    const showFilter = (e) => {

        filterDiv.classList.add(style.show);
        setTimeout(() => {
            filterDiv.classList.add(style.filterDivShow);
            filterDiv.classList.remove(style.filterDivHide);
            filterDiv.classList.remove(style.show);

        }, 500);
        setFlag(true);
        filterButton.style.display = 'none';

    }
    const hideFilter = () => {
        filterDiv.classList.add(style.hide);
        setTimeout(() => {
            filterDiv.classList.add(style.filterDivHide);
            filterDiv.classList.remove(style.filterDivShow);
            filterDiv.classList.remove(style.hide);

        }, 500);
        setFlag(false);
    }
    return (
        <React.Fragment>
            <div className={"position-fixed top-0 bottom-0 start-0 d-flex   "} style={{ zIndex: "999999" }}>
                <div className={'bg-primColor p-2 align-items-center ' + style.filterDivHide} id='filterDiv' style={{ width: "300px" }}>
                    <div className="bg-white h-50 w-100 rounded-3 d-flex flex-column justify-content-center align-items-center px-2 position-relative">
                        {/* button close */}
                        <button type='button'
                            onClick={() => {
                                hideFilter();
                                setTimeout(() => {
                                    filterButton.style.display = 'block';
                                }, 500);
                            }}
                            className="btn btn-danger rounded-circle p-2 m-3 border-0 shadow position-absolute top-0 end-0"
                            style={{ width: "50px", height: "50px", fontWeight: "bolder", fontSize: "24px" }}>
                            X
                        </button>
                        <h3 className='Filter text-primColor fw-bolder'>Filter</h3>
                        <div class={style.slidecontainer}>
                            <input type="range" min="1" max="100" value="50" class={style.slider} id="myRange" />
                            <p>Value: <span id="demo"></span></p>
                        </div>

                        <select
                            //   onChange={handleSearchByGovId} onKeyDown={handleSearchByGovId} 
                            style={{
                                width: "100%",
                                fontSize: "20px",
                                transition: "all 0.5s ease-in-out",
                                display: "block",
                                fontWeight: "bold",
                            }} name='Gov' className='form-select-Amoor  mt-2 px-3 py-2 rounded-5' id='selectorGovs'>
                            <option value="" selected disabled>All Governorates</option>
                            <option value="6">Cairo</option>
                            <option value="11">Giza</option>

                        </select>
                        <select
                            //    onChange={handleSearchByAreaId} onKeyDown={handleSearchByAreaId} 
                            name='Areas' className='form-select-Amoor mt-2  px-3 py-2 rounded-5  ' style={
                                {
                                    display: 'block',
                                    width: '100%',
                                    transition: 'all 0.5s ease-in-out',
                                    fontSize: "18px",
                                    fontWeight: 400
                                }
                            } id='selectorAreas'>
                            <option value="" selected disabled>All avaliable  Areas</option>
                        </select>
                        <select
                            //   onChange={handleSearchByRegionId}
                            name='Regions' className='form-select-Amoor mt-2 px-3 py-2 rounded-5  ' style={
                                {
                                    display: 'block',
                                    width: '100%',
                                    transition: 'all 0.5s ease-in-out',
                                    fontSize: "18px",
                                    fontWeight: 400

                                }
                            } id='selectorRegions'>
                            <option value="" selected disabled>All Regions</option>
                        </select>


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
