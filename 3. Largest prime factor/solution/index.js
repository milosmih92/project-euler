function largestPrimeFactor(number) {
    let prime = 2;
  
    while (prime <= number) {
      if (number % prime === 0) {
        number /= prime;
      }
      else {
        prime += 1;
      }
    }
  
    return prime;
}

console.log('The largest prime factor of 2 is: ', largestPrimeFactor(2));                   // 2
console.log('The largest prime factor of 3 is: ', largestPrimeFactor(3));                   // 3
console.log('The largest prime factor of 5 is: ', largestPrimeFactor(5));                   // 5
console.log('The largest prime factor of 2 is: ', largestPrimeFactor(7));                   // 7
console.log('The largest prime factor of 8 is: ', largestPrimeFactor(8));                   // 2
console.log('The largest prime factor of 2 is: ', largestPrimeFactor(13));                  // 13
console.log('The largest prime factor of 13195 is: ', largestPrimeFactor(13195));           // 29
console.log('The largest prime factor of 13195 is: ', largestPrimeFactor(600851475143));    // 6857
