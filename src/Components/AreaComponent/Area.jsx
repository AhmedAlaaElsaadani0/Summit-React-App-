import React, { Component } from 'react'
import ApartmentPoster from '../ApartmentPosterComponent/ApartmentPoster'

export default class Area extends Component {
  render() {
    let  arr=[{flag:false},{flag:true},{flag:false},{flag:true},{flag:false},{flag:true},{flag:false},{flag:true},{flag:false}]
    return <React.Fragment>
    <div className='d-flex justify-content-center align-items-center h-75 flex-wrap'>
            <select name="Area" className='form-select px-3 py-2 rounded-5  w-50' id="selectorArea">
              <option value="">Alex</option>
              <option value="">Dek</option>
              <option value="">Cairo</option>

            </select>
        <div className="Apartments overflow-y-scroll  w-100">
            {arr.map((item,index)=>{
                return <ApartmentPoster key={index} flag={item.flag}/>
            })}


        </div>

    </div>
</React.Fragment>
  }
}
