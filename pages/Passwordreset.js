import React from 'react';
import AuthLayout from '../layouts/AuthLayout'
import Link from 'next/link'
export default function Passwordreset() {
  return (
    <>
                      <h4 className="text-center text-lighter font-weight-normal mt-5 mb-0">Reset Your Password</h4>
                      <form className="my-5">
                      <hr className="mt-0 mb-4"/>
                    <p>Enter your email address and we will send you a link to reset your password.</p>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your email address"/>
                        <div className="clearfix"></div>
                    </div>
                    <button type="button" className="btn btn-primary btn-block">Send password reset email</button>
                      </form>

    </>
  )
}

Passwordreset.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}