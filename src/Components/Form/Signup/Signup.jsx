import React, { useState } from 'react'
import style from './SignupStyle.module.css'
import { useTranslation } from 'react-i18next';
import Link from '../../Link/Link';
import ApiManager from '../../JsClasses/apiManager';
import { useNavigate } from 'react-router-dom';
import validate, { ValidationClass } from '../../JsClasses/validationClass';
import { startANewSession } from '../../JsClasses/CheckUser';
export default function Signup() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const [user, setUser] = useState({
        "FirstName": "",
        "LastName": "",
        "PhoneNumber": "",
        "Email": "",
        "Gender": "M",
        "Address": "",
        "Password": "",
        "ConfirmPassword": ""
    })
    const [errors, setErrors] = useState({});
    // Create user from inputs by using the onChange event and take name and value from the inputs
    let createUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    // create handle submit function
    let handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const response = await ApiManager.registerUser(user);
            if (response.code == 200) {
                successSubmit(response.message);
                localStorage.setItem("tokenSum", response.token);
                startANewSession();
                navigate("/")
            }
            else if (response.code == 400) {
                failSubmit(response.errors[0]);
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
            navigate('/');
        }, 3000);
    }

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Validate username
        if (!ValidationClass.isNotEmpty(user["FirstName"])) {
            newErrors.FirstName = t('Form Name Error');
            isValid = false;
        }
        if (!ValidationClass.isNotEmpty(user["LastName"])) {
            newErrors.LastName = t('Form Name Error');
            isValid = false;
        }
        // Validate email
        if (!ValidationClass.isNotEmpty(user["PhoneNumber"]) && !ValidationClass.isPhoneNumber(user["PhoneNumber"])) {
            newErrors.PhoneNumber = t("Form Phone Error");
            isValid = false;
        }

        if (!ValidationClass.isNotEmpty(user["Address"])) {
            newErrors.Address = t("Form Address Error");
            isValid = false;
        }
        if (!ValidationClass.isNotEmpty(user["Email"]) && !ValidationClass.isEmail(user["Email"])) {
            newErrors.Email = t("Form Email Error");
            isValid = false;
        }

        // Validate password
        if (!ValidationClass.isNotEmpty(user["Password"]) && !ValidationClass.isPassword(user["Password"])) {
            newErrors.Password = t("Form Password Error");
            isValid = false;
        }

        // Validate confirmPassword
        if (user.Password !== user.ConfirmPassword) {
            // alert('confirm password')
            newErrors.ConfirmPassword = t("Form Confirm Password Error");
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
    const handelChange = (e, erorrMessage) => {
        if (validate(e.target)) {
            validateSuccessInput(e);
        }
        else {
            validateFailInput(e);
            setErrors({ ...errors, [e.target.name]: erorrMessage });
        }
    };
    return (
        <React.Fragment>
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                    <div className={"card shadow-2-strong text-primColor  " + style.card_registration} style={{ borderRadius: "15px" }}  >
                        <div className="card-body p-4 p-md-5">
                            <div className='d-flex justify-content-between'>

                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">{t("Register")}</h3>
                                <div className={style.languageSwitch}
                                    onClick={() => {
                                        let flagDirection = i18n.language == 'en';

                                        flagDirection ?
                                            i18n.changeLanguage('ar') :
                                            i18n.changeLanguage('en');
                                        flagDirection ? document.body.style.direction = 'rtl' : document.body.style.direction = 'ltr';

                                    }}
                                >
                                    <i className="fa-solid fa-earth-americas text-secondary mx-1"></i>
                                    {i18n.language == "ar" ?
                                        <span className=' p-1' >
                                            English
                                        </span>
                                        :
                                        <span className='' >
                                            عربي
                                        </span>
                                    }
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className='fs-4'>

                                <div className="row">
                                    <div className="col-md-6 mb-4">

                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="firstName">{t("Register FirstName")}</label>
                                            <input onChange={(e) => handelChange(e, t('Form Name Error'))
                                            } type="text" id="firstName" name='FirstName' className="form-control form-control-lg" />
                                            {errors.FirstName && <p className="text-danger">{errors.FirstName}</p>}
                                        </div>

                                    </div>
                                    <div className="col-md-6 mb-4">

                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="lastName">{t("Register LastName")}</label>
                                            <input onChange={(e) => handelChange(e, t('Form Name Error'))
                                            } type="text" id="lastName" name='LastName' className="form-control form-control-lg" />
                                            {errors.LastName && <p className="text-danger">{errors.LastName}</p>}
                                        </div>

                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-6 mb-4 pb-2">

                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="emailAddress">{t("Register Email")}</label>
                                            <input onChange={(e) => handelChange(e, t('Form Email Error'))
                                            } type="email" id="emailAddress" name='Email' className="form-control form-control-lg" />
                                            {errors.Email && <p className="text-danger">{errors.Email}</p>}
                                        </div>

                                    </div>
                                    <div className="col-md-6 mb-4 pb-2">

                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="phoneNumber">{t("Register PhoneNumber")}</label>
                                            <input onChange={(e) =>
                                                handelChange(e, t('Form Phone Error'))}
                                                type="tel" id="phoneNumber" name='PhoneNumber' className="form-control form-control-lg" />
                                            {errors.PhoneNumber && <p className="text-danger">{errors.PhoneNumber}</p>}

                                        </div>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4 pb-2">

                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="password">{t("Register Password")}</label>
                                            <input onChange={(e) => handelChange(e, t('Form Password Error'))} type="password" id="password" name='Password' autoComplete="new-password" className="form-control form-control-lg PasswordValidation" />
                                        </div>
                                        {errors.Password && <p className="text-danger">{errors.Password}</p>}

                                    </div>
                                    <div className="col-md-6 mb-4 pb-2">

                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="password">{t("Register Confirm Password")}</label>
                                            <input onChange={(e) =>
                                                handelChange(e, t("Form Confirm Password Error"))
                                            } onClick={(e) => {
                                                if (validate(e.target)) {
                                                    validateSuccessInput(e);
                                                }
                                                else {
                                                    validateFailInput(e);
                                                    setErrors({ ...errors, [e.target.name]: t("Form Confirm Password Error") });
                                                }
                                            }} type="password" id="ConfirmPassword" autoComplete="new-password" name='ConfirmPassword' className="form-control form-control-lg " />
                                            {errors.ConfirmPassword && <p className="text-danger">{errors.ConfirmPassword}</p>}
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4 d-flex align-items-center">

                                        <div className="form-outline datepicker w-100">
                                            <label htmlFor="address" className="form-label">{t("Register Address")}</label>
                                            <input onChange={(e) => {
                                                if (validate(e.target)) {
                                                    validateSuccessInput(e);
                                                }
                                                else {
                                                    validateFailInput(e);
                                                    setErrors({ ...errors, [e.target.name]: t("Form Address Error") });

                                                }

                                            }} type="text" name='Address' className="form-control form-control-lg" id="address" />
                                            {errors.Address && <p className="text-danger">{errors.Address}</p>}
                                        </div>

                                    </div>
                                    <div className="col-md-6 m d-flex justify-content-center flex-column ">
                                        <h6 className="mb-2 p ">{t("Register Gender")} </h6>
                                        <div>

                                            <div className="form-check form-check-inline">
                                                <input onChange={() => setUser({ ...user, "Gender": "M" })} className="form-check-input" type="radio" name="Gender" id="femaleGender"
                                                    value="M" checked />
                                                <label className="form-check-label" htmlFor="femaleGender">{t("Register Male")}</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input onChange={() => setUser({ ...user, "Gender": "F" })} className="form-check-input" type="radio" name="Gender" id="maleGender"
                                                    value="F" />
                                                <label className="form-check-label" htmlFor="maleGender">{t("Register Female")}</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="mt-4 pt-2 text-center">
                                    <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                                    <Link className={'nav-link m-auto  mt-2 ' + style.link2Home} aria-current='page' to='/'>
                                        {t("Registar Home")}
                                    </Link>
                                    <div className="alert AlertMessage d-none text-center mt-2 alert-danger  m-auto" role="alert">
                                    </div>

                                    <div className="alert SuccessMessage d-none text-center mt-2 alert-success  m-auto" role="alert">
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
