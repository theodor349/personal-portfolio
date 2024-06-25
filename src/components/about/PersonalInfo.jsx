import React from "react";

const today = new Date();
const bDay = new Date(`${today.getFullYear()}-03-06`);
const ageYear = today < bDay ? today.getFullYear() - 1999 - 1 : today.getFullYear() - 1999;


const personalInfoContent = [
  { meta: "first name", metaInfo: "Theodor", hasColor: "" },
  { meta: "last name", metaInfo: "Risager", hasColor: "" },
  { meta: "Age", metaInfo: `${ageYear} Years`, hasColor: "" },
  { meta: "Nationality", metaInfo: "Danish", hasColor: "" },
  { meta: "Address", metaInfo: "Aalborg, Denmark", hasColor: "" },
  { meta: "phone", metaInfo: "+45 4023 8867", hasColor: "" },
  { meta: "Email", metaInfo: "theodor349@mail.com", hasColor: "" },
  { meta: "langages", metaInfo: "Danish, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
