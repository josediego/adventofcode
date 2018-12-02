const fs = require("fs");
const dataFile = process.argv[2] || "day1.txt";

const frequencies = fs
  .readFileSync(dataFile, "utf8")
  .split("\n")
  .map(value => +value);

const getFrequenciesChanges = frequencies => {
  console.time("getFrequenciesChanges");
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return frequencies.reduce(reducer, 0);
};

console.log(`PART-ONE: ${getFrequenciesChanges(frequencies)}`);
console.timeEnd("getFrequenciesChanges");

const getRepetitiveFrecuency = frequencies => {
  console.time("getRepetitiveFrecuency");
  const setOfFrecuencies = new Set([0]);
  var currentFrecuency = 0;
  while (true) {
    for (const newFrecuency of frequencies) {
      currentFrecuency += newFrecuency;
      if (setOfFrecuencies.has(currentFrecuency)) return currentFrecuency;
      setOfFrecuencies.add(currentFrecuency);
    }
  }
};

console.log(`PART-TWO: ${getRepetitiveFrecuency(frequencies)}`);
console.timeEnd("getRepetitiveFrecuency");
