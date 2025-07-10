import React, { useEffect, useState } from "react";
import homebg from "../../assets/homePage.png";
import Header from "../../components/header/Header";
import object from "../../assets/object.png";
import arimg from "../../assets/AR image.png";
import Logo from "../../components/logo/logo";
import Button from "../../components/button/button";
import { useNavigate } from "react-router";

const HomePage = ({index,handleHome}) => {
  const [loading, setLoading] = useState(true);
  const router=useNavigate()
  useEffect(() => {
    const images = [homebg, object, arimg];
    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-black">
       <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="font-poppins h-screen w-full overflow-hidden relative">
      {/* Background image */}
      <img
        src={homebg}
        alt="bgimg"
        className="h-screen w-full absolute inset-0 object-cover"
      />

      {/* Header */}
      <div className="absolute inset-0 z-10">
        <Header index={index} handleindex={handleHome}/>
      </div>

      {/* Object and AR Image */}
      <div className="absolute inset-0 flex justify-center">
        <div className="flex flex-col z-10 gap-5 top-[550px] left-[980px] inset-0 absolute">
          <p className="text-white/60 w-[427px] z-10 text-[14px]">BIT Tech Forum is a student-driven initiative at Bannari Amman Institute of Technology.We aim to inspire innovation, build real-world tech skills, and foster collaboration among curious minds.</p>
          <div className="w-[132px]"><Button name={'Aboutus'} onClick={()=> router('/aboutus')}/></div>
        </div>
        <img
          src={object}
          alt="object"
          className="h-screen w-full absolute inset-0 object-cover"
        />

        <div
          className="
            absolute 
            top-[230px] md:top-[230px] sm:top-[150px] 
            w-[410px] md:w-[410px] sm:w-[250px] 
            text-[48px] md:text-[48px] sm:text-[28px]
            text-center
          "
        >
          <Logo />
        </div>
        <img
          src={arimg}
          alt="ar"
          className="h-screen w-full absolute inset-0 object-cover"
        />
      </div>
    </div>
  );
};

export default HomePage;
