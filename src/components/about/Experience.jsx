import React from "react";

const experienceContent = [
  {
    year: "2024 - Present",
    position: "Software Pilot",
    compnayName: "Trifork",
    details: `As a Software Pilot, I am responsible for ensuring that the software we produce is of the necessary quality and meets our standards for security and performance`,
  },
  {
    year: "2021 - 2024",
    position: "Teaching Assitant",
    compnayName: "Aalborg University",
    details: `Leveraged my strong communication skills, including clear explanations, active listening, and patience, to effectively aid over 200 students in grasping complex concepts within two courses: Systems Development and Syntax & Semantics`,
  },
  {
    year: "2021 - 2024",
    position: "Student RPA Developer",
    compnayName: "Aalborg University",
    details: `As the first developer hired to develop RPA solutions using UiPath, I helped automate multiple processes, resulting in significant time savings and improved efficiency. Leveraging my newfound UiPath expertise, I then spearheaded the development of our in-house RPA management gateway. This solution facilitated comprehensive tracking of all UiPath executions, including logging, statistics, and asset management, allowing for better resource allocation and performance optimization`,
  },
  {
    year: "2020 - 2022",
    position: "Data Analysist",
    compnayName: "Epoka",
    details: `By applying my programming expertise, I designed and implemented a automated solution that streamlined the migration process for their new ERP system.  This resulted in a dramatic improvement in efficiency, reducing the original one-week migration timeline to just two days`,
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
