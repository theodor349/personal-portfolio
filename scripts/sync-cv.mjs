import { access, copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const files = ["cv.html", "theodor.png"];
const sourceDirectory = process.env.CV_SOURCE_DIR ?? path.resolve("..", "cv");
const outputDirectory = path.resolve("public", "cv");

async function hasLocalCV() {
  try {
    await Promise.all(files.map((file) => access(path.join(sourceDirectory, file))));
    return true;
  } catch {
    return false;
  }
}

async function download(file, token) {
  const response = await fetch(
    `https://api.github.com/repos/theodor349/Theodor-Risager-CV/contents/${file}`,
    {
      headers: {
        Accept: "application/vnd.github.raw+json",
        Authorization: `Bearer ${token}`,
        "User-Agent": "personal-portfolio-build",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`GitHub returned ${response.status} for ${file}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

await mkdir(outputDirectory, { recursive: true });

if (await hasLocalCV()) {
  await Promise.all(
    files.map((file) =>
      copyFile(path.join(sourceDirectory, file), path.join(outputDirectory, file)),
    ),
  );
} else if (process.env.CV_GITHUB_TOKEN) {
  const contents = await Promise.all(
    files.map((file) => download(file, process.env.CV_GITHUB_TOKEN)),
  );
  await Promise.all(
    files.map((file, index) =>
      writeFile(path.join(outputDirectory, file), contents[index]),
    ),
  );
} else {
  throw new Error(
    `CV not found at ${sourceDirectory}. Set CV_SOURCE_DIR or CV_GITHUB_TOKEN.`,
  );
}

console.log(`Synced CV to ${outputDirectory}`);
