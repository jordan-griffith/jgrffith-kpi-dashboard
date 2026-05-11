import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "dist", "public");

if (!existsSync(distDir)) {
  console.error(
    `Build output not found at ${distDir}. Run "npm run build" first.`
  );
  process.exit(1);
}

const app = express();
const port = parseInt(process.env.PORT ?? "8080", 10);

app.use(express.static(distDir));

app.get("*", (_req, res) => {
  res.sendFile(join(distDir, "index.html"));
});

app.listen(port, () => {
  console.log(`KPI Dashboard running on port ${port}`);
});
