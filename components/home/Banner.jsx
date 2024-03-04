import Image from 'next/image'
import BannerImage from '../../assets/images/banner_image.jpg'
import React from 'react'

const Banner = () => {


    return (
        <section>

            <div id="banner" className={`w-full h-[621px] lg:mb-40 mb-20`}>
                <Image alt='banner_image' src={BannerImage} className='w-full h-[85vh] absolute top-0' />
                <div style={{ background: 'radial-gradient(circle closest-side at 35% 25%, rgba(205, 205, 205, 0), rgba(0, 0, 0, 0.5))' }} className='absolute top-0 h-[85vh]  text-center  w-full flex flex-col items-center justify-center text-white bg-transparent'>
                    <p className='text-5xl'>TNC GLOBAL LTD</p>
                    <p>Worldwide business developement company.</p>
                </div>
            </div>
        </section>
    )
}

export default Banner