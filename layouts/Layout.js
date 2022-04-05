import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

export default function Layout({ children }) {
  return (
    <>
      <div className="layout-wrapper layout-2">
        <div className="layout-inner">
          <SideBar/>
          <div className="layout-container">
              <Header/>
              <div className="layout-content">
                <main>
                      { children}
                </main>
                <Footer/>
              </div>
          </div>
        </div>
        <div className="layout-overlay layout-sidenav-toggle"></div>
      </div>
    </>
  )
}
