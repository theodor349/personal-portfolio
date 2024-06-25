import React from "react";

const experienceContent = [
  {
    year: "2024 - Present",
    position: "Software Pilot",
    compnayName: "Trifork",
    details: `Starting 12th of august`,
  },
  {
    year: "2021 - 2024",
    position: "Teaching Assitant",
    compnayName: "Aalborg University",
    details: `Used my explaining skill to help newer students understand and apply course materials in Software Development and Syntax and Semantics`,
  },
  {
    year: "2021 - 2024",
    position: "Student RPA Developer",
    compnayName: "Aalborg University",
    details: `Initialy I automated manual processes using UiPath and later I headed the development our our in house RPA management gateway`,
  },
  {
    year: "2020 - 2022",
    position: "Data Analysist",
    compnayName: "Epoka",
    details: `Applyied my developer skills to automate their migration to their new ERP system`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
