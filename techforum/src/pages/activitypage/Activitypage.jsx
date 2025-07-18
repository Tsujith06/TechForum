import React from 'react'
import bg from '../../assets/homePage.png'
import Header from '../../components/header/Header'
import SignatureEventCard1 from '../../components/SignatureEventCard/SignatureEventCard'
import SignatureEventCard2 from '../../components/SignatureEventCard2/SignatureEventCard2'
import WorkshopBootcampCard from '../../components/workshop&bootcampCard/Workshop&BootcampCard'
import Code_icon from '../../components/code-icon/Code-icon'
import Ai_icon from '../../components/ai_icon/Ai_icon'
import Figma_icon from '../../components/figma_icon/Figma_icon'
import Cloud_icon from '../../components/cloud_icon/Cloud_icon'
import GuestLucture from '../../components/guestLucture/GuestLucture'
const Activitypage = () => {
    
  return (
    <div className='h-screen w-full relative overflow-hidden font-poppins '>
        <img src={bg} alt="" className='absolute inset-0 bg-cover ' />
        <div className='absolute z-10 w-full h-[80px] backdrop-blur-md '>
            <Header/>
        </div>
      <div className='inset-0 absolute overflow-y-auto' style={{scrollbarWidth:"none"}} >
        <div className='flex flex-col gap-[50px] justify-center items-center mt-[90px] '>
            <div className=' flex flex-col justify-center items-center gap-[50px]'>
                <div className='flex flex-col gap-[20px] justify-center items-center'>
                    <p className="text-white text-[48px] font-medium">Signature <span className="text-1">Events</span></p>
                    <div className='flex flex-col gap-[20px] items-center justify-center'>
                        <SignatureEventCard1 name={"CODESTORM"}/>
                        <SignatureEventCard2 name={"TECHSPARK"}/>
                        <SignatureEventCard1 name={"INNOVATE-X"}/>
                    </div>
                </div>
                <div className=' h-[2px] w-full bg-white/30 '></div>

                <div className='flex flex-col gap-[20px] items-center'>
                    <p className="text-white text-[48px] font-medium">Workshops <span className="text-1">&</span> Bootcamps</p>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-5'>
                            <WorkshopBootcampCard icon={<Code_icon/>} name={'Web development Bootcamp'} des={'Dive into web development by learning HTML, CSS, and JavaScript to build responsive websites. Understand frontend and backend concepts, explore frameworks like React, and create your own portfolio site from scratch.'}/>
                            <WorkshopBootcampCard icon={<Ai_icon/>} name={'AI with Python Workshop'} des={'Get started with machine learning using Python as you explore NumPy, pandas, and Scikit-learn. Build simple AI models, analyze datasets, and complete a mini project to understand how machines learn from data.'}/>
                        </div>
                        <div className='flex gap-5'>
                            <WorkshopBootcampCard icon={<Figma_icon/>} name={'Figma UI/UX Design Hands-on'} des={'Learn how to design beautiful and user-friendly interfaces using Figma. Understand the principles of UI/UX, practice wireframing and prototyping, and create real mobile and web app designs with a professional finish.'}/>
                            <WorkshopBootcampCard icon={<Cloud_icon/>} name={'Cloud Computing with AWS'} des={'Understand how cloud platforms work by exploring core AWS services like EC2, S3, and Lambda. Learn to deploy applications on the cloud, manage storage and compute resources, and build scalable infrastructure solutions.'}/>
                        </div>
                    </div>
                </div>

                <div className=' h-[2px] w-full bg-white/30 '></div>

                <div className='flex flex-col gap-[20px] items-center mb-6'>
                    <p className="text-white text-[48px] font-medium">Tech Talks <span className="text-1">&</span> Guest Lectures</p>
                    <div className='flex flex-col gap-5'>
                        <GuestLucture/>
                        <GuestLucture/>
                        <GuestLucture/>
                    </div>
                </div>

            </div>  
        </div>
      </div>
    </div>
  )
}

export default Activitypage
