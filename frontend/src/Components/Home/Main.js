//importing react library from react in to the js file
import React from 'react'
//outlet is used to render the content of nested routes
import {Outlet} from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"

//Arrow Function
const Main = () => {
  return (
    <div>
        {/*rendering the header, footer and outlet components  */}
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main;