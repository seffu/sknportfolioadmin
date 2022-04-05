import React from 'react';
import AuthLayout from '../layouts/AuthLayout'
import Link from 'next/link'
export default function lockscreen() {
  return (
    <>
                    <h4 class="text-center text-lighter font-weight-normal mt-5 mb-0">Lock Screen</h4>

                    <hr class="my-4"/>

                    <div class="media align-items-center justify-content-center">
                        <img src="assets/img/avatars/1.png" alt="" class="d-block ui-w-60 rounded-circle"/>
                        <div class="media-body ml-3">
                            <div class="text-light small font-weight-semibold line-height-1 mb-1">LOGGED IN AS</div>
                            <div class="text-large font-weight-bolder line-height-1">Lary Doe</div>
                        </div>
                    </div>


                    <hr class="my-4"/>

                    <form>
                      <p>Your session is timed out. Please enter your password to proceed.</p>
                        <div class="input-group">
                            <input type="password" class="form-control" placeholder="Enter your password"/>
                            <div class="input-group-append">
                                <button type="button" class="btn btn-primary icon-btn"><i class="ion ion-md-arrow-forward"></i></button>
                            </div>
                        </div>
                    </form>

                    <div class="card-footer text-center text-muted small px-sm-5">
                        Not you?
                        <Link href="/signin">
                            <a>Login as a different user</a>
                        </Link>
                    </div>

    </>
  )
}

lockscreen.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}