import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
const Contactdetail = () => {
  return (
    <div className="h-auto w-full bg-3/40 border-[2px] flex flex-col gap-2 rounded-[10px] border-white/20 p-3">
      <div className="flex gap-3">
        <div className="h-10 w-10 rounded bg-1"></div>
        <div className="flex flex-col">
          <p className="text-white text-[14px]">A Rajkumar</p>
          <p className="text-white/50 text-[14px]">Organizer</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white/20"></div>
      <div className="flex gap-3 justify-center items-center w-fit">
        <IoCallOutline className="text-1 h-[20px] w-auto" />
        <div className="flex gap-2 text-white">
          <p>+91</p>
          <p>9876543210</p>
        </div>
      </div>
      <div className="flex gap-3  h-auto w-auto items-center">
        <IoMailOutline className="text-1 h-[20px] w-auto" />
        <div className=" h-auto w-[240px] p-1 break-words">
          <p className="text-white break-all">Rajkumar@bitsathy.ac.in</p>
        </div>
      </div>
    </div>
  );
};

export default Contactdetail;
