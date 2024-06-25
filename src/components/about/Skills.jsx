import React from "react";

// .Net
// WPF
// Unity 
// SQL
// UiPath
// Power Query 
// Type Script
// React 



const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: ".Net" },
  { skillClass: "p80", skillPercent: "80", skillName: "SQL" },
  { skillClass: "p80", skillPercent: "80", skillName: "WPF" },
  { skillClass: "p60", skillPercent: "60", skillName: "Unity" },

  { skillClass: "p90", skillPercent: "90", skillName: "UiPath" },
  { skillClass: "p60", skillPercent: "60", skillName: "Power Query" },

  { skillClass: "p40", skillPercent: "40", skillName: "TypeScript" },
  { skillClass: "p40", skillPercent: "40", skillName: "REACT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
