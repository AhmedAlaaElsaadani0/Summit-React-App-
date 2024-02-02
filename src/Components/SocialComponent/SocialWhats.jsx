import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const SocialWhats = () => {
  const [hovered, setHovered] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const whatsappIcon = document.querySelector('.WhatsappIcon');
    const whatsappIconText = document.querySelector('.WhatsappSocial .WhatsappText');

    const handleMouseOver = () => {
      whatsappIcon.style.transform = 'scale(1.3)';
      whatsappIcon.style.transition = 'all 0.5s ease-in-out';
      whatsappIconText.style.opacity = '100%';
    };

    const handleMouseOut = () => {
      whatsappIcon.style.transition = 'all 0.5s ease-in-out';
      whatsappIcon.style.transform = 'scale(1.2)';
      whatsappIconText.style.opacity = '0%';
    };

    whatsappIcon.addEventListener('mouseover', handleMouseOver);
    whatsappIcon.addEventListener('mouseout', handleMouseOut);

    return () => {
      whatsappIcon.removeEventListener('mouseover', handleMouseOver);
      whatsappIcon.removeEventListener('mouseout', handleMouseOut);
    };
  }, [hovered]);
  const [flagDirection, setflagDirection] = useState(i18n.language == 'en');

  return (
    <> 
      <div  className={` position-fixed d-flex WhatsappSocial justify-content-center align-items-center mb-3 bottom-0  ${ flagDirection?" me-3 end-0  " : " ms-3 start-0 "}`}>
        <div
          style={{
            transition: 'all 0.5s ease-in-out',
            opacity: '0%',
            overflow: 'hidden',
          }}
          className={
            `bg-primColor text-white mb-5 WhatsappText shadow rounded-top-0 rounded-bottom-0 rounded-end-5 rounded-start-5 rounded-3 p-2  
            ${flagDirection ? 'me-2':'ms-2'}`}
        >
          <p className='m-0'>{t("Whatsapp icon message")}</p>
        </div>
        <div
          className='WhatsappIcon rounded-circle bg-success shadow d-flex justify-content-center text-white'
          style={{ transform: 'scale(1.2)' }}
        >
          <i className='fa-brands fa-2x m-2 fa-whatsapp'></i>
        </div>
      </div>
    </>
  );
};

export default SocialWhats;
