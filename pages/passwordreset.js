import React from 'react';
import AuthLayout from '../layouts/AuthLayout'
import Link from 'next/link'
export default function passwordreset() {
  return (
    <>
                      <h4 class="text-center text-lighter font-weight-normal mt-5 mb-0">Reset Your Password</h4>
                      <form class="my-5">
                      <hr class="mt-0 mb-4"/>
                    <p>Enter your email address and we will send you a link to reset your password.</p>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter your email address"/>
                        <div class="clearfix"></div>
                    </div>
                    <button type="button" class="btn btn-primary btn-block">Send password reset email</button>
                      </form>

    </>
  )
}

passwordreset.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}