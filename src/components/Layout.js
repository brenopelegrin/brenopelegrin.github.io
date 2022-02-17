import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" type="text/css"></link>
        <Navbar />
        <div className="content">
            { children }
        </div>
        <Footer />
    </div>
  )
}
