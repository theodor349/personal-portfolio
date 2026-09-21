export type Project = {
  id: string;
  name: string;
  logo: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  url: string;
  urlLabel: string;
  preview: "calendar" | "tracker";
  screenshots: { alt: string }[];
};

export const projects: Project[] = [
  {
    id: "weekly-review",
    name: "Weekly Review",
    logo: "WR",
    shortDescription:
      "A visual planning tool that turns daily activities into a clear, color-coded week.",
    longDescription:
      "Weekly Review is a personal planning and reflection tool built to make time visible. Activities are captured quickly, grouped by category and presented in a week view so patterns can be reviewed at a glance. A Blazor interface sits on a SQL-backed .NET application deployed to Azure.",
    techStack: [".NET", "Blazor", "SQL Server", "Entity Framework", "Azure"],
    url: "https://weeklyreview.theodorrisager.dk/",
    urlLabel: "weeklyreview.theodorrisager.dk",
    preview: "calendar",
    screenshots: [{ alt: "Weekly Review calendar overview" }],
  },
  {
    id: "work-tracker",
    name: "Work Tracker",
    logo: "WT",
    shortDescription:
      "A focused time tracker that records project sessions directly in Google Sheets.",
    longDescription:
      "Work Tracker removes friction from personal timesheets. Each project gets a simple start and end action, elapsed time stays visible, and completed sessions are written to Google Sheets for an audit-friendly history. It is intentionally small, fast and built around the workflow it serves.",
    techStack: ["React", "TypeScript", "Google Sheets"],
    url: "https://work-tracker.theodorrisager.dk/",
    urlLabel: "work-tracker.theodorrisager.dk",
    preview: "tracker",
    screenshots: [{ alt: "Work Tracker project timers" }],
  },
];
