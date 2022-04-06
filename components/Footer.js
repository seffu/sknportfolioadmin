import React from 'react'

export default function Footer() {
  return (
    <nav className="layout-footer footer footer-light">
        <div className="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
            <div className="pt-3">
                <span className="float-md-right d-none d-lg-block">&copy; SKN</span>
            </div>
            {/* <div>
                <a href="javascript:" className="footer-link pt-3">About Us</a>
                <a href="javascript:" className="footer-link pt-3 ml-4">Help</a>
                <a href="javascript:" className="footer-link pt-3 ml-4">Contact</a>
                <a href="javascript:" className="footer-link pt-3 ml-4">Terms &amp; Conditions</a>
            </div> */}
        </div>
    </nav>
  )
}
