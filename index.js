const regression = require("regression");

const linearPoints = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
];
const linearPointSlightyOff = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4.1],
  [5, 5],
];

// console.log("Linear fit with linear points: \n");
// console.log(regression.linear(linearPoints));

const regressionModel = regression.linear(linearPoints);
// console.log(`y value when x is 42 : ${regressionModel.predict(42)}`);
// console.log(regression.linear(linearPoints));
// console.log(regression.linear(linearPointSlightyOff));

const string = regression.linear(linearPointSlightyOff);
// console.log(string.string);
const result = regression.linear([
  [0, 1],
  [32, 67],
  [12, 79],
]);
const gradient = result.equation[0];
const yIntercept = result.equation[1];
// console.log(gradient, yIntercept);

const data = [
  [0, 1],
  [32, 67],
  [12, 79],
];
const result2 = regression.polynomial(data, { order: 3 });

// console.log(result2.string);

// const dummyData = regression.linear([
//   [0, 0.6],
//   [0.25, 0.5],
//   [0.5, 0.4],
//   [1, 0.3],
//   [2, 0.2],
//   [3, 0.1],
//   [4, 0.05],
// ]);
const dummyData = regression.linear([
  [0.00330033, -1.249318906],
  [0.003194888, -0.978166136],
  [0.003095975, -0.616186139],
]);
console.log(dummyData.string);
// console.log(Math.log(0.2867));
// console.log(1/303);
// memecah data dari string
const dataString = dummyData.string;
const dataStringSplit = dataString.split(" ");
const dataStringSplit2 = dataStringSplit[2];
const finalResult = dataStringSplit2.split("x");
console.log(finalResult[0]);
