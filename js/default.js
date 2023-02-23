// function add(first, second) {
//   const total = first + second;
//   return total;
// }
// const result = 10;
// console.log(result);

// function add(first, second = 40) {
//     const total = first + second;
//     return total;
//   }

//   const result = add();
//   console.log(result);

function add(first, second = 40) {
  const total = first + second;
  return total;
}

const result = add(10, 0);
console.log(result);

function fullName(first = "Asif", last = "chowdhury") {
  const name = first + " " + last;
  return name;
}

const name = fullName();
console.log(name);
