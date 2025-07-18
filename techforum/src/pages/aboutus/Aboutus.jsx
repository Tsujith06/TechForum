import React, { useEffect, useState } from "react";
import bg from "../../assets/homePage.png";
import Header from "../../components/header/Header";
import hand from "../../assets/hand.png"
import SignatureEventCard1 from "../../components/SignatureEventCard/SignatureEventCard";
import SignatureEventCard2 from "../../components/SignatureEventCard2/SignatureEventCard2";
import Gallery from "../../components/gallery/Gallery";
const Aboutus = ({index,handleindex}) => {
  const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const image=[bg,hand];
        var loadedc=0;
        image.forEach((src)=>{

            const img =new Image();
            img.src=src;
            img.onload=()=>{
                loadedc++;
                if(loadedc===image.length){
                  setLoading(false)
                }
            }
    })
    },[])
    
    if(loading){
      return(
        <div className="h-screen w-full flex justify-center items-center bg-black">
       <span className="loader"></span>
      </div>
      )
    }

  return (
    <div className="w-full h-screen overflow-hidden relative font-poppins">
      <img src={bg} alt="" className="absolute inset-0 bg-cover" />
      <div className="absolute w-full z-20 backdrop-blur-md">
          <Header index={index} handleindex={handleindex}/>
      </div>
      <div className="absolute inset-0 overflow-y-auto " style={{scrollbarWidth:"none"}}>
        <div className="flex flex-col gap-[18px] top-[170px] left-[90px] absolute">
            <p className="text-white text-[48px] font-medium">Who <span className="text-1">We</span> Are</p>
            <p className="w-[916px] text-white text-[16px]">BIT Tech Forum is a vibrant student-led initiative at Bannari Amman Institute of Technology, created to encourage innovation, collaboration, and hands-on learning in the field of technology. We bring together passionate students from various departments to explore emerging technologies, exchange ideas, and build impactful solutions beyond the traditional classroom setting. Our community thrives on curiosity, creativity, and the drive to make a difference.</p>
        </div>
        <img src={hand} alt="" className="h-[400px] w-auto absolute top-[420px]" />
        <div className="flex flex-col gap-[18px] top-[400px] right-[90px] absolute w-[820px] items-end">
            <p className="text-white text-[48px] font-medium">What <span className="text-1">We</span> Do</p>
            <p className="w-[820px] text-white text-[16px] flex text-end">We host a range of activities including workshops, hackathons, tech talks, coding competitions, and project showcases. Our focus areas span AI, IoT, Cybersecurity, Web Development, and more  offering students the opportunity to learn real-world skills and apply them in meaningful ways. By working on interdisciplinary projects and engaging with peers and experts, our members grow into confident, industry-ready innovators ready to shape the future.</p>
        </div>

        <div className=" w-full pb-[30px] gap-[50px] top-[860px] absolute flex flex-col justify-center items-center ">
            <p className="text-white text-[48px] font-medium">Signature <span className="text-1">Events</span></p>
            <div className="flex flex-col gap-[20px]">
              <SignatureEventCard1 name={"CODESTORM"} />
              <SignatureEventCard2 name={"TECHSPARK"}/>
              <SignatureEventCard1 name={"INNOVATE-X"}/>
            </div>
            <div className="flex flex-col justify-center items-center gap-[50px]">
              <p className="text-white text-[48px] font-medium"><span className="text-1">BIT</span> Gallery </p>
              <Gallery/>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
