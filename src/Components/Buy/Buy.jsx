import React, { useState, useEffect } from 'react';
import ApiManger from '../JsClasses/apiManager';
import { Helmet } from 'react-helmet-async';
import ApartmentPoster from '../Apartment/ApartmentPosterComponent/ApartmentPoster';
import ApartmentLoading from '../Apartment/ApartmentLoadingComponent/ApartmentLoading';
import { useTranslation } from 'react-i18next';
import Filter from '../Filter/Filter';

const Buy = () => {

  const [response, setResponse] = useState({
    regionId: '',
    pageIndex: 0,
    areaId: '',
    govId: '',
    data: []
  }
  );
  // const [SearchValue, setsearchValue] = useState("")
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const [prevLang, setPrevLang] = useState(i18n.language);
  const [buttonPressed, setButtonPressed] = useState(false);


  // this main API call to get all apartments by using param
  const getAllApartments = async (pageIndex = response.pageIndex + 1, replaceApartmentFlag = false, govId = response.govId, areaId = response.areaId, regionId = response.regionId) => {
    try {
      // Construct the API endpoint
      const endpoint = `?Type=2&pageIndex=${pageIndex}&language=${i18n.language}&regionId=${regionId}&govId=${govId}&areaid=${areaId}`;

      // Call the API to fetch apartments
      const apiResponse = await ApiManger.getAllApartments(endpoint);

      // Update state
      setResponse(prevResponse => ({
        ...prevResponse,
        ...apiResponse,
        pageIndex: apiResponse?.data?.length === 0 ? apiResponse.pageIndex : apiResponse.pageIndex+1,
        data: replaceApartmentFlag ? apiResponse.data : [...prevResponse.data, ...apiResponse.data]
      })
      );
      setLoading(false);
    } catch (error) {
      // Handle errors
      console.error("Error fetching apartments:", error);
      // Optionally, you can handle errors by displaying an error message to the user or logging them
    }
  };

  //DidMount
  useEffect(() => {
    getAllApartments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Effect to load apartments only when language changes
  useEffect(() => {
    // Check if language has changed
    if (prevLang !== i18n.language) {
      setLoading(true);
      setResponse({
        ...response, data: []
      });//to clear the data when we change the language
      // Call the API to fetch apartments with the updated language
      getAllApartments(response.pageIndex - 1, true);
      // Update the previous language to the current language
      setPrevLang(i18n.language);
    }
  }, [i18n.language, prevLang]);
  // this function to load more apartments when we click on load more button
  async function loadMore() {
    // Set button pressed state to true
    setButtonPressed(true);
    await getAllApartments(response.pageIndex).then(() => {
      // Reset button state after API call
      setButtonPressed(false);
    })
  }
  // Effect to reset button state after response state changes
  useEffect(() => {
    let btn = document.getElementById('loadMore');
    if (buttonPressed && response?.data?.length > 0) {
      // Reset button state
      btn.disabled = false;
      btn.innerHTML = 'Load More';
    }
  }, [response, buttonPressed]);
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

        <title>Summit Egypt-Buy</title>
      </Helmet>

      <div className='d-flex  justify-content-center align-items-center flex-wrap' style={{ minHeight: "100%" }}>
        {/* <form onSubmit={e => handleSearchOnSubmit(e)} action='' id='RentPageSearch' className='d-flex mt-3 widthForSearch  justify-content-center'>
          <div className='w-75 position-relative text-secondary'>
            <i className='fa-solid fa-magnifying-glass pb-3 position-absolute top-50 translate-middle-y me-3 end-0'></i>
            <input onChange={e => handleSearchOnChange(e)} name='searchElement' type='text' className='form-control-Amoor mb-3  form-label mb-0 rounded-5 p-3 pe-3'
              placeholder='Search By Title' />
          </div>
        </form> */}
        <div className="Apartments mt-5  w-100    ">
          {loading ?
            [true, false, true].map((item, index) => {
              return <ApartmentLoading key={index} flag={item} />
            })
            :
            response?.data?.length == 0 ?
              <h2 className='text-center bg-primColor text-white p-5 '>{t("Not Found Apart Message")}</h2>
              :
              response?.data.map((item, index) => {
                return <ApartmentPoster key={index} index={index} previousPage="Area" loading={loading} flat={item} flag={index % 2 == 0 ? false : true} />
              })}
        </div>
        <div>
          {(response?.count > 0 && (response?.count / response?.pageSize) >= response?.pageIndex) ? <button onClick={(e) => {
            // Call the API to load more apartments
            e.target.disabled = true;
            e.target.innerHTML = '<i className="fa-solid fa-spinner fa-spin"></i>';
            loadMore();
          }
          } className="sButton sButtonGreen" id='loadMore'>{t("Load More")}</button> : ""}
        </div>
      </div>
    <Filter getAllApartments={getAllApartments} loading={loading} setLoading={setLoading} setResponse={setResponse} response={response}  />
    </React.Fragment>
  );
};

export default Buy;
