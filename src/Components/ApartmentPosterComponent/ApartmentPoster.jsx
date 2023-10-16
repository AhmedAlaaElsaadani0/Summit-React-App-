import React, { Component } from 'react'

export default class ApartmentPoster extends Component {
   
    componentDidMount(){
        document.querySelectorAll('.AbartmentImage').forEach(
            apartmentImage=>{
                document.querySelectorAll('.AbartmentDesc').forEach(
                    apartmentDesc=>{
                        apartmentImage.style.height=`${apartmentDesc.clientHeight}px`;
                    }
                )}
                )
    }
    render() {
let flag=!this.props.flag;
        return <React.Fragment>
        <div className={"w-75 p-0 mt-3 rounded-4 m-auto shadow " + (flag?"bg-primColor":"bg-white") }>
        <div className="container-fluied overflow-hidden">
        <div className="row">

        <div className={"col-md-8 fs-3 fw-bolder AbartmentDesc " +( flag?"text-white":"text-primColor")}>
            <div className={" fs-3 px-3 fw-bolder w-100"} >
            <h2 className=" py-2 ">Apartment for rent in Sheikh Zayed City </h2>
    <h2 className="py-2 "> Al Khamayel Compound</h2>

    <div className={" text-black fs-4  p-4 "+(flag?" text-white":"text-black") }>
    <p id='Floor'> Floor  : <span className=" fw-normal"> First floor </span></p>
     
        <p id='Price'>First floor Price : <span className=" fw-normal"> 300000 </span></p>
          <p  id="Apartmentn"> Apartmentn:  <span className=" fw-normal">excellent</span></p>
            <p   id="Descripition">Descripition: <span className=" fw-normal">
Super deluxe apartment consists of 4 rooms, a living room, 2 bathrooms, and a kitchen........</span></p>
                
                        <button className='btn btn-outline-dark '> Details</button>
                        </div>
            </div>

                </div>
            <div className="col-md-4 AbartmentImage ">
<img src="Images/RandomBuilding.jpg" className='w-100 h-100' alt="apartment Picture" />
</div>
    


      </div>
        </div>
        </div>
</React.Fragment>


    }}