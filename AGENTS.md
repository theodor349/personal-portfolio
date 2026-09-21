<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

This is the personal website of the Theodor Risager, he is a software engineer with a passion for developer tooling and now agentic workflows.
This app will showcase his personal projects, CV and information for potential employers. 
The color theme is following his CV and company website justenoughsolutions.com:
:root {
  --blue: #2764f0;
  --blue-dark: #174bc4;
  --blue-soft: #eaf0ff;
  --ink: #121a2b;
  --paper: #f7f8fb;
  --surface: #ffffff;
  --line: #dfe4ed;
  --muted: #667085;
}

## Project Architecture
- Files are keept small and reusable components are created when possible to keep main components lean and readable!