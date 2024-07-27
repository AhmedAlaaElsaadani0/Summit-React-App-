import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import homeStyle from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import homeImage from '../../assets/Images/Pyramids.jpg';
const About = lazy(() => import("../AboutComponent/About"));
// const Contactus = lazy(() => import('../ContactusComponent/Contactus'));
const Link = lazy(() => import("../Link/Link"));

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <meta
          name="Keywords"
          content="Summit,Summit Egypt,Summit Elzahaby,Summit Elzahaby for real estate,Summit Egypt for real estate,Summit Elzahaby for real estate investment,Summit Egypt for real estate investment,Summit Elzahaby for real estate investment and urban development,Summit Egypt for real estate investment and urban development,Summit Elzahaby for real estate development,Summit Egypt for real estate development,Summit Elzahaby for real estate projects,Summit Egypt for real estate projects,Summit Elzahaby for investment,Summit Egypt for investment,Summit Elzahaby for contracting,Summit Egypt for contracting,Summit Elzahaby for contracting and real estate investment,Summit Egypt for contracting and real estate investment,Summit Elzahaby for contracting and urban development,Summit Egypt for contracting and urban development,Summit Elzahaby for contracting and real estate development,Summit Egypt for contracting and real estate development,Summit Elzahaby for contracting and real estate projects,Summit Egypt for contracting and real estate projects ,,Real Estate for Sale,Properties for Rent,Houses for Sale,Apartments for Rent,Luxury Homes,Commercial Real Estate,Investment Properties,Vacation Rentals,Property Management Services,Real Estate Listings,Residential Properties,Real Estate Agents,Buy House,Sell House,Rental Listings,Arabic Keywords,عقارات للبيع,عقارات للإيجار,بيوت للبيع,شقق للإيجار,منازل فاخرة,عقارات تجارية,عقارات استثمارية,إيجار إجازات,خدمات إدارة العقارات,قوائم العقارات,عقارات سكنية,وكلاء العقارات,شراء منزل,بيع منزل ,قوائم الإيجار"
        />
        <meta
          name="description"
          content="Summit Egypt is a real estate company that offers a wide selection of apartments, villas, houses, lands, and commercial real estate for sale and rent in Egypt."
        />
        <title>Summit Egypt</title>
      </Helmet>
      <div
        className="container-fluid p-5 justify-content-center d-flex align-items-center myVh-100 overflow-hidden"
        id="Home"
      >
        <div className="row">
          <motion.div
            initial={{ opacity: 0, x: i18n.language==="ar"? 100:-100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-md-6"
          >
            <div className="d-flex justify-content-center text-center align-items-center h-100 w-100 m-auto flex-column flex-wrap">
              <p className={homeStyle.MainHeading}>{t("Home Header")}</p>
              <p className={homeStyle.SecondaryHeading}>
                {t("Home Paragraph")}
              </p>
              <Link
                style={{}}
                to="./Buy"
                className={`${homeStyle.SearchLink} `}
              >
                {t("Home Search")}
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: (i18n.language==="ar"? -100:100) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-md-6 shadow p-0 overflow-hidden border rounded-5"
          >
            <img
              src={homeImage}
              style={{ width: "100%", height: "100%" }}
              alt="RandomBuilding"
            />
          </motion.div>
        </div>
      </div>
      <About headFlag={false} />
      {/* <Contactus headFlag={false} /> */}
    </>
  );
};

export default Home;
