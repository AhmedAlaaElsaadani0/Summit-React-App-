import React, { useState, useEffect } from 'react';
import ApartmentPoster from '../Apartment/ApartmentPosterComponent/ApartmentPoster';
import ApiManger from '../JsClasses/ApiManger';
import ApartmentLoading from '../Apartment/ApartmentLoadingComponent/ApartmentLoading';

function Area() {
  const [loading, setLoading] = useState(true);
  const [param, setParam] = useState('');
  const [response, setResponse] = useState({});
  const [apartments, setApartments] = useState([]);

  const getAllApartments = async () => {
    let flag = false;
    let response = await ApiManger.getAllApartments(param);
    let updatedApartments = [...apartments, ...response.data];
    
    for (let i = apartments.length; i < updatedApartments.length; i++) {
      updatedApartments[i] = {
        flag: flag ? true : false,
        data: updatedApartments[i]
      };
      flag = !flag;
    }
    setResponse(response);
    setApartments(updatedApartments);
    setParam(`?pageIndex=${response.pageIndex + 1}`);
    setLoading(false);
  };

  useEffect(() => {
    getAllApartments();
  }, []);
  async function loadMore() {
    let btn = document.getElementById('loadMore');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    await getAllApartments();
  }
  // When New Data is Fetched From Api we return button to it's state
  useEffect(() => {
    let btn = document.getElementById('loadMore');
    btn.disabled = false;
    btn.innerHTML = 'Load More';
  }, [apartments])

  return (
    <React.Fragment>
      <div className='d-flex justify-content-center align-items-center h-75 flex-wrap'>
        <select name='Area' className='form-select px-3 py-2 rounded-5 w-50' id='selectorArea'>
          <option value=''>Alex</option>
          <option value=''>Dek</option>
          <option value=''>Cairo</option>
        </select>
        <div className='Apartments mt-3 w-100'>
          {loading
            ? [true, false, true].map((item, index) => {
                return <ApartmentLoading key={index} flag={item} />;
              })
            : 
            apartments.map((item, index) => {
              console.log(item);
              return <ApartmentPoster key={index} previousPage="Buy" loading={loading} flat={item.data} flag={item.flag} />
            })}
        </div>
        
        <div>
          <button onClick={loadMore} className="sButton sButtonGreen" id='loadMore'>Load More</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Area;
