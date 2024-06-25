import React from "react";

const educationContent = [
  {
    year: "2024",
    degree: "Master in Computer Science",
    institute: "Aalborg University",
    details: ``,
  },
  {
    year: "2022",
    degree: "Bachelor in Computer Science",
    institute: "Aalborg University",
    details: ``,
  },
  {
    year: "2019",
    degree: "Higher Technical Gymnasium",
    institute: "Hansenberg",
    details: ``,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
