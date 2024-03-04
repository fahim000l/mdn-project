import Image from 'next/image'
import aboutUsImage from '../../assets/images/about_us_image.jpg'
import Button from '../../tools/Button'
import { Suspense, useEffect, useState } from 'react'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'


const AboutUs = () => {




    const [isEpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        console.log(isEpanded)
    }, [isEpanded])


    const aboutUsTitle = 'About Us'
    const aboutUsText = 'Particular Innovative Solution’s goal is simply to improve organizations  at providing complex services most efficiently and effectively. We  design, scale and provide IT solutions developed by enterprise solution  architects, developers, and operations teams worldwide. We believe in  “Developing IT Solutions for Life”.'

    return (
        <section id='about_us' className='flex lg:flex-row flex-col-reverse justify-center lg:items-center lg:bg-[white] bg-[#F4F4F4] lg:w-[70rem] w-[95%] mx-auto  p-5 lg:p-10 md:p-10 lg:rounded-[10px] rounded-[5px] lg:mt-10 shadow-lg'>
            <div data-aos='fade-right' className='ml-[150px] -mt-[150px] lg:-mt-0 lg:-ml-0 lg:w-[50%] h-[307px] z-[500] flex flex-col items-end lg:items-start'>
                <p className='text-[24px] flex flex-col space-y-[5px] font-semibold mb-5'>{aboutUsTitle}</p>
                <div className='bg-[#F6ECE1] flex flex-col space-y-5 lg:rounded-[10px] rounded-[5px] p-5'>
                    <p className='text-[#595959] lg:text-lg text-xs'>{!isEpanded ? aboutUsText?.length > 200 ? aboutUsText?.slice(0, 200) + '...' : aboutUsText : aboutUsText}</p>
                    {
                        !isEpanded &&
                        <ErrorBoundary fallback={<div>Something went wrong</div>}>
                            <Suspense fallback={"Loading"}>
                                <Button onClick={() => setIsExpanded(true)}>Read More</Button>
                            </Suspense>
                        </ErrorBoundary>
                    }
                </div>
            </div>
            <Image data-aos='fade-left' alt='about_us' src={aboutUsImage} className='lg:-ml-[100px] lg:w-[50%] w-[70%] md:w-[50%] lg:h-[60vh] h-[40vh] lg:rounded-[10px] rounded-[5px]' />

        </section>
    )
}


export default AboutUs