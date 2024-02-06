import React, { useState } from 'react'
import style from './SignupStyle.module.css'
import { useTranslation } from 'react-i18next';
import Link from '../../Link/Link';

export default function Signup() {
    const { t, i18n } = useTranslation();
    const [user, setUser] = useState({
        "FirstName": "",
        "LastName": "",
        "PhoneNumber": "",
        "Email": "",
        "Gender": "M",
        "Address": "",
        "Password": ""
    })
    // Create user from inputs by using the onChange event and take name and value from the inputs
    let createUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    // create handle submit function
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }
    return (
        <React.Fragment>
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-12 col-lg-9 col-xl-7">
                    <div class={"card shadow-2-strong text-primColor  " + style.card_registration} style={{ borderRadius: "15px" }}  >
                        <div class="card-body p-4 p-md-5">
                            <div className='d-flex justify-content-between'>

                                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">{t("Register")}</h3>
                                <div className={style.languageSwitch}
                                    onClick={() => {
                                        let flagDirection = i18n.language == 'en';

                                        flagDirection ?
                                            i18n.changeLanguage('ar') :
                                            i18n.changeLanguage('en');
                                        flagDirection ? document.body.style.direction = 'rtl' : document.body.style.direction = 'ltr';

                                    }}
                                >
                                    <i class="fa-solid fa-earth-americas text-secondary mx-1"></i>
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

                                <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="firstName">{t("Register FirstName")}</label>
                                            <input onChange={(e) => createUser(e)} type="text" id="firstName" name='FirstName' class="form-control form-control-lg" />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <label class="form-label" for="lastName">{t("Register LastName")}</label>
                                            <input onChange={(e) => createUser(e)} type="text" id="lastName" name='LastName' class="form-control form-control-lg" />
                                        </div>

                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-md-6 mb-4 pb-2">

                                        <div class="form-outline">
                                            <label class="form-label" for="emailAddress">{t("Register Email")}</label>
                                            <input onChange={(e) => createUser(e)} type="email" id="emailAddress" name='Email' class="form-control form-control-lg" />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4 pb-2">

                                        <div class="form-outline">
                                            <label class="form-label" for="phoneNumber">{t("Register PhoneNumber")}</label>
                                            <input onChange={(e) => createUser(e)} type="tel" id="phoneNumber" name='PhoneNumber' class="form-control form-control-lg" />
                                        </div>

                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 mb-4 pb-2">

                                        <div class="form-outline">
                                            <label class="form-label" for="password">{t("Register Password")}</label>
                                            <input onChange={(e) => createUser(e)} type="password" id="password" name='Password' class="form-control form-control-lg" />
                                        </div>

                                    </div>
                                    <div class="col-md-6 mb-4 pb-2">

                                        <div class="form-outline">
                                            <label class="form-label" for="password">{t("Register Confirm Password")}</label>
                                            <input onChange={(e) => createUser(e)} type="password" id="password" name='ConfirmPassword' class="form-control form-control-lg" />
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4 d-flex align-items-center">

                                        <div class="form-outline datepicker w-100">
                                            <label for="address" class="form-label">{t("Register Address")}</label>
                                            <input onChange={(e) => createUser(e)} type="text" name='Address' class="form-control form-control-lg" id="address" />
                                        </div>

                                    </div>
                                    <div class="col-md-6 m d-flex justify-content-center flex-column ">
                                        <h6 class="mb-2 p ">{t("Register Gender")} </h6>
                                        <div>

                                            <div class="form-check form-check-inline">
                                                <input onChange={() => setUser({ ...user, "Gender": "M" })} class="form-check-input" type="radio" name="Gender" id="femaleGender"
                                                    value="M" checked />
                                                <label class="form-check-label" for="femaleGender">{t("Register Male")}</label>
                                            </div>

                                            <div class="form-check form-check-inline">
                                                <input onChange={() => setUser({ ...user, "Gender": "F" })} class="form-check-input" type="radio" name="Gender" id="maleGender"
                                                    value="F" />
                                                <label class="form-check-label" for="maleGender">{t("Register Female")}</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div class="mt-4 pt-2 text-center">
                                    <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                                    <Link className={'nav-link m-auto  mt-2 ' + style.link2Home} aria-current='page' to='/'>
                                        {t("Registar Home")}
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
