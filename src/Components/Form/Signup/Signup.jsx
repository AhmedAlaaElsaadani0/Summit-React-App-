import React, { useState } from 'react'
import style from './SignupStyle.module.css'
import { useTranslation } from 'react-i18next';
import Link from '../../Link/Link';
import ApiManager from '../../JsClasses/apiManager';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const { t, i18n } = useTranslation();
    const navigate=useNavigate()
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
    let handleSubmit = async (e) => {
        e.preventDefault();
        /**
         * {
    "code": 200,
    "message": "Account Registered Successfully!",
    "token": "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJhYmR1bWV6eC5hciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFiZHVtZXp4LmFyQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDExMzUyMTQ3ODkiLCJleHAiOjE3MDc0MDg3NjUsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0Ojc3NzciLCJhdWQiOiJNeVNlY3VyZWRBcGlVc2VycyJ9.8sE-GABA0m5tYGf7RmVi0RNAHg7CmqE0nEm3qKY855Q"
}
{
    "errors": [
        "Email is regestered already!"
    ],
    "code": 400,
    "message": "you have made a bad request!"
}
         */
        const response = await ApiManager.registerUser(user);
        if (response.code == 200) {
            document.querySelector('.SuccessMessage').innerHTML = response.message;
            document.querySelector('.SuccessMessage').classList.remove('d-none');
            document.querySelector('.SuccessMessage').classList.add('d-block');
            setTimeout(() => {
                document.querySelector('.SuccessMessage').classList.remove('d-block');
                document.querySelector('.SuccessMessage').classList.add('d-none');
                navigate('/');
            }, 3000);
        }
        else if (response.code == 400) {
            document.querySelector('.AlertMessage').innerHTML = response.errors;
            document.querySelector('.AlertMessage').classList.remove('d-none');
            document.querySelector('.AlertMessage').classList.add('d-block');
            setTimeout(() => {
                document.querySelector('.AlertMessage').classList.remove('d-block');
                document.querySelector('.AlertMessage').classList.add('d-none');
            }, 3000);
        }
        else{
            document.querySelector('.AlertMessage').innerHTML = "Something went wrong!";
            document.querySelector('.AlertMessage').classList.remove('d-none');
            document.querySelector('.AlertMessage').classList.add('d-block');
            setTimeout(() => {
                document.querySelector('.AlertMessage').classList.remove('d-block');
                document.querySelector('.AlertMessage').classList.add('d-none');
            }, 3000);
        }

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
