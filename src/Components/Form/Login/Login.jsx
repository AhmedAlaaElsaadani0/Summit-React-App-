import React, { useState } from 'react'
import Link from '../../Link/Link'
import { useTranslation } from 'react-i18next';
import validate from '../../JsClasses/validationClass';
import ApiManger from '../../JsClasses/apiManager';
import { startANewSession } from '../../JsClasses/CheckUser';

export default function Login() {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState({
    "EmailOrPhone": "",
    "Password": ""
  });
  const [errors, setErrors] = useState({});
  let createUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  // create handle submit function
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await ApiManger.loginUser(user);
      if (response.token) {
        successSubmit("Login Successfully");
        localStorage.setItem("tokenSum",response.token);
        startANewSession();
      }
      else if (response.code == 401) {
        failSubmit(response.message);
      }
      else {
        failSubmit('Error happened, please try again later');
      }
    }

  }

  const failSubmit = (message) => {
    document.querySelector('.AlertMessage').innerHTML = message;
    document.querySelector('.AlertMessage').classList.remove('d-none');
    document.querySelector('.AlertMessage').classList.add('d-block');
    setTimeout(() => {
      document.querySelector('.AlertMessage').classList.remove('d-block');
      document.querySelector('.AlertMessage').classList.add('d-none');
    }, 3000);
  }
  const successSubmit = (message) => {
    document.querySelector('.SuccessMessage').innerHTML = message;
    document.querySelector('.SuccessMessage').classList.remove('d-none');
    document.querySelector('.SuccessMessage').classList.add('d-block');
    setTimeout(() => {
      document.querySelector('.SuccessMessage').classList.remove('d-block');
      document.querySelector('.SuccessMessage').classList.add('d-none');
    }, 3000);
  }

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!validate({ name: 'EmailOrPhone', value: user.EmailOrPhone })) {
      newErrors.EmailOrPhone = t('Form Username Error');
      isValid = false;
    }
    if (!validate({ name: 'Password', value: user.Password })) {
      newErrors.Password = t('Form Password Login Error');
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  const validateSuccessInput = (e) => {
    e.target.classList.remove('is-invalid');
    e.target.classList.add('is-valid');
    createUser(e);
    setErrors({ ...errors, [e.target.name]: '' });
  }
  const validateFailInput = (e) => {
    e.target.classList.remove('is-valid');
    e.target.classList.add('is-invalid');
  }

  return (
    <React.Fragment>

      {/* <!-- Modal Form --> */}
      <div className="modal fade" id="login" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <!-- Login Form --> */}
            <form onSubmit={(e) => handleSubmit(e)} action="">
              <div className="modal-header ">
                <h5 className="modal-title"> {t("Login")} </h5>
                <button type="button" className={"btn-close" + (i18n.language == "ar" ? " me-auto ms-0 " : "")} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="Username">{t("Login Username")}<span className="text-danger">*</span></label>
                  <input onChange={(e) => {
                    if (validate(e.target)) {
                      validateSuccessInput(e);
                    }
                    else {
                      validateFailInput(e);
                      setErrors({ ...errors, [e.target.name]: t('Form Username Error') });

                    }
                  }} type="text" name="EmailOrPhone" autoComplete={"off"} className="form-control" id="Username" placeholder="Enter Username" />
                  {errors.Username && <p className='text-danger'>{t("Form Username Error")}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="Password">{t("Login Password")}<span className="text-danger">*</span></label>
                  <input onChange={(e) => {
                    if (validate(e.target)) {
                      validateSuccessInput(e);
                    }
                    else {
                      validateFailInput(e);
                      setErrors({ ...errors, [e.target.name]: t('Form Password Login Error') });

                    }
                  }}
                    type="password" autoComplete={"off"} name="Password" className="form-control" id="Password" placeholder="Enter Password" />
                  {errors.Password && <p className='text-danger'>{t("Form Password Login Error")}</p>}
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <div>

                    <input onChange={e => setUser({ ...user, isChecked: e.target.checked })} className="form-check-input mx-2" type="checkbox" value="" id="remember" />
                    <label className="form-check-label" htmlFor="remember">{t("Login Remember Me")}</label>
                  </div>
                  <Link to="#" className="float-end">{t("Login Forgot Password")}</Link>
                </div>
              </div>
              <div className="modal-footer pt-4">
                <button type="submit" className="btn btn-success mx-auto w-100">{t("Login")}</button>

                <div className="alert AlertMessage d-none text-center mt-2 alert-danger  m-auto" role="alert">
                </div>

                <div className="alert SuccessMessage d-none text-center mt-2 alert-success  m-auto" role="alert">
                </div>
              </div>
              <p className="text-center">{t("Login Not yet account")}
                <Link className='sButton p-2 sButtonGreen  ' aria-current='page' to='/SignUp'>
                  {t("Navbar Register")}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
