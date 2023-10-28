import React, { Component } from 'react'

export default class SocialWhats extends Component {
  // add Evenet to the Component Elements
// add the Event to the Whatsapp Icon

  addEventToWhatsappIcon(){
    let whatsappIcon = document.querySelector('.WhatsappIcon');
    whatsappIcon.addEventListener('mouseover',()=>{
      let whatsappIcon = document.querySelector('.WhatsappIcon');
      whatsappIcon.style.transform = 'scale(1.3)';
      whatsappIcon.style.transition = 'all 0.5s ease-in-out';
      let whatsappIconText = document.querySelector('.WhatsappSocial .WhatsappText');
      whatsappIconText.style.opacity = '100%';
      
    });
    whatsappIcon.addEventListener('mouseout',()=>{
      let whatsappIcon = document.querySelector('.WhatsappIcon');
      whatsappIcon.style.transition = 'all 0.5s ease-in-out';
      whatsappIcon.style.transform = 'scale(1.2)';
      let whatsappIconText = document.querySelector('.WhatsappSocial .WhatsappText');
      whatsappIconText.style.opacity = '0%';
      
    });
  }
  
  //active the Events
  componentDidMount(){
    this.addEventToWhatsappIcon();
  }
  render() {
    return <React.Fragment>
<div className='position-fixed d-flex WhatsappSocial justify-content-center align-items-center bottom-0  end-0 mb-3 me-3'>
    <div style={
      {
        taransition:'all 0.5s ease-in-out',
        opacity:"0%" ,
        overflow:'hidden',
      }
    }
     className='bg-primColor text-white mb-5 WhatsappText shadow  rounded-top-0  rounded-bottom-0   rounded-end-5 rounded-start-5 
      rounded-3 p-2 me-2 ' >
    <p className='m-0'>Do you need to send Message?</p>

      </div>   
<div className='  WhatsappIcon rounded-circle bg-success shadow d-flex justify-content-center text-white ' style={{transform:'scale(1.2)',}}>
        <i className="fa-brands fa-2x m-2 fa-whatsapp"> </i>
        </div>
</div>
    </React.Fragment>
  }
}
