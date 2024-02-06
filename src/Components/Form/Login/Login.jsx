import React, { useState } from 'react'
import Link from '../../Link/Link'
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState({});
  let createUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  // create handle submit function
  let handleSubmit = (e) => {
    e.preventDefault();
    
    
  }

  return (
    <React.Fragment>

      {/* <!-- Modal Form --> */}
      <div className="modal fade" id="login" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <!-- Login Form --> */}
            <form onSubmit={(e)=>handleSubmit(e)} action="">
              <div className="modal-header ">
                <h5 className="modal-title"> {t("Login")} </h5>
                <button type="button" className={"btn-close" + (i18n.language == "ar" ? " me-auto ms-0 " : "")} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="Username">{t("Login Username")}<span className="text-danger">*</span></label>
                  <input onChange={e =>  createUser(e) } type="text" name="username" autoComplete={"off"} className="form-control" id="Username" placeholder="Enter Username" />
                </div>

                <div className="mb-3">
                  <label htmlFor="Password">{t("Login Password")}<span className="text-danger">*</span></label>
                  <input onChange={e => createUser(e)} type="password" autoComplete={"off"} name="password" className="form-control" id="Password" placeholder="Enter Password" />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <div>

                    <input onChange={e => setUser({...user,isChecked: e.target.checked})} className="form-check-input mx-2" type="checkbox" value="" id="remember" />
                    <label className="form-check-label" htmlFor="remember">{t("Login Remember Me")}</label>
                  </div>
                  <Link to="#" className="float-end">{t("Login Forgot Password")}</Link>
                </div>
              </div>
              <div className="modal-footer pt-4">
                <button type="submit" className="btn btn-success mx-auto w-100">{t("Login")}</button>
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
