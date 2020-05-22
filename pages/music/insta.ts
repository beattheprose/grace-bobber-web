import fs from "fs";

const files = fs.readdirSync(`/images`);
console.log(files);
