import React from "react";
import speaker from "../../assets/student.png";
import Speakcard from "../speakerCard/Speakcard";
const Speakers = () => {
  const speakers = [
    { id: 1, speaker_name: "Mr.Chandru", role: "Networking CEO", src: speaker },
    { id: 2, speaker_name: "Mr.Chandru", role: "Networking CEO", src: speaker },
  ];
  return (
    <div className="flex gap-3">
      {speakers.map((s) => {
        return <Speakcard speaker_name={s.speaker_name} role={s.role} src={s.src} />;
      })}
    </div>
  );
};

export default Speakers;
