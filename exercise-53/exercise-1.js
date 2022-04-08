function sumAll(...summ) {
  let sum = 0;
  for (let arg of summ) sum += arg;
  return sum;
}

sumAll(1, 2, 3, 4, 5);
