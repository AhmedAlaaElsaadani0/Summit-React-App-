import React, { Component } from 'react'
import ApartmentPoster from '../ApartmentPosterComponent/ApartmentPoster'

export default class Rent extends Component {
  render() {
    let  arr=[{flag:false},{flag:true},{flag:false},{flag:true},{flag:false},{flag:true},{flag:false},{flag:true},{flag:false}]
    return <React.Fragment>
    <div className='d-flex justify-content-center align-items-center h-75 flex-wrap'>
        <form className='w-25 m-auto rounded-3 overflow-hidden' action="">
        <input type="text" className='form-control px-3 py-2' placeholder='Search' /> 

        </form>
        <div className="Apartments overflow-y-scroll  w-100">
            {arr.map((item,index)=>{
                return <ApartmentPoster key={index} flag={item.flag}/>
            })}


        </div>

    </div>
</React.Fragment>}
}
