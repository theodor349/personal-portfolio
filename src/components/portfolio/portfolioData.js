import Image1 from "../../../public/assets/img/portfolio/teaching_flipper.jpg";
import Image2 from "../../../public/assets/img/portfolio/weekly_review_large.jpg";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image6 from "../../../public/assets/img/portfolio/project-6.jpg";
import Image7 from "../../../public/assets/img/portfolio/project-7.jpg";
import Image8 from "../../../public/assets/img/portfolio/project-8.jpg";
import Image9 from "../../../public/assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Teaching Flipper",
    image: Image1,
    tag: ["nextjs", "typescript", "sql", "react"],
    delayAnimation: "0",
    modalDetails: [
      {
        language: "TypeScript, NextJS, PostgresSQL, Prisma, TailwindCSS, Vercel",
        preview: "www.teaching-flipper.theodorrisager.dk",
        link: "https://teaching-flipper.theodorrisager.dk/",
      },
    ],
  },
  {
    id: 2,
    type: "Weekly Review",
    image: Image2,
    tag: ["blazor", ".net", "sql"],
    delayAnimation: "100",
    modalDetails: [
      {
        language: ".Net, Blazor, SQL Server, Entity Framework, Azure",
        preview: "weeklyreview.theodorrisager.dk",
        link: "https://weeklyreview.theodorrisager.dk/",
      },
    ],
  },
];

export default PortfolioData;
