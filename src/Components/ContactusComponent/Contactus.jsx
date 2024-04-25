import React from 'react';
import { Helmet } from 'react-helmet-async';
import styleContactUs from './Contactus.module.css';
import { useTranslation } from 'react-i18next';

const ContactUs = (props) => {
  const { t } = useTranslation();
  return (
    <>
      {props.headFlag ? (
        <Helmet>
          <meta
            name="Keywords"
            content="Summit,Summit Egypt,Summit Elzahaby,Summit Elzahaby for real estate,Summit Egypt for real estate,Summit Elzahaby for real estate investment,Summit Egypt for real estate investment,Summit Elzahaby for real estate investment and urban development,Summit Egypt for real estate investment and urban development,Summit Elzahaby for real estate development,Summit Egypt for real estate development,Summit Elzahaby for real estate projects,Summit Egypt for real estate projects,Summit Elzahaby for investment,Summit Egypt for investment,Summit Elzahaby for contracting,Summit Egypt for contracting,Summit Elzahaby for contracting and real estate investment,Summit Egypt for contracting and real estate investment,Summit Elzahaby for contracting and urban development,Summit Egypt for contracting and urban development,Summit Elzahaby for contracting and real estate development,Summit Egypt for contracting and real estate development,Summit Elzahaby for contracting and real estate projects,Summit Egypt for contracting and real estate projects"
          />
          <meta
            name="description"
            content="Summit Egypt is a real estate company that offers a wide selection of apartments, villas, houses, lands, and commercial real estate for sale and rent in Egypt."
          />
          <title>Summit Egypt-ContactUs</title>
        </Helmet>
      ) : null}
      <div className='d-flex justify-content-center align-items-center mt-5 ' id='Contact'>
        <div className={`${styleContactUs.widthEle} container p-5 justify-content-center d-flex bg-primColor mob-style rounded-5 align-items-center flex-column `}>
          <h2 className={` mb-5 headingForSeactions text-center  ${styleContactUs.headingContact}`}>{t('Contact Paragraph')}</h2>
          <button className='btn bg-white btn-toolbar text-primColor fs-1 px-4 py-1 fw-bolder mb-5 '>{t("Contact Header")}          </button>
          <div className={`d-flex justify-content-between socialMedia mb-5 ${styleContactUs.socialMedia}`}>
            <div
              className={`rounded-circle d-flex justify-content-center align-items-center ${styleContactUs.socialMediaMember}`}
              style={{
                width: '50px',
                height: '50px',
              }}
            > 
            <a href='https://www.facebook.com/Summit.develpmentegy?sfnsn=scwspmo&mibextid=RUbZ1f' className='text-decoration-none  '>

            <i style={{fontSize:"2rem"}} className="fa-brands  text-primColor fa-facebook"></i>
            </a>
            </div>

            <div
              className={`rounded-circle d-flex justify-content-center align-items-center ${styleContactUs.socialMediaMember}`}
              style={{
                width: '50px',
                height: '50px',
              }}
            > 
            <a href='https://www.instagram.com/invites/contact/?i=jfc5f4kwlaj8&utm_content=ttcxci2' className='text-decoration-none  '>

            <i style={{fontSize:"2rem"}} className="fa-brands text-primColor fa-instagram"></i>
            </a>
            </div>

            <div
              className={`rounded-circle d-flex justify-content-center align-items-center ${styleContactUs.socialMediaMember}`}
              style={{
                width: '50px',
                height: '50px',
              }}
            > 
            <a href='https://wa.me/message/T4HZAXRBWHYTP1?src=qr' className='text-decoration-none  '>

            <i style={{fontSize:"2rem"}} className="fa-brands text-primColor fa-whatsapp"></i>
            </a>
            </div>
          </div>
          <p dir='ltr' className='text-bg-white fs-3  text-white m-0'>
            
             +2010 241 288 86

          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
