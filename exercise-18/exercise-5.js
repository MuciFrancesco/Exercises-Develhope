function memoize(fn) {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return (prova = x * factorial(x - 1));
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));

