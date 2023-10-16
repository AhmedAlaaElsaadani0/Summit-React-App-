import React, { Component } from 'react'
import styleContactus from './Contactus.module.css'
export default class Contactus extends Component {
  render() {
    return <React.Fragment>
            <div className='d-flex justify-content-center align-items-center h-75' id='Contact'>
                
        <div className={styleContactus.widthEle+" container p-5 justify-content-center d-flex bg-primColor rounded-5 align-items-center flex-column "}>
           <h2 className={'text-white mb-5 '+styleContactus.fontSize}>Get started with Summit</h2>
           <button className='btn bg-white btn-toolbar .text-primColor fs-1 px-5 py-2  mb-5'>Call us</button>
           <div className={'d-flex justify-content-between socialMedia mb-5 '+ styleContactus.socialMedia }>
            <div className={"rounded-circle "+styleContactus.socialMediaMember} style={
               { width:'50px',
                height:'50px',
                }
            }>
            </div>
            
        <div className={"rounded-circle "+styleContactus.socialMediaMember} style={{
            width:'50px',
            height:'50px',
            }
            }>
            </div>
            
            <div className={"rounded-circle "+styleContactus.socialMediaMember} style={
               { width:'50px',
                height:'50px',
                }
                
            }>
            </div>
           </div>
            </div>
            </div>
        </React.Fragment>
  }
}
