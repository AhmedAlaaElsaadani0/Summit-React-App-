import React from 'react'
import Link from '../Link/Link'
import { useTranslation } from 'react-i18next';

export default function Login() {
    const {t,i18n} = useTranslation();
    return (
        <React.Fragment>

{/* <!-- Modal Form --> */}
<div className="modal fade" id="login" tabindex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
        {/* <!-- Login Form --> */}
        <form action="">
          <div className="modal-header">
            <h5 className="modal-title"> Login </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
                <label htmlFor="Username">Username<span className="text-danger">*</span></label>
                <input type="text" name="username" autoComplete={"off"} className="form-control" id="Username" placeholder="Enter Username"/>
            </div>

            <div className="mb-3">
                <label htmlFor="Password">Password<span className="text-danger">*</span></label>
                <input type="password" autoComplete={"off"} name="password" className="form-control" id="Password" placeholder="Enter Password"/>
            </div>
            <div className="mb-3">
                <input className="form-check-input"  type="checkbox" value="" id="remember" required/>
                <label className="form-check-label" htmlFor="remember">Remember Me</label>
                <a href="#" className="float-end">Forgot Password</a>
            </div>
          </div>
          <div className="modal-footer pt-4">                  
            <button type="button" className="btn btn-success mx-auto w-100">Login</button>
          </div>
          <p className="text-center">Not yet account, 
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
