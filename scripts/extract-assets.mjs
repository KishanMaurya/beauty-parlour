import fs from "fs";
import path from "path";

const html = fs.readFileSync("legacy/index.html", "utf8");

const cssMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (cssMatch) {
  fs.mkdirSync("app", { recursive: true });
  fs.writeFileSync("app/globals.css", cssMatch[1].trim());
  console.log("CSS extracted:", cssMatch[1].length, "chars");
}

const imgMatch = html.match(/src="(data:image\/jpeg;base64,[^"]+)"/);
if (imgMatch) {
  const b64 = imgMatch[1].replace("data:image/jpeg;base64,", "");
  fs.mkdirSync("public", { recursive: true });
  fs.writeFileSync("public/hero.jpg", Buffer.from(b64, "base64"));
  console.log("Hero image extracted:", fs.statSync("public/hero.jpg").size, "bytes");
}
