import React, { useState } from "react";

const TeamCard = ({ src, name, role, details }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer h-[320px]  w-[250px] m-5 [perspective:500px] select-none"
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
              src={src}
              alt=""
              draggable={false}
              className="bg-cover h-[250px]"
            />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-gradient-to-b from-2/30 to-8/30 rounded-br-[20px] rounded-tl-[20px] border border-white/50 p-[10px] flex flex-col items-center font-poppins text-white text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col">
            <p className="text-[16px] text-white">{name}</p>
            <p className="text-[14px] text-white/50">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
