import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styleContactUs from "./Contactus.module.css";
import { useTranslation } from "react-i18next";
import { contactUs } from "../JsClasses/apiManager";
import i18next from "i18next";

const ContactUs = (props) => {
  const { t } = useTranslation();

  const [erros, setErros] = useState({});
  const [responseFlag, setResponseFlag] = useState(false);
  const [resMessage, setResMessage] = useState({ flag: false, message: "" });
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const handleChange = (e) => {
    if (validateForInput(e.target.name, e.target.value)) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
      //delete error
      setErros({ ...erros, [e.target.name]: "" });
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      e.target.classList.remove("is-valid");
      e.target.classList.add("is-invalid");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    setErros(errors);
    if (Object.keys(errors).length === 0) {
      let res = await contactUs(formData);
      setResponseFlag(true);
      if (res.code && res.code == 200) {
        setResMessage({ flag: true, message: res.message });
      } else
        setResMessage({
          flag: false,
          message: "Something went wrong, please try again later",
        });

      setTimeout(() => {
        setResponseFlag(false);
      }, 10000);
    }
  };
  // validation Regax
  const validate = () => {
    let errors = {};
    if (!formData.Name || !formData.Name.match(/^[a-zA-Z\u0600-\u06FF\s]+$/)) {
      errors.Name = "Full Name must haven't any number or special character";
    }

    if (
      !formData.Email ||
      !formData.Email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      errors.Email = "Email is required and must be a valid Email address";
    }
    if (
      !formData.Message ||
      !formData.Message.match(/^[a-zA-Z0-9\u0600-\u06FF\s,.'-]{3,}$/)
    ) {
      errors.Message = "Message is required and must be a valid Message";
    }
    return errors;
  };
  const validateForInput = (name, value) => {
    let isValid = false;
    let errorMessage = "";

    switch (name) {
      case "Name":
        isValid = !!value && value.match(/^[a-zA-Z\u0600-\u06FF\s]+$/);
        errorMessage = isValid
          ? ""
          : "Full Name must haven't any number or special character";
        break;
      case "Email":
        isValid = !!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errorMessage = isValid
          ? ""
          : "Email is required and must be a valid Email address";
        break;
      case "Message":
        isValid = !!value.match(/^[a-zA-Z0-9\u0600-\u06FF\s,.'-]{3,}$/);
        errorMessage = isValid
          ? ""
          : "Message is required and must be a valid Message";
        break;
      default:
        break;
    }

    setErros({ ...erros, [name]: errorMessage });
    return isValid;
  };

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
      <div
        className="d-flex justify-content-center align-items-center mt-5 "
        id="Contact"
      >
        <div
          className={`${styleContactUs.widthEle} container p-3 pt-5 justify-content-center d-flex bg-primColor mob-style rounded-5 align-items-center flex-column `}
        >
          <h2
            className={` mb-5 headingForSeactions text-center  ${styleContactUs.headingContact}`}
          >
            {t("Contact Paragraph")}
          </h2>
          
          <form onSubmit={(e) => handleSubmit(e)} className="w-50 shadow rounded-5">
            <div className="row gy-2 gy-xl-4 p-3 ">
              <div className="col-12">
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  className="form-control"
                  id="Name"
                  name="Name"
                  placeholder={t("Enter your name")}
                  required
                />
                {erros.Name && <div className="text-danger">{erros.Name}</div>}
              </div>
              <div className="col-12 ">
                <div className="input-group" >
                  
                  <input
                    onChange={(e) => handleChange(e)}
                    type="Email"
                    className="form-control"
                    id="Email"
                    name="Email"
                    placeholder={t("Enter your email")}
                    required
                  />
                </div>
                {erros.Email && (
                  <div className="text-danger">{erros.Email}</div>
                )}
              </div>
              <div className="col-12">
                <textarea
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="form-control"
                  id="Message"
                  name="Message"
                  placeholder={t("Enter your message")}
                  rows="3"
                  required
                ></textarea>
                {erros.Message && (
                  <div className="text-danger">{erros.Message}</div>
                )}
              </div>
              <div className="col-12  text-center">
                  <button
                    className="sButton sButtonWhite "
                    type="submit"
                  >
                    {responseFlag ? "Loading..." : t("Send")}
                  </button>
                  {!responseFlag ? (
                    ""
                  ) : resMessage.flag ? (
                    <div className="text-success">{resMessage.message}</div>
                  ) : (
                    <div className="text-danger">{resMessage.message}</div>
                  )}
                </div>
            </div>
          </form>
          <div
            className={`d-flex justify-content-between socialMedia my-5 ${styleContactUs.socialMedia}`}
          >
            <div
              className={`rounded-circle d-flex justify-content-center align-items-center ${styleContactUs.socialMediaMember}`}
              style={{
                width: "50px",
                height: "50px",
              }}
            >
              <a
                target="_blank"
                href="https://www.facebook.com/Summit.develpmentegy?sfnsn=scwspmo&mibextid=RUbZ1f"
                className="text-decoration-none  "
              >
                <i
                  style={{ fontSize: "2rem" }}
                  className="fa-brands  text-primColor fa-facebook"
                ></i>
              </a>
            </div>

            <div
              className={`rounded-circle d-flex justify-content-center align-items-center ${styleContactUs.socialMediaMember}`}
              style={{
                width: "50px",
                height: "50px",
              }}
            >
              <a
                target="_blank"
                href="https://www.instagram.com/invites/contact/?i=jfc5f4kwlaj8&utm_content=ttcxci2"
                className="text-decoration-none  "
              >
                <i
                  style={{ fontSize: "2rem" }}
                  className="fa-brands text-primColor fa-instagram"
                ></i>
              </a>
            </div>

            <div
              className={`rounded-circle d-flex justify-content-center align-items-center ${styleContactUs.socialMediaMember}`}
              style={{
                width: "50px",
                height: "50px",
              }}
            >
              <a
                target="_blank"
                href="https://wa.me/message/T4HZAXRBWHYTP1?src=qr"
                className="text-decoration-none  "
              >
                <i
                  style={{ fontSize: "2rem" }}
                  className="fa-brands text-primColor fa-whatsapp"
                ></i>
              </a>
            </div>
          </div>
          <p dir="ltr" className="text-bg-white fs-3  text-white m-0">
            +2010 241 288 86
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
