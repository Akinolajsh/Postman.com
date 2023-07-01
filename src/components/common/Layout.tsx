import React from 'react'
import Header from '../static/Header'
import Footer from '../static/Footer'
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <Header/>
      {/* <LandingPage/> */}
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
