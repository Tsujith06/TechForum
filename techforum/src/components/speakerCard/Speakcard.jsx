import React from "react";

const Speakcard = ({speaker_name,role,src}) => {
  return (
        <div className="flex relative flex-col cursor-pointer h-[200px] font-poppins w-[180px] overflow-hidden bg-gradient-to-b from-2/30 to-8/30 rounded-br-[10px] rounded-tl-[10px] border border-white/50">
          
          <div className=" h-full  flex justify-center mt-1">
            <img src={src} draggable={false} className="bg-cover" />
          </div>
          <div className="flex flex-col absolute  w-full bg-black/20 pl-[10px] p-[2px] bottom-0">
            <p className="text-[14px] text-white w-full">{speaker_name}</p>
            <p className="text-[14px] text-white/50 mt-[-5px] ">{role}</p>
          </div>
        </div>
  );
};

export default Speakcard;
