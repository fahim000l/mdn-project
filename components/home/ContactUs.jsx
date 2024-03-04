import Button from '../../tools/Button'
import EmailJs from '@emailjs/browser'
import { Suspense, useState } from 'react'
import toast from 'react-hot-toast'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'



const ContactUs = () => {


    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        const form = e.target

        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const email = form.email.value
        const subject = form.subject.value
        const message = form.message.value

        const formData = {
            to_name: "TNC GLOBAL LTD",
            from_name: `${firstName} ${lastName}`,
            message: message,
            reply_to: email,
            subject
        }

        if (!firstName) {
            setError({ field: "firstName", text: "First Name is required" })
            return
        }

        if (!lastName) {
            setError({ field: 'lastName', text: "Last Name is required" })
            return
        }

        if (!email) {
            setError({ field: "email", text: "Email is required" })
            return
        }

        if (!subject) {
            setError({ field: "subject", text: "Subject is required" })
            return
        }

        if (!message) {
            setError({ field: "message", text: "Message is required" })
            return
        }



        console.log(process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID)

        EmailJs.send(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, formData, { publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY }).then(({ status, text }) => {
            if (status === 200) {

                console.log(formData)
                toast.success(`Your message is delevered`)
                form.reset()
            }
        })

    }






    return (
        <div id='contact_us' className="bg-[white] lg:w-[70rem] mx-auto lg:rounded-[10px] flex lg:flex-row flex-col-reverse mt-10">
            <form onSubmit={handleSubmit} data-aos="fade-left" className="lg:p-10 p-5 flex flex-col space-y-4 w-full">
                <div className="flex items-start space-x-4" >
                    <div className='w-full'>
                        <input name='firstName' type="text" className={`border-2 ${error?.field === 'firstName' ? 'border-red-500' : ''} rounded-[5px] w-full pl-2 py-2`} placeholder="First Name" />
                        {
                            error?.field === 'firstName' && <p className='text-red-500'>{error.text}</p>
                        }
                    </div>
                    <div className='w-full'>
                        <input name='lastName' type="text" className={`border-2 ${error?.field === 'lastName' ? 'border-red-500' : ''} rounded-[5px] w-full pl-2 py-2`} placeholder="Last Name" />
                        {
                            error?.field === 'lastName' && <p className='text-red-500'>{error.text}</p>
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <input name='email' type="text" className={`border-2 ${error?.field === 'email' ? 'border-red-500' : ''} rounded-[5px] w-full pl-2 py-2`} placeholder="Email" />
                    {
                        error?.field === 'email' && <p className='text-red-500'>{error.text}</p>
                    }
                </div>
                <div className='w-full'>
                    <input name='subject' type="text" className={`border-2 ${error?.field === 'subject' ? 'border-red-500' : ''} rounded-[5px] w-full pl-2 py-2`} placeholder="Subject" />
                    {
                        error?.field === 'subject' && <p className='text-red-500'>{error.text}</p>
                    }
                </div>
                <div>
                    <textarea placeholder='Message...' name="message" id="" cols="30" rows="10" className={`border-2 ${error?.field === 'message' ? 'border-red-500' : ''} rounded-[5px] w-full pl-2 py-2`}></textarea>
                    {
                        error?.field === 'message' && <p className='text-red-500'>{error.text}</p>
                    }
                </div>
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <Suspense fallback={"Loading"}>
                        <Button type={'submit'} >Send</Button>
                    </Suspense>
                </ErrorBoundary>
            </form>
            <div data-aos="fade-right" className="bg-[#F6ECE1] lg:w-[50%] lg:p-10 p-5 lg:rounded-tr-[10px] lg:rounded-br-[10px]" >
                <p className="font-semibold text-[24px] mb-10">Contact Us</p>
                <div className='flex flex-col space-y-5'>
                    <div className='flex items-start space-x-2 text-[#776E6E]'>
                        <button id='location_icon' className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </button>
                        <p>
                            <span className='font-bold' >Address :</span>
                            <span> D8, 2nd floor, UCB bank building, Ghorowar mor, 70 feet Main Road, Eastern Housing, Pallabi, Mirpur sare11, Dhaka-1216</span>
                        </p>
                    </div>
                    <div className='flex items-start space-x-2 text-[#776E6E]'>
                        <button id='phone_icon' className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </button>
                        <p>
                            <span className='font-bold' >Phone :</span>
                            <span> 09666-777122</span>
                        </p>
                    </div>
                    <div className='flex items-start space-x-2 text-[#776E6E]'>
                        <button id='email_icon' className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                        </button>
                        <p>
                            <span className='font-bold' >Email :</span>
                            <span> tncgloballimited@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs