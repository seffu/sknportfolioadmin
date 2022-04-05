import React from 'react'

export default function AuthLayout({ children}) {
  return (
        <>
      <div className="authentication-wrapper authentication-3">
      <div className="authentication-inner">
          <div className="d-none d-lg-flex col-lg-8 align-items-center ui-bg-cover ui-bg-overlay-container p-5" style={{ backgroundImage: 'url(/assets/img/bg/21.jpg)' }}>
              <div className="ui-bg-overlay bg-dark opacity-50"></div>
              <div className="w-100 text-white px-5">
                  <h1 className="display-2 font-weight-bolder mb-4">WELCOME<br/>TO THE SKN's CORNER</h1>
                  <div className="text-large font-weight-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula ex eu gravida faucibus. Suspendisse viverra pharetra purus. Proin fringilla ac lorem at sagittis. Proin tincidunt dui et nunc ultricies dignissim.
                  </div>
              </div>
          </div>

          <div className="d-flex col-lg-4 align-items-center bg-white p-5">
              <div className="d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto">
                  <div className="w-100">
                      <div className="d-flex justify-content-center align-items-center">
                          <div className="ui-w-60">
                              <div className="w-100 position-relative">
                                  <img src="assets/img/logo-dark.jpg" alt="Brand Logo" className="img-fluid"/>
                                  <div className="clearfix"></div>
                              </div>
                          </div>
                      </div>
                        <main>
                              { children}
                        </main>
                  </div>
              </div>
          </div>
      </div>
  </div>
        </>
  )
}
