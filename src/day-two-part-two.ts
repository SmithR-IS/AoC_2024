import { readFileSync } from "fs";

const file: string[] = readFileSync(
  `${process.cwd()}/src/input-data/day-two.txt`,
  "utf-8"
).split("\n");

const reportRecords: number[][] = file.map((report) =>
  report.split(" ").map((level) => Number(level))
);

console.log(reportRecords);

function orderingIsAscOrDesc(report: number[]) {
  const sortedAsc = report.toSorted((n1, n2) => n1 - n2);
  const sortedDesc = sortedAsc.toReversed();

  if (
    sortedAsc.toString() === report.toString() ||
    sortedDesc.toString() === report.toString()
  ) {
    return true;
  }
  return false;
}

function stepIsWithinRange(report: number[]) {
  for (let index = 1; index < report.length; index++) {
    const abs = Math.abs(report[index - 1]! - report[index]!);
    if (abs >= 1 && abs <= 3) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

let rollingTotal = 0;
reportRecords.forEach((report) => {
  if (orderingIsAscOrDesc(report) && stepIsWithinRange(report)) {
    rollingTotal += 1;
  }
});
console.log("rollingTotal", rollingTotal);
