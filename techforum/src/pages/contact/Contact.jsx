import React from 'react'
import bg from '../../assets/homePage.png'
import Header from '../../components/header/Header'
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Input from '../../components/input/input';
import Button from '../../components/button/button';
const Contact = () => {
  return (
    <div className='h-screen w-full overflow-hidden font-poppins relative'>
        <img src={bg} alt="" className='absolute inset-0  bg-cover' />
        <div className='absolute w-full backdrop-blur-md z-20'><Header/></div>
        <div className='absolute inset-0 pl-[50px] gap-[30px] flex flex-col pr-[50px]'>
            <p className="text-white text-[48px] font-medium mt-[90px]">Contact <span className="text-1">Us</span></p>
            <div className=' flex gap-[100px] h-auto w-auto p-[50px] bg-3/40 border-[2px] border-white/20 rounded-[10px]'>

                <div className='flex flex-col gap-[20px] h-auto w-full '>
                    <p className='text-white text-[24px]'>Contact Details</p>
                    <p className='text-white text-[16px]'>Reach out to us — we’re always open to ideas, feedback, and new connections!</p>
                    <div className='flex flex-col gap-1'>
                        <p className='text-white/80 text-[16px]'>Send us an mail</p>
                        <div className='flex gap-3'>
                            <IoMailOutline className='text-white h-[24px] w-auto' />
                            <p className='text-white text-[16px]'>bitsathy@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-white/80 text-[16px]'>Give us a call</p>
                        <div className='flex gap-3'>
                            <IoCallOutline  className='text-white h-[24px] w-auto' />
                            <p className='text-white text-[16px]'>+91 9876543210</p>
                        </div>
                    </div>
                    <div className='h-[2px] w-full bg-white/50'></div>
                    <div className='flex'>
                        <p className='text-white/80 text-[16px]'>follow us on</p>
                        <div className='flex gap-3 ml-auto'>
                            <RiInstagramFill className='text-white h-5 w-auto'/>
                            <FaTwitter className='text-white h-5 w-auto'/>
                            <FaFacebook className='text-white h-5 w-auto'/>
                            <FaLinkedinIn className='text-white h-5 w-auto'/>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col gap-[20px] h-auto w-full '>
                    <div className='flex flex-col gap-1 h-auto w-full '>
                        <p className='text-white text-[14px]'>Name</p>
                        <Input placeholder={"Enter your fullname"} Type={"text"}/>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-1 h-auto w-full '>
                            <p className='text-white text-[14px]'>Phone no</p>
                            <Input placeholder={"Enter your phone number"} Type={"number"}/>
                        </div>
                        <div className='flex flex-col gap-1 h-auto w-full '>
                            <p className='text-white text-[14px]'>Email</p>
                            <Input placeholder={"Enter your email"} Type={"text"}/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-1 h-auto w-full '>
                            <p className='text-white text-[14px]'>Message</p>
                            <Input placeholder={"Write your message here..."} Type={"text"}  isTextarea/>
                        </div>
                        <div className='w-[180px]'><Button name={"Send message"}/></div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Contact
