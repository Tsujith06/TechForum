import React, { useState } from "react";
import Eventtype from "../eventType/Eventtype";
import Eventcard from "../eventCard/Eventcard";
import Workshopcard from "../workshopCard/Workshopcard";
import Description from "../tabs/Description";
import Guestlucturecard from "../guestLuctureCard/Guestlucturecard";

const Events = () => {
  
  const types = [
    { id: 1, type: "event", count: 50 },
    { id: 2, type: "workshop", count: 50 },
    { id: 3, type: "guestlucture", count: 50 },
  ];

  // const events = [
  //   {
  //     id: 1,
  //     Ename: "NETWORKING WORKSHOP",
  //     Description:
  //       "We are excited to invite you to a special two-day guest lecture event taking place at the BIT Main Auditorium on July 14–15, 2025, from 9:00 AM to 4:30 PM each day. This enriching program will feature a lineup of distinguished industry experts who will share valuable insights, real-world experiences, and emerging trends across various fields. Whether you're a student, professional, or enthusiast looking to broaden your knowledge and network with like-minded individuals, this event offers a unique opportunity to learn from some of the best in the industry.",
  //   },
  // ];

  const [active, setActive] = useState('event');
  const Eventrender = () => {
    switch (active) {
      case "event":
        return<><Eventcard /></>;
      case "workshop":
        return <Workshopcard />;
      case "guestlucture":
        return <Guestlucturecard/>;
    }
  };
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex gap-[50px]  justify-center">
        {types.map((t) => {
          return (
            <Eventtype
              e_name={t.type}
              setactive={setActive}
              e_count={t.count}
              active={active}
              t={t.type}
            />
          );
        })}
      </div>
      <div className=" flex flex-col justify-center items-center">
        {Eventrender()}
      </div>
    </div>
  );
};

export default Events;
