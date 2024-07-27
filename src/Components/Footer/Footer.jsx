import React, { lazy } from "react";
import FooterStyle from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const Link = lazy(() => import("../Link/Link"));
export default function Footer() {
  const { t } = useTranslation();
  const firstLinks = [
    { name: t("Footer Buy"), link: "/Buy" },
    { name: t("Footer Rent"), link: "/Rent" },
  ];
  const secondLinks = [
    { name: t("Footer Home"), link: "/" },
    { name: t("Footer About"), link: "/About" },
    { name: t("Footer Contact"), link: "/Contact" },
  ];
  const socialMedia = [
    {
      name: t("Footer Facebook"),
      link: "https://www.facebook.com/Summit.develpmentegy?sfnsn=scwspmo&mibextid=RUbZ1f",
    },
    {
      name: t("Footer Instagram"),
      link: "https://www.instagram.com/invites/contact/?i=jfc5f4kwlaj8&utm_content=ttcxci2",
    },
    {
      name: t("Whatsapp"),
      link: "https://wa.me/message/T4HZAXRBWHYTP1?src=qr",
    },
  ];
  const connectDetails = [
    { icon: "fa-location-dot", text: t("Footer Address Details") },
    { icon: "fa-phone", text: t("Footer Phone Details") },
    { icon: "fa-envelope", text: t("Footer Email Details") },
  ];
  return (
    <div className={"container-fluid overflow-hidden "}>
      <footer
        className={
          "row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 border-top  " +
          FooterStyle.FooterBackground
        }
      >
        <div className="col-lg col-md-3 col-sm-6 mb-3">
          <h5 className="text-primColor">{t("Footer Service")}</h5>
          <ul className="nav flex-column p-0 ">
            {firstLinks.map((link, index) => {
              return (
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="nav-item mb-2"
                >
                  <Link
                    to={link.link}
                    className={
                      "nav-link p-0 text-white " + FooterStyle.Footer_a
                    }
                  >
                    {link.name}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="col-lg col-md-3 text-center col-sm-6 mb-3">
          <h5 className="text-primColor ">{t("Footer Companey")}</h5>
          <ul className="nav flex-column p-0">
            {secondLinks.map((link, index) => {
              return (
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="nav-item mb-2"
                >
                  <Link
                    to={link.link}
                    className={
                      "nav-link p-0 text-white " + FooterStyle.Footer_a
                    }
                  >
                    {link.name}
                  </Link>
                </motion.li>
              );
            })}
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
            {socialMedia.map((link, index) => {
              return (
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="nav-item mb-2"
                >
                  <a
                    href={link.link}
                    className={
                      "nav-link p-0 text-white " + FooterStyle.Footer_a
                    }
                  >
                    {link.name}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="col-lg col-md-12  col-sm-6 mb-3">
          <ul className="nav  jsutify-content-center align-items-center h-100 d-flex flex-wrap">
            {connectDetails.map((detail, index) => {
              return (
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="nav-item mb-2 w-100 text-start"
                >
                  <i className={`fas ${detail.icon} text-white`}></i>
                  <span className="text-white ms-2">{detail.text}</span>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="row justify-content-between w-100 ">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-0"
          >
            {t("Footer Copy")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            dir="rtl"
            className=" mb-1 text-center m-auto"
            style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.5)" }}
          >
            {" "}
            {t("Footer IzI1")}{" "}
            <a
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontWeight: "600",
                textDecoration: "none",
              }}
              href="https://www.izitechs.com"
            >
              IzI Techs
            </a>{" "}
            {t("Footer IzI2")}
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
