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
  carCategory(cat1, cat2, cat3) {
    console.log(`The categories are ${cat1} ${cat2} ${cat3}`);
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

console.log(...automobile.cName, ...automobile.categories);

//Write function that accept multiple arguments then using spread operator to pass those arguments

/* const receivedCat = [
  prompt('category-1'),
  prompt('category-2'),
  prompt('category-3'),
  prompt('category-3'),
]; */

//automobile.carCategory(...receivedCat);

// using Spread Operators on Objects
const newAutos = { founded: 1901, ...automobile, owner: 'Yasir' };
console.log(newAutos);

//Shallow copy of the objects
const rehmanAutos = { ...automobile };
rehmanAutos.cName = 'Toyota';
console.log(rehmanAutos);
