function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
  
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
  
function smallestMult(n) {
    let maxLCM = 1;
  
    for (let i = 2; i <= n; i++) {
      maxLCM = lcm(maxLCM, i);
    }
    return maxLCM;
}

console.log('The smallest positive number that is evenly divisible by all of the numbers from 1 to 5 is: ', smallestMult(5))    // 60
console.log('The smallest positive number that is evenly divisible by all of the numbers from 1 to 7 is: ', smallestMult(7))    // 420
console.log('The smallest positive number that is evenly divisible by all of the numbers from 1 to 10 is: ', smallestMult(10))  // 2520
console.log('The smallest positive number that is evenly divisible by all of the numbers from 1 to 13 is: ', smallestMult(13))  // 360360
console.log('The smallest positive number that is evenly divisible by all of the numbers from 1 to 20 is: ', smallestMult(20))  // 232792560
