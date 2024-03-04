// import Image from "next/image"
// import VisionImage from '../../assets/images/vision_image.jpg'
// import AvatarCover from '../../assets/images/vision_avatar_cover.png'
// import Avatar from '../../assets/images/vision_avatar.jpg'
import Button from "../../tools/Button"
import { Suspense, useState } from "react"
import React from 'react'
import { ErrorBoundary } from "react-error-boundary"



const Vision = () => {


    const [isExpanded, setIsExpanded] = useState(false)


    const visionTitle = 'Our Vision'
    const visionText = "TNC Global Ltd's Vision is inspiring our employees to accomplish goal.  To grow current position and get a larger market as well as to provide  the simple IT solutions to client. We understand the client’s  requirement, analyse it and provide the best IT solutions. We satisfy  our clients by our services and implements it with more effictive  software solution strategies."


    return (
        <div id="vision" data-aos='flip-left' className="flex lg:flex-row flex-col-reverse lg:bg-[white] bg-[#F4F4F4] lg:w-[70rem] mx-auto lg:pl-10 rounded-[10px] lg:mt-20 mt-20 w-[95%] shadow-lg md:mt-0">
            <div className="flex flex-col">
                <div>
                    {/* <Image alt="vision_avatar_cover" src={AvatarCover} className="relative lg:top-[30px] -top-[30px] lg:-left-[30px] lg:w-[9rem] lg:h-[9rem]" /> */}
                    {/* <Image alt="vision_avatar" src={Avatar} className="relative lg:-top-[50px] -top-[100px] lg:left-[20px] left-[60px] lg:w-[90px] lg:h-[90px] w-[70px] h-[70px] rounded-full z-[90px]" /> */}
                </div>
                <div className="relative -top-[100px] lg:-top-[50px] flex flex-col lg:space-y-10 space-y-5 lg:w-[80%] p-5 lg:p-0">
                    <p className="font-semibold text-[24px]">{visionTitle}</p>
                    <p className="text-[#757575]">
                        {!isExpanded ? visionText?.length > 200 ? visionText?.slice(0, 200) + '...' : visionText : visionText}
                    </p>
                    {
                        !isExpanded &&
                        <ErrorBoundary fallback={<div>Something went wrong</div>}>
                            <Suspense fallback={"Loading"}>
                                <Button onClick={() => setIsExpanded(true)} text={"Read More"}>Read More</Button>
                            </Suspense>
                        </ErrorBoundary>
                    }
                </div>
            </div>
            {/* <Image alt="vision_image" src={VisionImage} className="lg:w-[30rem] h-[50vh] lg:rounded-tl-lg lg:rounded-bl-lg rounded-tr-[10px] lg:rounded-tr-[0px] rounded-tl-[10px] mb-10 lg:my-10" /> */}

        </div>
    )
}

export default Vision