import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, parse } from "node:path";

const sourceDir = join(import.meta.dirname, "..", "source-wiki");
const outputFile = join(import.meta.dirname, "..", "wiki-data.js");

const pages = {};

for (const file of readdirSync(sourceDir).sort()) {
  if (!file.endsWith(".md") || file === "_Sidebar.md") {
    continue;
  }

  const key = parse(file).name;
  pages[key] = readFileSync(join(sourceDir, file), "utf8").replace(/\r/g, "");
}

writeFileSync(outputFile, `window.WIKI_PAGES = ${JSON.stringify(pages)};\n`);
