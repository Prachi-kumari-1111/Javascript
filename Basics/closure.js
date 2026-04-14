function outer() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2