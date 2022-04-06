import React from 'react';
import AuthLayout from '../layouts/AuthLayout'
import Link from 'next/link'
export default function Lockscreen() {
  return (
    <>
                    <h4 className="text-center text-lighter font-weight-normal mt-5 mb-0">Lock Screen</h4>

                    <hr className="my-4"/>

                    <div className="media align-items-center justify-content-center">
                        <img src="assets/img/avatars/1.png" alt="" className="d-block ui-w-60 rounded-circle"/>
                        <div className="media-body ml-3">
                            <div className="text-light small font-weight-semibold line-height-1 mb-1">LOGGED IN AS</div>
                            <div className="text-large font-weight-bolder line-height-1">Lary Doe</div>
                        </div>
                    </div>


                    <hr className="my-4"/>

                    <form>
                      <p>Your session is timed out. Please enter your password to proceed.</p>
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder="Enter your password"/>
                            <div className="input-group-append">
                                <button type="button" className="btn btn-primary icon-btn"><i className="ion ion-md-arrow-forward"></i></button>
                            </div>
                        </div>
                    </form>

                    <div className="card-footer text-center text-muted small px-sm-5">
                        Not you?
                        <Link href="/signin">
                            <a>Login as a different user</a>
                        </Link>
                    </div>

    </>
  )
}

Lockscreen.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}