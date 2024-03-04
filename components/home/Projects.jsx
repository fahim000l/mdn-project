// import Image from 'next/image'
// import Project1Image from '../../assets/images/project_1_image.jpg'
// import Project2Image from '../../assets/images/project_2_image.jpg'
import Button from '../../tools/Button'
import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'



const Projects = () => {
    return (
        <div id='projects' className="lg:bg-[white] bg-[#F4F4F4] lg:w-[70rem] w-[95%] mx-auto lg:p-10 rounded-[10px] mt-20 flex flex-col  my-auto">
            <p className="font-semibold text-[24px] text-center mb-10">Our Projects</p>
            <div className='flex lg:flex-col md:flex-row flex-col lg:space-y-10 md:space-x-5 lg:space-x-0 space-y-5 md:space-y-0'>
                <div data-aos='zoom-in' className='flex lg:flex-row flex-col  items-center bg-[#FAFAFA] lg:w-[1047px] w-full p-5 rounded-[5px] lg:rounded-[10px] shadow-lg'>
                    <div className='flex place-items-center lg:w-[50%] w-full' >
                        {/* <Image alt='order_place' src={Project1Image} className='rounded-[5px] h-[50vh] w-full' /> */}
                    </div>
                    <div className='flex flex-col lg:w-[50%] w-full lg:space-y-10 lg:p-10 md:p-5 p-2 space-y-5'>
                        <p>ORDERPLACE.COM</p>
                        <p className='text-[#757575]'>Worldwide digital industrial platform</p>
                        <ErrorBoundary fallback={<div>Something went wrong</div>}>
                            <Suspense fallback={"Loading"} >
                                <Button>Read More</Button>
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                </div>
                <div data-aos='zoom-in' className='flex lg:flex-row flex-col justify-between items-center bg-[#FAFAFA] lg:w-[1047px] w-full p-5 rounded-[5px] lg:rounded-[10px] shadow-lg'>
                    <div className='flex place-items-center lg:w-[50%] w-full' >
                        {/* <Image alt='order_place' src={Project2Image} className='rounded-[5px] h-[50vh] w-full' /> */}
                    </div>
                    <div className='flex flex-col lg:w-[50%] w-full lg:space-y-10 lg:p-10 md:p-5 p-2 space-y-5'>
                        <p>BANBOX.COM</p>
                        <p className='text-[#757575]'>E-Commerce platform</p>
                        <p className='text-[#757575]'>BANBOX.COM is an E-commerce platform. They offer fashionable products & quickest home delivery system. (edited) </p>
                        <ErrorBoundary fallback={<div>Something went wrong</div>}>
                            <Suspense fallback={"Loading"} >
                                <Button>Read More</Button>
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects