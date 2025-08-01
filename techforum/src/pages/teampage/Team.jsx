import React from "react";
import bg from "../../assets/homePage.png";
import Header from "../../components/header/Header";
import TeamCard from "../../components/teamCard/TeamCard";
import student from "../../assets/student.png";
import sample from "../../assets/sample.png";
const Team = () => {
  const students = [
    { id: 1, img: student, name: "Akash Varma Lds",twitter:"https://x.com/elonmusk" ,linkedin:"https://www.linkedin.com/in/sujith-t-a1893a2b8/" , instaid:"https://www.instagram.com/sujith_thirumoorthi/", mailid:"rahul.cs23@bitsathy.ac.in" , role: "Web Developer" , details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React." },
    { id: 2, img: student, name: "Akash Varma L", role: "Web Developer" ,details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React."},
    { id: 4, img: student, name: "Akash Varma L", role: "Web Developer" ,details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React."},
    { id: 3, img: student, name: "Akash Varma L", role: "Web Developer" ,details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React."},
    { id: 5, img: student, name: "Akash Varma L", role: "Web Developer" ,details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React."},
    { id: 6, img: student, name: "Akash Varma L", role: "Web Developer" ,details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React."},
    { id: 7, img: student, name: "Akash Varma L", role: "Web Developer" ,details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React."},
    { id: 8, img: student, name: "Akash Varma L", role: "Web Developer" ,details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React."},
    { id: 9, img: student, name: "Akash Varma L", role: "Web Developer" ,details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React."},
    { id: 10, img: student, name: "Akash Varma L", role: "Web Developer",details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React." },
    { id: 11, img: student, name: "Akash Varma L", role: "Web Developer",details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React." },
    { id: 12, img: student, name: "Akash Varma L", role: "Web Developer",details:"I'm Akash Varma L, a passionate web developer who loves turning ideas into clean, responsive websites using HTML, CSS, and JavaScript. I enjoy solving problems with code and crafting smooth user experiences with React." },
  ];

  const role = [
    // { id: 1, role: "All" },
    { id: 2, role: "Web Developer" },
    { id: 3, role: "App Developer" },
    { id: 4, role: "UI/UX Developer" },
    { id: 5, role: "Net Working" },
    { id: 6, role: "Digital Marketing" },
    
  ];
  return (  
    <div className="h-screen w-full relative overflow-hidden ">
      <img src={bg} alt="" className="absolute inset-0 bg-cover " />
      <div className="z-10 backdrop-blur-md w-full absolute ">
        <Header />
      </div>
      <div className="absolute inset-0">
        <div
          className="absolute  inset-0 flex flex-col items-center gap-[15px] overflow-y-auto "
          style={{ scrollbarWidth: "none" }}
        >
          <p className="text-white text-[48px] font-medium  mt-[90px] ">
            Meet The Minds Behind <span className="text-1"> BIT </span>Tech
            Forum
          </p>
          <div>
            <div
              className="flex w-[1200px]  justify-center items-center overflow-x-auto   "
              style={{ scrollbarWidth: "none" }}
            >
              {role.map((r,i) => {
                return (
                  <p
                    key={r.id}
                    className={`text-white cursor-pointer select-none  flex justify-center items-center  border-[2px] border-t-0 border-b-0 border-l-0 pl-[50px] pr-[50px] w-auto ${i===0&&"border-l-[2px]"}  border-white/50`}
                  >
                    {r.role}
                  </p>
                );
              })}
            </div>
          </div>
          <div></div>
          <div className="grid grid-cols-4 ">
            {students.map((s) => {
              return (
                <TeamCard key={s.id} src={s.img} name={s.name} role={s.role} details={s.details} linkedin={s.linkedin} instaid={s.instaid} mailid={s.mailid}  twitter={s.twitter} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
