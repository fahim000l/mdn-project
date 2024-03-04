import Image from 'next/image'
import navLogo from '../../assets/images/nav_white_logo.png'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import React from 'react'

const Header = () => {

    const [scrolling, setscrolling] = useState(false)


    const changeNav = () => {


        if (window.scrollY >= 700) {
            setscrolling(true)
        } else {
            setscrolling(false)
        }
    }



    useEffect(() => {

        window.addEventListener('scroll', changeNav)

        return () => {
            window.removeEventListener('scroll', changeNav)
        }
    }, [])


    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <header className={`${scrolling ? 'bg-[#4b4949]' : ''} sticky top-0 w-full flex justify-between items-center h-[56px] lg:px-10 px-2 z-[900]`}>
            <Link onClick={() => setIsMenuOpen(false)} href={'/'} ><Image src={navLogo} alt='nav_logo' className='lg:w-[6rem] lg:h-[7vh] w-[100px] h-[50px]' /></Link>
            <div id="navigation" className={`hidden lg:flex items-center space-x-5 font-semibold text-white`}>
                <a onClick={() => setIsMenuOpen(false)} href='#about_us' className='hover:border-b-2 border-[#FF8600]'>About Us</a>
                <a onClick={() => setIsMenuOpen(false)} href='#vision' className='hover:border-b-2 border-[#FF8600]'>Vision</a>
                <a onClick={() => setIsMenuOpen(false)} href='#mission' className='hover:border-b-2 border-[#FF8600]'>Mission</a>
                <a onClick={() => setIsMenuOpen(false)} href='#projects' className='hover:border-b-2 border-[#FF8600]'>Projects</a>
                {/* <button className='hover:border-b-2 border-[#FF8600]'>Services</button> */}
                <a href='#contact_us' className='hover:border-b-2 border-[#FF8600]'>Contact Us</a>
            </div>
            <div className='flex flex-col items-end'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden inline text-white font-semibold cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                {/* <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden inline text-white font-semibold cursor-pointer' /> */}
                <div className={`bg-white p-5 absolute ${isMenuOpen ? 'top-5' : '-top-[10000000px]'} translate-y-6 ease-in-out duration-150 delay-75 rounded-lg flex flex-col w-[10rem] z-[200]`}>
                    <a onClick={() => setIsMenuOpen(false)} href='#about_us' className='hover:border-b-2 border-[#FF8600]'>About Us</a>
                    <a onClick={() => setIsMenuOpen(false)} href='#vision' className='hover:border-b-2 border-[#FF8600]'>Vision</a>
                    <a onClick={() => setIsMenuOpen(false)} href='#mission' className='hover:border-b-2 border-[#FF8600]'>Mission</a>
                    <a onClick={() => setIsMenuOpen(false)} href='#projects' className='hover:border-b-2 border-[#FF8600]'>Projects</a>
                    {/* <button className='hover:border-b-2 border-[#FF8600]'>Services</button> */}
                    <a href='#contact_us' className='hover:border-b-2 border-[#FF8600]'>Contact Us</a>
                </div>
            </div>
            {
                isMenuOpen && <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='fixed top-0 h-[100vh]  z-50 w-full bg-transparent'></div>
            }
        </header>
    )


}

export default Header