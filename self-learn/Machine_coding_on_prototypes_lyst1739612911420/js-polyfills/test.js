// Write a pollyfill for myforEach method Justlike foreach
if (!Array.prototype.myforEach) {
  Array.prototype.myforEach = function (usrFN) {
    for (let i = 0; i < this.length; i++) {
      usrFN(this[i], i);
    }
  };
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.myforEach((val, index) => console.log(val * 5));

// Write polyfill for filter method named as myFilter
//anology: filter method return a new array based on the condiiton
//Q. FInd out only even number from the array.

if (!Array.prototype.myFilter)
  [
    (Array.prototype.myFilter = function (usrFn) {
      const result = [];
      for (let i = 0; i < this.length; i++) {
        if (usrFn(this[i])) result.push(this[i]);
      }

      return result;
    }),
  ];

const evenNum = arr.myFilter((e) => e % 2 == 0);
console.log(evenNum);

// Create a polyfills for map method named as myMap
// Analogy :  Always return a new array
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (usrFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      result.push(usrFn(this[i], i));
    }

    return result;
  };
}

const result = arr.myMap((ele) => ele * 2);
console.log(result);
