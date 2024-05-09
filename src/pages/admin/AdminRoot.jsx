import React from 'react'
import Header from '../../layout/Admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/Admin/Footer/Footer'
import { Toaster } from 'react-hot-toast'

function AdminRoot() {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
        <Toaster/>
    </React.Fragment>
  )
}

export default AdminRoot
