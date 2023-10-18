import React, { useState, useEffect } from 'react';
import ApartmentPoster from '../Apartment/ApartmentPosterComponent/ApartmentPoster';
import startWork from '../JsClasses/Forms';
import ApartmentLoading from '../Apartment/ApartmentLoadingComponent/ApartmentLoading';
import ApiManger from '../JsClasses/ApiManger';

function Rent() {

  const [param, setParam] = useState('?Type=1');
  const [response, setResponse] = useState({});
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllApartments = async () => {
    let flag = false;
    let response = await ApiManger.getAllApartments(param);
    let updatedApartments = [...apartments, ...response.data];
    console.log(updatedApartments);
    for (let i = apartments.length; i < updatedApartments.length; i++) {
      updatedApartments[i] = {
        flag: flag ? true : false,
        data: updatedApartments[i]
      };
      flag = !flag;
    }
    setResponse(response);
    setApartments(updatedApartments);
    setParam(`?Type=1&pageIndex=${response.pageIndex + 1}`);
    setLoading(false);
  };

  useEffect(() => {
    startWork();
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
        <form action='' dir='rtl' id='RentPageSearch' className='d-flex w-75 justify-content-center'>
          <div className='w-75 position-relative text-secondary'>
            <input name='searchElement' type='text' className='form-control mb-3 form-label mb-0 rounded-5 p-2 pe-3'
              placeholder='search' />
            <i className='fa-solid fa-magnifying-glass pb-3 position-absolute top-50 translate-middle-y ms-3 start-0'></i>
          </div>
          <button type='submit' className='btn mb-3 btn-primary rounded-5 mx-2 px-5 py-0'>search</button>
        </form>
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

export default Rent;
