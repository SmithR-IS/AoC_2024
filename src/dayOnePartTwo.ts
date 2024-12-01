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

// Map of ids to occurrences - could be done in a cleaner way but cba
const rightMap: Record<number, number> = {};
right.forEach((item) => {
  if (rightMap[item]) {
    rightMap[item] = rightMap[item] + 1;
  } else {
    rightMap[item] = 1;
  }
});

let rollingTotal = 0;
left.forEach((item) => {
  if (rightMap[item]) {
    rollingTotal += item * rightMap[item];
  }
});
console.log(rollingTotal);
