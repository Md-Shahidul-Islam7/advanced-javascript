const students = [
  { id: 21, name: "Salman Khan" },
  { id: 31, name: "Amir Khan" },
  { id: 41, name: " Shahrukh Khan" },
  { id: 71, name: "Rani" }
];
const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);
const bigger = students.filter(s => s.id > 40);
console.log(bigger);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);
