function fibonacciGenerator(n) {
  let numbers = [];

  for (i = 0; i < n; i++) {
    if(n == 0){
        console.log(numbers)
    }
    numbers.push(i);
  }
  console.log(numbers);
}

fibonacciGenerator(1);

// [0, 1, 2, 3, ...]
