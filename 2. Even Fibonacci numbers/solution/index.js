function fiboEvenSum(n) {
    let first = 1;
    let second = 2;
    let temp = 0;
    let sum = 2;
  
    while (temp < n) {
      temp = first + second;
      if (temp % 2 === 0) {
        sum += temp;
      }
  
      first = second;
      second = temp;
    }
  
    return sum;
}

console.log('Sum of even Fibonacci numbers which are less than 8 are: ', fiboEvenSum(8));               // 10
console.log('Sum of even Fibonacci numbers which are less than 10 are: ', fiboEvenSum(10));             // 10
console.log('Sum of even Fibonacci numbers which are less than 34 are: ', fiboEvenSum(34));             // 44
console.log('Sum of even Fibonacci numbers which are less than 60 are: ', fiboEvenSum(60));             // 44
console.log('Sum of even Fibonacci numbers which are less than 1000 are: ', fiboEvenSum(1000));         // 798
console.log('Sum of even Fibonacci numbers which are less than 100000 are: ', fiboEvenSum(100000));     // 60696
console.log('Sum of even Fibonacci numbers which are less than 4000000 are: ', fiboEvenSum(4000000));   // 4613732
