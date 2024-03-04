// import Image from "next/image"
// import MissionImage from '../../assets/images/mission_image.jpg'
// import AvatarCover from '../../assets/images/mission_avatar_cover.png'
// import Avatar from '../../assets/images/mission_avatar.jpg'
import Button from "../../tools/Button"
import { Suspense, useState } from "react"
import React from 'react'
import { ErrorBoundary } from "react-error-boundary"

const Mission = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const missionTitle = "Our Mission"
    const missionText = "Our commitment is to assist our clients to achieve a more competitive  and profitable situation, applying the principles of organization,  engineering, methodology and human resources. We develop and apply  technologically innovating solutions to satisfy the customer's needs and  goals."



    return (
        <div id="mission" data-aos="flip-right" className="flex lg:flex-row flex-col-reverse lg:bg-[white] bg-[#F4F4F4] lg:w-[70rem] mx-auto lg:pl-10 rounded-[10px] mt-20 w-[95%] shadow-lg">
            <div className="flex flex-col">
                <div>
                    {/* <Image alt="vision_avatar_cover" src={AvatarCover} className="relative lg:top-[30px] -top-[30px] lg:-left-[30px] lg:w-[9rem] lg:h-[9rem]" /> */}
                    {/* <Image alt="vision_avatar" src={Avatar} className="relative lg:-top-[50px] -top-[100px] lg:left-[20px] left-[60px] lg:w-[90px] lg:h-[90px] w-[70px] h-[70px] rounded-full z-[90px]" /> */}
                </div>
                <div className="relative -top-[100px] lg:-top-[50px] flex flex-col lg:space-y-10 space-y-5 lg:w-[80%] p-5 lg:p-0">
                    <p className="font-semibold text-[24px]">{missionTitle}</p>
                    <p className="text-[#757575]">
                        {!isExpanded ? missionText?.length > 200 ? missionText?.slice(0, 200) + '...' : missionText : missionText}
                    </p>
                    {
                        !isExpanded &&
                        <ErrorBoundary fallback={<div>Something went wrong</div>}>
                            <Suspense fallback={"Loading"} >
                                <Button onClick={() => setIsExpanded(true)} text={"Read More"}>Read More</Button>
                            </Suspense>
                        </ErrorBoundary>
                    }
                </div>
            </div>
            {/* <Image alt="vision_image" src={MissionImage} className="lg:w-[30rem] h-[50vh] lg:rounded-tl-lg lg:rounded-bl-lg rounded-tr-[10px] lg:rounded-tr-[0px] rounded-tl-[10px] mb-10 lg:my-10" /> */}

        </div>
    )
}

export default Mission