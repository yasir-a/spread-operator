'use strict';
const automobile = {
  cName: 'Suzuki',
  location: '403, St:landhi, Malir, Karachi.',
  categories: ['hatchback', 'sedan', 'suv'],
  hatchBack: ['mehran', 'alto', 'cultus'],
  sedan: ['baleeno', 'liana', 'ciaz'],
  suv: ['vitara', 'suzuki cross'],
  orderCar(starterIndex, mainIndex) {
    return [this.hatchBack[starterIndex], this.suv[mainIndex]];
  },
  openHours: {
    thursday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 12,
      close: 23,
    },
    saturday: {
      open: 0, //open 24*7
      close: 24,
    },
  },
};
//Destructuring
const jsFramework = ['Next Js', 'Gatsby Js', 'Remix js'];
const [n, g, r, s] = jsFramework;
console.log(n, g, r, s);
//Output=> Next Js Gatsby Js Remix js

//Spread Operator
const scriptLanguage = ['JavaScript', 'Python', 'Ruby'];
console.log(...scriptLanguage);
//Output=> JavaScript Python Ruby

//Create shallow Copy
const newHatchback = [...automobile.hatchBack];
console.log(newHatchback);

//Join two arrays
const newJoin = [
  ...automobile.hatchBack,
  ...automobile.sedan,
  ...automobile.suv,
];

console.log(newJoin);
