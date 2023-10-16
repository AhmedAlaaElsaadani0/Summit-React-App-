import React, { Component } from 'react'
import ApartmentPoster from '../ApartmentPosterComponent/ApartmentPoster'

export default class Buy extends Component {
  render() {
       let  arr=[{flag:false},{flag:true},{flag:false},{flag:true},{flag:false},{flag:true},{flag:false},{flag:true},{flag:false}]
    return <React.Fragment>
    <div className='d-flex justify-content-center align-items-center h-75 flex-wrap'>
    <form action="" dir='rtl' id="BuyPageSearch" className="d-flex w-75 justify-content-center">
      <div className="w-75 position-relative text-secondary ">
        <input name="searchElement" type="text" className="form-control mb-3 form-label mb-0 rounded-5   p-2 pe-3  "
          placeholder="search"/>
        <i className="fa-solid fa-magnifying-glass pb-3 position-absolute top-50 translate-middle-y ms-3 start-0  "></i>

      </div>
      <button type="submit" className="sButtonAdditionForm btn mb-3 btn-primary rounded-5 mx-2 px-5 py-0"> srarch</button>
    </form>
<div className="Apartments overflow-y-scroll  w-100">
            {arr.map((item,index)=>{
                return <ApartmentPoster key={index} flag={item.flag}/>
            })}


        </div>

    </div>
</React.Fragment>
  }
}
