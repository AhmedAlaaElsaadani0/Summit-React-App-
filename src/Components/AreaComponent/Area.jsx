import React, { useState, useEffect } from 'react';
import ApartmentPoster from '../Apartment/ApartmentPosterComponent/ApartmentPoster';
import ApiManger from '../JsClasses/ApiManger';
import ApartmentLoading from '../Apartment/ApartmentLoadingComponent/ApartmentLoading';
import { Helmet } from 'react-helmet-async';

function Area() {

  const [response, setResponse] = useState({});
  const [PageIndex, setpageIndex] = useState(1)
  const [GovId, setGovId] = useState("")
  const [AreaId, setAreaId] = useState("")
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [RegionId, setRegionId] = useState("")
  //DidMount
  useEffect(() => {
    // startWork();
    getAllApartments();
  }, []);
  // this main API call to get all apartments by using param
  const getAllApartments = async (govId = GovId, pageIndex = PageIndex, areaId = AreaId, regionId = RegionId) => {
    let response = await ApiManger.getAllApartments(`?pageIndex=${pageIndex}&govId=${govId}&areaid=${areaId}&regionId=${regionId}`);
    let updatedApartments = [...apartments, ...response.data];
    /* previous code to make the background of apartment poster in different colors but we don't need it now
    // let flag = false;
    // for (let i = apartments.length; i < updatedApartments.length; i++) {
    //   updatedApartments[i] = {
    //     flag: flag ? true : false,
    //     data: updatedApartments[i]
    //   };
    //   flag = !flag;
    // }*/
    setResponse(response);
    setApartments(updatedApartments);
    setpageIndex(response.data.length == 0 ? response.pageIndex : response.pageIndex + 1)
    setLoading(false);
  };
  // this function to get the value of search input and set it to govId
  const handleSearchByGovId = (e) => {
    e.preventDefault();
    resetPage();
    clearAreaSelector();
    clearRegionsSelector();
    ApiManger.getAreasOfGov(e.target.value).then((response) => {
      appendChildToAreasSelector(response);
    });
    let value = document.querySelector('#selectorGovs').value;
    setGovId(value);
    getAllApartments(value, 1, '', "");
    // setApartments([]);
  }
  // this function to get the value of search input and set it to areaId and get all apartments by areaId
  const handleSearchByAreaId = (e) => {
    e.preventDefault();
    resetPage();
    clearRegionsSelector();
    ApiManger.getRegionsOfArea(e.target.value).then((response) => {
      if (response.code != 401)
        appendChildToRegionsSelector(response);
      else handleDisplayNoneForSelectorRegions();
    });
    let value = document.querySelector('#selectorAreas').value;
    setAreaId(value);
    getAllApartments(GovId, 1, value,'');
    document.querySelector('#selectorAreas').style.width = '50%';
    // setApartments([]);
  }
  // this function to get the value of search input and set it to regionId and get all apartments by regionId
  const handleSearchByRegionId = (e) => {
    e.preventDefault();
    resetPage();
    let value = document.querySelector('#selectorRegions').value;
    getAllApartments(GovId, 1, AreaId, value);
    setRegionId(value);
    // setApartments([]);
  }

  // this Function to reset the page to it's default state for new search
  const resetPage = () => {
    document.querySelectorAll('.Apartment').forEach((apartment) => {
      apartment.remove();
    })
    setpageIndex(1);

  }

  // this function to load more apartments when we click on load more button
  async function loadMore() {
    let btn = document.getElementById('loadMore');
    btn.disabled = true;
    btn.innerHTML = '<i className="fa-solid fa-spinner fa-spin"></i>';
    await getAllApartments();
  }
  // When New Data is Fetched From Api we return button to it's state
  useEffect(() => {
    let btn = document.getElementById('loadMore');
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = 'Load More';
    }
  }, [apartments])

  return (
    <React.Fragment>

      <Helmet>
        <meta
          name="Keywords"
          content="
      Summit,Summit Egypt,Summit Elzahaby,Summit Elzahaby for real estate,Summit Egypt for real estate,Summit Elzahaby for real estate investment,Summit Egypt for real estate investment,Summit Elzahaby for real estate investment and urban development,Summit Egypt for real estate investment and urban development,Summit Elzahaby for real estate development,Summit Egypt for real estate development,Summit Elzahaby for real estate projects,Summit Egypt for real estate projects,Summit Elzahaby for investment,Summit Egypt for investment,Summit Elzahaby for contracting,Summit Egypt for contracting,Summit Elzahaby for contracting and real estate investment,Summit Egypt for contracting and real estate investment,Summit Elzahaby for contracting and urban development,Summit Egypt for contracting and urban development,Summit Elzahaby for contracting and real estate development,Summit Egypt for contracting and real estate development,Summit Elzahaby for contracting and real estate projects,Summit Egypt for contracting and real estate projects
      "
        />

        <meta
          name="description"
          content="
      Summit Egypt is a real estate company that offers a wide selection of apartments, villas, houses, lands, and commercial real estate for sale and rent in Egypt.
      
      "
        />

        <title>Summit Egypt-Area</title>
      </Helmet>
      <div className='d-flex justify-content-center align-items-center h-75 flex-wrap'>
        <div className='w-75 w-sm-90 d-flex mt-3 justify-content-center flex-wrap'>
          <select onChange={handleSearchByGovId} onKeyDown={handleSearchByGovId} style={{
            width: "80%",
            fontSize: "20px",
            transition: "all 0.5s ease-in-out",
            display: "block",
            fontWeight: "bold",
          }} name='Gov' className='form-select-Amoor w-sm-90 mt-2 me-2 px-3 py-2 rounded-5' id='selectorGovs'>
            <option value="" selected disabled>All Governorates</option>
            <option value="6">Cairo</option>
            <option value="11">Giza</option>
            {/* <option value="1">Alexandria</option>
            <option value="2">Assiut</option>
            <option value="3">Aswan</option>
            <option value="4">Beheira</option>
            <option value="5">Bani Suef</option>
            <option value="7">Daqahliya</option>
            <option value="8">Damietta</option>
            <option value="9">Fayyoum</option>
            <option value="10">Gharbiya</option>
            <option value="12">Helwan</option>
            <option value="13">Ismailia</option>
            <option value="14">Kafr El-Sheikh</option>
            <option value="15">Luxor</option>
            <option value="16">Marsa Matrouh</option>
            <option value="17">Minya</option>
            <option value="18">Monofiya</option>
            <option value="19">New Valley</option>
            <option value="20">North Sinai</option>
            <option value="21">Port Said</option>
            <option value="22">Qalioubiya</option>
            <option value="23">Qena</option>
            <option value="24">Red Sea</option>
            <option value="25">Sharqiya</option>
            <option value="26">Sohag</option>
            <option value="27">South Sinai</option>
            <option value="28">Suez</option>
            <option value="29">Tanta</option> */}

          </select>
          <select onChange={handleSearchByAreaId} onKeyDown={handleSearchByAreaId} name='Areas' className='form-select-Amoor mt-2 me-2 px-3 py-2 rounded-5 w-sm-90 ' style={
            {
              display: 'none',
              width: '70%',
              transition: 'all 0.5s ease-in-out',
              fontSize: "18px",
              fontWeight: 400
            }
          } id='selectorAreas'>
            <option value="" selected disabled>All avaliable  Areas</option>
          </select>

          <select onChange={handleSearchByRegionId} name='Regions' className='form-select-Amoor mt-2 px-3 py-2 rounded-5 w-sm-90 ' style={
            {
              display: 'none',
              width: '30%',
              transition: 'all 0.5s ease-in-out',
              fontSize: "18px",
              fontWeight: 400

            }
          } id='selectorRegions'>
            <option value="" selected disabled>All Regions</option>
          </select>

        </div>


        <div className='Apartments mt-3 w-100'>
          {loading
            ? [true, false, true].map((item, index) => {
              return <ApartmentLoading key={index} flag={item} />;
            })
            :
            apartments.length == 0 ? <h2 className='text-center bg-primColor text-white p-5'>Sorry, There is no Apartments Found for This Region!</h2> :
              apartments.map((item, index) => {
                return <ApartmentPoster key={index} index={index} previousPage="Area" loading={loading} flat={item.data} flag={index%2==0? false :true } />
              })}
        </div>

        <div>
          {(response.count > 0 && (response.count / response.pageSize) >= response.pageIndex) ? <button onClick={loadMore} className="sButton sButtonGreen" id='loadMore'>Load More</button> : ""}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Area;


/* Helper Functions */
function creatDefaultELementInSelector(text) {
  let option = document.createElement('option');
  option.value = "";
  option.selected = true;
  // option.disabled = true;
  option.innerHTML = text;
  return option;
}

// this function to clear the options of selector when we change the value of selector
const clearAreaSelector = () => {
  const selector = document.querySelector('#selectorAreas');
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}
// this function to clear options of selector when we change the value of selector
const clearRegionsSelector = () => {
  const selectorRegions = document.querySelector('#selectorRegions');
  while (selectorRegions.firstChild) {
    selectorRegions.removeChild(selectorRegions.firstChild);
  }
}


// this function to append Child to Areas Selector
const appendChildToAreasSelector = (response) => {
  let areas = response
  let selector = document.querySelector('#selectorAreas');
  let option = creatDefaultELementInSelector("All avaliable  Areas");
  selector.append(option);
  selector.style.display = 'block';
  areas.forEach((area) => {
    let option = document.createElement('option');
    option.value = area.id;
    option.innerHTML = area.name;
    selector.appendChild(option);
  })
}
// this function to append Child to Regions Selector

const appendChildToRegionsSelector = (response) => {
  let regions = response;
  let selector = document.querySelector('#selectorRegions');
  let option = creatDefaultELementInSelector("All avaliable Regions");
  selector.append(option);
  selector.style.display = 'block';
  regions?.forEach((region) => {
    let option = document.createElement('option');
    option.value = region.id;
    option.innerHTML = region.name;
    selector.appendChild(option);
  })
}
//this function will display none the Regions selector if user select the default option in Areas Selector
const handleDisplayNoneForSelectorRegions = () => {
  let selector = document.querySelector('#selectorRegions');
  selector.style.display = 'none';
}
