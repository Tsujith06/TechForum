import React, { useState } from "react";
import { Instagram_icon, Linkedin_icon, Mail_icon, Twitter_icon } from "../../icon";
const TeamCard = ({ src, name, role, details,mailid,instaid,linkedin,twitter}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className=" h-[320px]  w-[250px] m-5 [perspective:500px] select-none"
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-gradient-to-b from-2/30 to-8/30 rounded-br-[20px] rounded-tl-[20px] border border-white/50 p-[10px] pb-0 flex flex-col font-poppins overflow-x-hidden [backface-visibility:hidden]">
          <div className="flex flex-col">
            <p className="text-[16px] text-white">{name}</p>
            <p className="text-[14px] text-white/50">{role}</p>
          </div>
          <div className="h-full flex justify-center items-end  mt-1">
            <img
              onClick={() => setFlipped(!flipped)}
              src={src}
              alt=""
              draggable={false}
              className="bg-cover h-[250px]  cursor-pointer"
            />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 gap-3 bg-gradient-to-b from-2/30 to-8/30 rounded-br-[20px] rounded-tl-[20px] border border-white/50 p-[10px] flex flex-col  font-poppins text-white  [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col text-center">
            <p className="text-[16px] text-white  ">{name}</p>
            <p className="text-[14px] text-white/50">{role}</p>
          </div>
          <div className=" h-full overflow-auto " style={{scrollbarWidth:"none"}}>
            <p className="text-[12px] text-white cursor-pointer" onClick={() => setFlipped(!flipped)} >{details}</p>
          </div>
          <div className="flex gap-4  justify-center mb-[10px]">
            <Mail_icon className={"cursor-pointer"} onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fc=1&to=${mailid}`,"_blank")}/>
            <Instagram_icon className={"cursor-pointer"} onClick={()=>window.open(instaid, "_blank")}/>
            <Linkedin_icon className={"cursor-pointer"} onClick={()=>window.open(linkedin, "_blank")}/>
            <Twitter_icon className={"cursor-pointer"} onClick={()=>window.open(twitter, "_blank")}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
