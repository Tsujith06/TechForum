import React, { useState } from "react";
import Description from "../tabs/Description";
import Rounds from "../tabs/Rounds";
import Rules from "../tabs/Rules";
import Rewards from "../tabs/Rewards";
import Contacttab from "../tabs/Contacttab";
import eimg from "../../assets/guestlucture.png";
import Button from "../button/button";
import Prerequisites from "../Prerequisites/Prerequisites";
import Speakers from "../speakers/Speakers";

const Workshopcard = () => {
  const tabs = ["Description", "Prerequisites","Speakers", "Contact"];
  const [activetab, setActivetab] = useState("Description");
  const tabrender = () => {
    switch (activetab) {
      case "Description":
        return <Description />;
      case "Prerequisites":
        return <Prerequisites />;
      case "Speakers":
        return <Speakers/>;
      case "Contact":
        return <Contacttab />;
    }
  };
  return (
    <div className="flex w-[1340px] h-[480px] bg-10 border border-white/50 rounded-[10px] p-5">
      <div className="flex flex-col gap-5 ">
        <div className="flex  items-center h-fit  gap-3">
          <p className="text-white text-[18px]">July 14 - July 15 , 2025</p>
          <div className="h-2 w-2 bg-1 rounded-[5px]"></div>
          <p className="text-white text-[18px] ">BIT Main Auditorium </p>
        </div>

        <p className="text-white text-[28px] font-semibold font-oxanium">
          NETWORKING WORKSHOP
        </p>

        <div className="flex gap-5">
          {tabs.map((t) => {
            return (
              <button
                onClick={() => setActivetab(t)}
                className={`p-1  border rounded-[8px] cursor-pointer pl-5 pr-5 ${
                  activetab == t
                    ? "text-1 border-1"
                    : "text-white  border-white/50"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {tabrender()}

        <div className="w-[150px] mt-auto">
          <Button name={"Register Now"} />
        </div>
      </div>

      <div className="h-full overflow-hidden w-[372px] ml-auto  bg-1 bg-cover rounded-[8px] ">
        <img src={eimg} alt="" className="h-full w-full" draggable={false} />
      </div>
    </div>
  );
};

export default Workshopcard;
