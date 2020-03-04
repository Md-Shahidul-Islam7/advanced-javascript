//Truthy: any number or string.length other then 0, " ",'0',[],{},"false",
//Falsy: 0,"", undefined, null,NaN, false

//const age = 0;
//const name = "Raja";
//let name;
//let name = null;
//let name = NaN;
let name = 0;
//console.log(name);
if (name || name == 0) {
  console.log("Condition is True");
} else {
  console.log("Condition is False");
}
