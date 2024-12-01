import { readFileSync } from "fs";

const file: string[] = readFileSync(
  `${process.cwd()}/src/input_data/dayOne.txt`,
  "utf-8"
).split("\n");
const left: number[] = [];
const right: number[] = [];

file.forEach((row) => {
  const [l, r] = row.split("   ");
  left.push(Number(l));
  right.push(Number(r));
});

left.sort((n1, n2) => n1 - n2);
right.sort((n1, n2) => n1 - n2);

let rollingTotal = 0;
left.forEach((item, idx) => {
  rollingTotal += Math.abs(item - right[idx]);
});
console.log(rollingTotal);
