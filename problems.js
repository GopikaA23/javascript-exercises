// import { includes, concat, map, filter } from "lodash";
// import _ from "lodash";

const _ = require("lodash");

const carsData = [
  {
    id: 1,
    owner: "Clementia",
    email: "ceastam0@amazon.co.jp",
    gender: "Female",
    make: "Pontiac",
    model: "Daewoo Kalos",
    year: 2005,
  },
  {
    id: 2,
    owner: "Muffin",
    email: "mcolquyte1@epa.gov",
    gender: "Male",
    make: "Volkswagen",
    model: "Scirocco",
    year: 1988,
  },
  {
    id: 3,
    owner: "Angelle",
    email: "aabramamovh2@ft.com",
    gender: "Female",
    make: "Chevrolet",
    model: "Suburban 2500",
    year: 2004,
  },
  {
    id: 4,
    owner: "Yuri",
    email: "ydrowsfield3@goodreads.com",
    gender: "Male",
    make: "Toyota",
    model: "T100 Xtra",
    year: 1995,
  },
  {
    id: 5,
    owner: "Bobinette",
    email: "bgotling4@rambler.ru",
    gender: "Female",
    make: "Volkswagen",
    model: "JX",
    year: 2013,
  },
  {
    id: 6,
    owner: "Monty",
    email: "mhuddleston5@mashable.com",
    gender: "Male",
    make: "Nissan",
    model: "Xterra",
    year: 2009,
  },
  {
    id: 7,
    owner: "Mallissa",
    email: "mdowthwaite6@cyberchimps.com",
    gender: "Female",
    make: "Chevrolet",
    model: "Avalanche 1500",
    year: 2006,
  },
  {
    id: 8,
    owner: "Roarke",
    email: "rdwelley7@apple.com",
    gender: "Male",
    make: "Mercedes-Benz",
    model: "Volkswagen",
    year: 1993,
  },
  {
    id: 9,
    owner: "Rabi",
    email: "rbowcock8@devhub.com",
    gender: "Male",
    make: "Jaguar",
    model: "XK Series",
    year: 1998,
  },
  {
    id: 10,
    owner: "Ferrell",
    email: "fbahlmanna@last.fm",
    gender: "Male",
    make: "Hillman",
    model: "Minx Magnificent",
    year: 1950,
  },
];

const groupedByYear1 = (carsData) => {
  let uniqueValues = {};
  for (let i = 0; i < carsData.length; i++) {
    if (!_.includes(uniqueValues, carsData[i].make)) {
      uniqueValues = _.concat(uniqueValues, carsData[i].make);
    }
  }

  const groupedData = _.map(uniqueValues, (carName) => {
    const filteredData = _.filter(
      carsData,
      (carData) => carName === carData.make
    );
    return { [carName]: filteredData };
  });
  return groupedData;
};
const result = groupedByYear1(carsData);
console.log(JSON.stringify(result));

const groupedByYear = (carsData) => {
  let groupedData = {};

  _.forEach(carsData, (car) => {
    if (!groupedData[car.make]) {
      groupedData[car.make] = [];
    }
    groupedData[car.make].push(car);
  });

  return groupedData;
};

const data = groupedByYear(carsData);
console.log(JSON.stringify(data));

// const carsBoughtAfter2000 = ({ carsData }) => {
//   let carsBoughtAfter2000 = [];
//   for (let i = 0; i < carsData.length; i++) {
//     if (carsData[i].year > 2000) {
//       carsBoughtAfter2000 << carsData[i];
//     }
//   }
//   return carsBoughtAfter2000;
// };

// const _ = require("lodash");

// let array = ["a", "+", "b"];
// let newArray = _.filter(array, (e) => {
//   return e != "+";
// });

// let symbolArray = _.filter(array, (s) => {
//   return s == "+";
// });

// let output = _.concat(newArray, symbolArray);

// console.log("output", output);

// const infixToPostfix = (array) => {
//   let arr = [];
//   let output = [];

//   let array = ["a", "*", "8", "+","b", "+", "c"] ;

// let arr = [];
// let output = [];

// arr.push(array.pop())
// output = array.push()

// console.log("arr", arr)

// console.log("array", array)

// console.log("output", output)
// }
