import React from 'react'



const Modal = ({ openModal, setOpenModal, title, text }) => {
    return (
        <div id="modal" className={`${openModal ? 'inline' : 'hidden'} fixed top-[40%] bg-[#F6ECE1] left-[20%] z-[900] p-10 rounded-lg w-[60%] shadow-2xl`}>
            <div className='flex flex-col-reverse items-end'>
                <div className='flex flex-col space-y-5'>
                    <p id="Title" className='font-semibold text-2xl'>{title}</p>
                    <p id="Text">{text}</p>
                </div>
                {/* <Cancel onClick={() => setOpenModal(false)} className='cursor-pointer ' /> */}
            </div>
        </div>
    )
}


export default Modal