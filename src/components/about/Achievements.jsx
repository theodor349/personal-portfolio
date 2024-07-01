import React from "react";

const awards = [
  "3th Place - DLG Competition 2020",
  "1st Place - DM in Game Development 2017 - Group",
  "1st Place - DM in Game Development 2017 - Fan Favorite",
]

const achievementsContent = [
  { title: `${new Date().getFullYear() - 2014}`, subTitle1: "years of", subTitle2: "coding" },
  { title: `${new Date().getFullYear() - 2020}`, subTitle1: "years of", subTitle2: "experience" },
  // { title: "4", subTitle1: "completed", subTitle2: "projects" },
  // { title: `${awards.length}`, subTitle1: "awards", subTitle2: "won" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
