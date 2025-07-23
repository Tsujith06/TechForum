import React from "react";
import Header from "../../components/header/Header";
import EventHeader from "../../components/eventHeader/EventHeader";
import Eventboard from "../../components/eventBoard/Eventboard";
// import Eventtype from '../../components/eventType/Eventtype'
// import Eventcard from '../../components/eventCard/Eventcard'
import Events from "../../components/events/Events";
const Eventspage = () => {
  return (
    <div className=" relative h-screen w-full bg-2 font-poppins overflow-hidden">
      <div className="absolute w-full backdrop-blur-md z-20 ">
        <Header />
      </div>
      <div 
        className=" absolute inset-0 overflow-auto pl-[50px] pr-[50px] pb-[50px]"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-5">
            <div className="mt-[90px]">
              <EventHeader />
            </div>
            <Eventboard />
          </div>
          <Events />
        </div>
      </div>
    </div>
  );
};

export default Eventspage;
