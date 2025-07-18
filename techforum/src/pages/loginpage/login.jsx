import React, { useState } from "react";
import loginbg from "../../assets/LoginPagebg.png";
import Input from "../../components/input/input";
import { FaRegEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import {   useNavigate } from 'react-router'

import GoogleBtn from "../../components/googleSignBtn/googleBtn";
import Button from "../../components/button/button";
import { routes } from "../../router";
const Login = () => {
  const [showpass, setShowpass] = useState(false);
  const [user,setUser]=useState();
  const router = useNavigate();
  return (
    <div className="font-poppins">
      <div className="h-screen w-full relative">
        <img src={loginbg} className="h-full w-full"></img>
    
        <p className="text-white absolute top-10 left-10 text-[18px] font-bold font-nunito ">
          <span className="text-1 ">BIT</span> TECH FORUM
        </p>

        <div className="absolute inset-0 flex justify-center items-center">
          {/* Login Card */}
          <div className="w-[400px] h-auto drop-shadow-2xl bg-2/40 border border-white/50 rounded-xl backdrop-blur-md p-[45px]">
            <div className="flex flex-col gap-[35px]">
              <div className="flex flex-col gap-0">
                <div className="text-white text-xl flex justify-center font-nunito font-bold top-[320px]">
                  Welcome Back
                </div>
                <div className="text-white/50 text-lg flex justify-center font-light font-nunito">
                  Please enter your info to sign in
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[5px]">
                  <div className="text-[16px] text-white font-normal font-nunito">
                    Email
                  </div>
                  <Input
                    placeholder={"Enter your college mail id"}
                    focus={true}
                    Type={"text"}
                    value={user}
                    onchange={(e)=>console.log(e)}
                  />
                </div>

                <div className="flex flex-col gap-[5px]">
                  <div className="text-[16px] text-white font-normal font-nunito">
                    Password
                  </div>
                  <div className="relative  flex flex-col inset-0 ">
                    <Input 
                      placeholder={"Enter your password"}
                      focus={true}
                      Type={showpass}
                    />
                    {showpass ? (
                      <FaRegEye
                        className="text-white/80 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowpass(!showpass)}
                      />
                    ) : (
                      <LuEyeClosed
                        className="text-white/80 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowpass(!showpass)}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[30px]">
                <div className="w-full h-[1px] bg-white/30"></div>
                <GoogleBtn />
              </div>
              <Button name={'Sign in'} onClick={()=>router('/home')
              }/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
