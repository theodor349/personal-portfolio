# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

## CV

The CV is copied from the sibling `../cv` repository before local development
and production builds. Run it directly with:

```bash
npm run sync:cv
```

Set `CV_SOURCE_DIR` if the local repository is elsewhere. In deployment, set a
`CV_GITHUB_TOKEN` secret with read-only Contents access to the private
`theodor349/Theodor-Risager-CV` repository.
