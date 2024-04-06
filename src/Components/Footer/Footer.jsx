import React, { lazy } from 'react'
import FooterStyle from './Footer.module.css'
import { useTranslation } from 'react-i18next';
const Link=lazy(()=>import('../Link/Link'))
export default function Footer() {
  const { t } = useTranslation();
  return  (
    <div className={"container-fluid  "}>
      <footer className={"row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 border-top  "+FooterStyle.FooterBackground}>

        <div className="col-lg col-md-3 col-sm-6 mb-3">
        <h5 className="text-primColor">{t("Footer Service")}</h5>
          <ul className="nav flex-column p-0 ">
            <li className="nav-item mb-2"><Link to="./Buy" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer Buy")}</Link></li>
            <li className="nav-item mb-2"><Link to="./Rent" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer Rent")}</Link></li>
          </ul>
        
        </div>

        <div className="col-lg col-md-3 text-center col-sm-6 mb-3">
          <h5 className="text-primColor ">{t("Footer Companey")}</h5>
          <ul className="nav flex-column p-0">
            <li className="nav-item mb-2"><Link to="./" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer Home")}</Link></li>
            <li className="nav-item mb-2"><Link to="./About" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer About")}</Link></li>
            <li className="nav-item mb-2"><Link to="./Contact" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer Contact")}</Link></li>
          </ul>
        </div>
        {/* <div className="col-lg col-md-3 text-center col-sm-6 mb-3">
          <h5 className="text-primColor ">{t("Footer Support")}</h5>
          <ul className="nav flex-column p-0">
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer Help")}</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer Feedback")}</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer Terms")}</Link></li>
            
          </ul>
        </div> */}

        <div className="col-lg col-md-3 text-center col-sm-6 mb-3">
          <h5 className="text-primColor ">{t("Footer Social")}</h5>
          <ul className="nav flex-column p-0">
            <li className="nav-item mb-2"><a href="https://www.facebook.com/Summit.develpmentegy?sfnsn=scwspmo&mibextid=RUbZ1f" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer Facebook")}</a></li>
            <li className="nav-item mb-2"><a href="https://www.instagram.com/invites/contact/?i=jfc5f4kwlaj8&utm_content=ttcxci2" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer Instagram")}</a></li>
            <li className="nav-item mb-2"><a href="https://wa.me/message/T4HZAXRBWHYTP1?src=qr" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>{t("Footer whats")}</a></li>
          </ul>
        </div>
        <div className="col-lg col-md-12  col-sm-6 mb-3">
        <ul className="nav  jsutify-content-center align-items-center h-100 d-flex flex-wrap">
            <li className="nav-item mb-2 w-100"><i className="fa-solid fa-location-dot "></i>    {t("Footer Address Details")}</li>
            <li className="nav-item mb-2 w-100"><i className="fa-solid fa-phone "></i>   {t("Footer Phone Details")} </li>
            <li className="nav-item mb-2 w-100"><i className="fa-solid fa-envelope "></i>     {t("Footer Email Details")}</li>
          </ul>
        
        </div>
        <div className='row justify-content-between w-100 '>
            <p className='mb-0'>{t("Footer Copy")}</p>
            <p dir="rtl" className=" mb-1 text-center m-auto"
                        style={{fontSize: '12px', color: "rgba(255, 255, 255, 0.5)"}}> {t("Footer IzI1")} <a
                            style={{color: "rgba(255, 255, 255, 0.5)", fontWeight: "600", textDecoration: "none",
                          }}  href="https://www.izitechs.com">IzI Techs</a> {t("Footer IzI2")}</p>
               
        </div>
      </footer>
    </div>
  );
}
