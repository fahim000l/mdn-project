// import Footer from "@/components/Main/Footer"
// import Header from "@/components/Main/Header"
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'
import { Toaster } from "react-hot-toast"
import React from 'react'

const Main = ({ children }) => {


    return (
        <main className="bg-[#F4F4F4]" >
            <Header />
            {children}
            <Footer />
            <Toaster />
        </main>
    )

}


export default Main