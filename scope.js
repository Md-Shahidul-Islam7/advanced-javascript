let bonus = 20; //Global scope
function sum(first, second) {
  let result = first + second + bonus;
  if (result > 9) {
    let mood = "happy"; //Block scope
    mood = "fishy";
    var moody = "funky"; 
    console.log(moody);
    console.log(mood);
  }
  console.log(bonus);
 console.log(moody);// Hosting scope
  return result;
}
const output = sum(3, 7);
console.log(bonus);
console.log(output);
