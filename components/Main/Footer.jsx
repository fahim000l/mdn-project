import Image from "next/image"
import FooterLogo from '../../assets/images/footer_logo.png'
import React from 'react'

const Footer = () => {

    return (
        <div className="bg-[#4b4949] text-white lg:p-10 p-5 lg:mt-44 flex lg:flex-row flex-col lg:space-x-20 space-y-10 lg:space-y-0">
            <div>
                <Image alt="footer_logo" src={FooterLogo} className="lg:w-[200px] lg:h-[49px] w-[258px] h-[51px]" />
                <div className="flex flex-col items-start space-y-5" >
                    <div className="flex flex-col space-y-5">
                        <p className="text-justify">Particular Innovative Solution’s goal is simply to improve organizations at providing complex services most efficiently and effectively. We design, scale and provide IT solutions developed by enterprise solution architects, developers, and operations teams worldwide. We believe in “Developing IT Solutions for Life”.</p>
                        <div className="flex items-center space-x-5">

                            {/* <YouTube />
                            <Instagram />
                            <LinkedIn /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-2 lg:gap-0 md:gap-0 gap-10 md:gap-y-10">
                <div id="ABOUT" className="flex flex-col lg:items-start items-center space-y-2" >
                    <p className="font-semibold" >ABOUT</p>
                    <p>What is TNC</p>
                    <p>TNC leadership team</p>
                    <p>CSR Inititive</p>
                    <p>What is TNC</p>
                </div>
                <div id="News_and_social" className="flex flex-col lg:items-start items-center space-y-2" >
                    <p className="font-semibold" >NEWS & SOCIAL</p>
                    <p>News</p>
                    <p>Media Gallery</p>
                </div>
                <div id="Our_business" className="flex flex-col lg:items-start items-center space-y-2" >
                    <p className="font-semibold" >OUR BUSINESS</p>
                    <p>Sectors</p>
                    <p>Partnes</p>
                    <p>Suppliers</p>
                </div>
                <div id="Our_business" className="flex flex-col lg:items-start items-center space-y-2" >
                    <p className="font-semibold" >CONTACT INFO</p>
                    <p className="lg:text-start md:text-center text-center">Address : D8, 2nd floor, UCB bank building, Ghorowar mor, 70 feet Main Road, Eastern Housing, Pallabi, Mirpur sare11, Dhaka-1216</p>
                    <p>Phone : +8809666-777122</p>
                    <p>Email : tncgloballimited@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer