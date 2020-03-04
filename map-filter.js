const numbers = [3, 4, 5, 6, 7, 8];
/* const output = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  output.push(result);
}
function square (element){
return element*element;
} */
/* function square(element) {
  return element * element;
}
const square = element => element * element;
const square = x => x * x;
numbers.map(function(element, index) {
  console.log(element, index);
});

const result = numbers.map(function(element, index) {
  return element * element;
}); 
const result = numbers.map(x => x * x); // map is also arry
console.log(result);*/

const bigger = numbers.filter(x => x > 5); //filter result is array

const isThere = numbers.find(x => x > 5); // find result is only one element

console.log(isThere);
