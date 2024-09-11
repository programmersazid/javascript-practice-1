let num = [1,2];
num.push(3,4);
console.log(num);
let out1 = num.shift();
console.log(out1);
num.unshift(0);
console.log(num);

let string = ['Sazid', "Alpona"];
string.push("Himel");
console.log(string);
string.unshift("Hiyan");
console.log(string);
console.log(string.includes("Sazid"));
console.log(string.includes("sazid"));
console.log(string.indexOf("Sazid"));
let apps = ['fb', 'snap','youtube'];
console.log(apps.join('+'));
console.log(string.concat(apps));
console.log(Array.isArray(apps));
console.log(Array.isArray('[]'));
console.log(apps.slice(0,2));// o index theke suru kore 2 index er ag porjonto 
console.log(apps.splice(0,1));// o index theke 1 ta katbe
