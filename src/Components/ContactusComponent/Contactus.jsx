import React from 'react';
import { Helmet } from 'react-helmet-async';
import styleContactus from './Contactus.module.css';
import { useTranslation } from 'react-i18next';

const Contactus = (props) => {
  const { t, i18n } = useTranslation();
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
        <div className={`${styleContactus.widthEle} container p-5 justify-content-center d-flex bg-primColor mob-style rounded-5 align-items-center flex-column `}>
          <h2 className={`text-white mb-5 ${styleContactus.fontSize}`}>{t('Contact Paragraph')}</h2>
          <button className='btn bg-white btn-toolbar .text-primColor fs-1 px-4 py-1 fw-bolder mb-5'>{t("Contact Header")}</button>
          <div className={`d-flex justify-content-between socialMedia mb-5 ${styleContactus.socialMedia}`}>
            <div
              className={`rounded-circle ${styleContactus.socialMediaMember}`}
              style={{
                width: '50px',
                height: '50px',
              }}
            ></div>

            <div
              className={`rounded-circle ${styleContactus.socialMediaMember}`}
              style={{
                width: '50px',
                height: '50px',
              }}
            ></div>

            <div
              className={`rounded-circle ${styleContactus.socialMediaMember}`}
              style={{
                width: '50px',
                height: '50px',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
