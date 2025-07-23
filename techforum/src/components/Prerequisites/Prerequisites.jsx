import React from "react";

import PrerequisitesItems from "../prerequisitesItems/prerequisitesItems";

const items = [
  { id: 1, item: "Laptop" },
  { id: 2, item: "Pen" },
  { id: 3, item: "Notebook" },
];
const Prerequisites = () => {
  return (
    <div className="ml-[20px] flex flex-col gap-3">
      {items.map((i) => {
        return <PrerequisitesItems item={i.item} />;
      })}
    </div>
  );
};

export default Prerequisites;
