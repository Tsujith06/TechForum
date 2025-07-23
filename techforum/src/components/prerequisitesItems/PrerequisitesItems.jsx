import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const PrerequisitesItems = ({item}) => {
  return (
    <div>
      <div className="flex gap-2">
          <IoMdCheckmarkCircleOutline className="text-green-500 h-6 w-auto" />
          <p className="text-white text-[16px]">{item}</p>
      </div>
    </div>
  );
};

export default PrerequisitesItems;
