import React from 'react';
import AuthLayout from '../layouts/AuthLayout'
import Link from 'next/link'
export default function signin() {
  return (
    <>
                      <h4 class="text-center text-lighter font-weight-normal mt-5 mb-0">Login to Your Account</h4>
                      <form class="my-5">
                          <div class="form-group">
                              <label class="form-label">Email</label>
                              <input type="text" class="form-control"/>
                              <div class="clearfix"></div>
                          </div>
                          <div class="form-group">
                              <label class="form-label d-flex justify-content-between align-items-end">
                                      <span>Password</span>
                                      <Link href="/passwordreset">
                                          <a class="d-block small">Forgot password?</a>
                                      </Link>
                                  </label>
                              <input type="password" class="form-control"/>
                              <div class="clearfix"></div>
                          </div>
                          <div class="d-flex justify-content-between align-items-center m-0">
                              <label class="custom-control custom-checkbox m-0">
                                      <input type="checkbox" class="custom-control-input"/>
                                      <span class="custom-control-label">Remember me</span>
                                  </label>
                              <button type="button" class="btn btn-primary">Sign In</button>
                          </div>
                      </form>
                      <div class="text-center text-muted">
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