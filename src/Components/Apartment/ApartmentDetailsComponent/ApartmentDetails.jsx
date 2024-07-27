import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ApartmentSlider from "../ApartmentSliderComponent/ApartmentSlider";
import { useTranslation } from "react-i18next";
import ApiCalling from "../../JsClasses/apiManager";
import ApartmentLoading from "../ApartmentLoadingComponent/ApartmentLoading";
import style from "./ApartmentDetails.module.css";
import { motion } from "framer-motion";
import soldImage from "../../../assets/Images/Sold.png";
const ApartmentDetails = (props) => {
  const { t, i18n } = useTranslation();
  const [flat, setFlat] = useState(null);
  const [thePopImageFlag, setThePopImageFlag] = useState(false);
  const { id } = useParams();
  const socialMedia = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/Summit.develpmentegy?sfnsn=scwspmo&mibextid=RUbZ1f",
      icon: "fa-facebook",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/invites/contact/?i=jfc5f4kwlaj8&utm_content=ttcxci2",
      icon: "fa-instagram",
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/message/T4HZAXRBWHYTP1?src=qr",
      icon: "fa-whatsapp",
    },
  ];
  const [apartmentSoldFlag, setApartmentSoldFlag] = useState(false);
  useEffect(() => {
    setFlat(null);
    // make ApartmentImages equal ApartmentDesc height
    const ApartmentDesc = document.querySelector(".ApartmentDesc");
    const ApartmentImages = document.querySelector(".ApartmentImages");
    if (ApartmentDesc && ApartmentImages) {
      ApartmentImages.style.height = ApartmentDesc.clientHeight + "px";
    }
    getApartment();
  }, [i18n.language]);
  // get specific apartment from server
  const getApartment = async () => {
    const { data } = await ApiCalling.getApartmentById(id, i18n.language);
    if (data.length === 0) {
      setApartmentSoldFlag(true);
    } else {
      setFlat(data[0]);
      setApartmentSoldFlag(false);
    }
  };
  return (
    <React.Fragment>
      <div className=" mt-3 d-flex justify-content-center  align-items-center">
        {apartmentSoldFlag ? (
          <div className="d-flex flex-column align-items-center">
            <img
              src={soldImage}
              alt="sold images"
              style={{ width: "300px" }}
            />
            <h3 className="text-primColor fw-bolder">
              {t("we are sorry but this apartment was sold")}
            </h3>
          </div>
        ) : flat == null ? (
          <ApartmentLoading />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={` w-sm-90 p-0 rounded-5 rounded-top-end-0 overflow-hidden m-auto shadow  `}
            style={{ width: "80%" }}
          >
            <div className="overflow-hidden">
              <div className="row position-relative">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: i18n.language === "ar" ? 100 : -100,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="col-lg-5 AbartmentImage p-0 overflow-hidden"
                >
                  <div className=" m-auto " style={{ height: "590px" }}>
                    <ApartmentSlider
                      key={flat.id}
                      flatImages={flat.pictures}
                      functionOnClickImage={() =>
                        setThePopImageFlag(!thePopImageFlag)
                      }
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: i18n.language === "ar" ? -100 : 100,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`col-lg-7 fs-2 fw-bolder ApartmentDesc bg-primColor text-white`}
                >
                  <div className="fs-3 px-3 fw-bolder w-100">
                    <h2 className="py-2">{flat.title} </h2>
                    <p className="pt-2 fs-4">
                      {flat.governorate + "- " + flat.area + "- " + flat.region}
                    </p>
                    <div className={`text-black fs-4 p-4 text-white`}>
                      <p id="Floor">
                        {t("Apart Floor")}{" "}
                        <span className="fw-normal"> {flat.floor} </span>
                      </p>
                      <p id="Price">
                        {t("Apart Price")}{" "}
                        <span className="fw-normal"> {flat.price} </span>
                      </p>
                      <p id="Apartment">
                        {t("Apart Condition")}{" "}
                        <span className="fw-normal">{flat.condition}</span>
                      </p>
                      <p id="Description">
                        {t("Apart Descrp")}{" "}
                        <pre className="fw-bolder">{flat.description}</pre>
                      </p>{" "}
                      <div className="w-100  d-flex justify-content-between">
                        <div className="contact text-white">
                          <h5 className="fw-bolder">{t("Apart Contact")}</h5>

                          <div
                            className={
                              "d-flex justify-content-center socialMedia "
                            }
                          >
                            {socialMedia.map((link, index) => {
                              return (
                                <motion.div
                                  initial={{
                                    opacity: 0,
                                    x: -100,
                                  }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: 0.4*index }}
                                  key={index}
                                  className={style.socialMember}
                                >
                                  <a
                                    target="_blank"
                                    href={link.link}
                                    className="text-decoration-none  "
                                  >
                                    <i className={"fa-brands " + link.icon}></i>
                                  </a>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                        <button className={"sButtonWhite sButton p-0 p-1"}>
                          {t("Apart Price")} {flat.price}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div
                  className={`data position-absolute top-0 z-1 end-0 me-4 mt-2 rounded-2 bg-white  text-primColor `}
                  style={{ width: "fit-content" }}
                >
                  <p id="date" className="mb-0">
                    {t("Apart Post")}
                    <span className="fw-normal"> {flat.createdAt} </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {thePopImageFlag ? (
        <div
          className="w-100 position-fixed top-0 bottom-0 z-3 d-flex  justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className={style.popImage}>
            <ApartmentSlider
              key={flat?.id}
              isUsingInCard={false}
              flatImages={flat?.pictures}
              thePopImageFlag={thePopImageFlag}
            />
          </div>
          <button
            className="btn-close btn position-absolute top-0 left-0 p-3 z-3 rounded-circle bg-white text-bg-danger  "
            onClick={() => setThePopImageFlag(!thePopImageFlag)}
          ></button>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default ApartmentDetails;
