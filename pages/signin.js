import React from 'react';
import AuthLayout from '../layouts/AuthLayout'
import Link from 'next/link'
export default function signin() {
  return (
    <>
                      <h4 className="text-center text-lighter font-weight-normal mt-5 mb-0">Login to Your Account</h4>
                      <form className="my-5">
                          <div className="form-group">
                              <label className="form-label">Email</label>
                              <input type="text" className="form-control"/>
                              <div className="clearfix"></div>
                          </div>
                          <div className="form-group">
                              <label className="form-label d-flex justify-content-between align-items-end">
                                      <span>Password</span>
                                      <Link href="/passwordreset">
                                          <a className="d-block small">Forgot password?</a>
                                      </Link>
                                  </label>
                              <input type="password" className="form-control"/>
                              <div className="clearfix"></div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center m-0">
                              <label className="custom-control custom-checkbox m-0">
                                      <input type="checkbox" className="custom-control-input"/>
                                      <span className="custom-control-label">Remember me</span>
                                  </label>
                              <button type="button" className="btn btn-primary">Sign In</button>
                          </div>
                      </form>
                      <div className="text-center text-muted">
                          Don't have an account yet?
                          <Link href="/signup">
                            <a> Sign Up</a>
                          </Link>
                      </div>

    </>
  )
}

signin.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}