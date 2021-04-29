function largestPalindromeProduct(n) {
    const maxNumber = Number("9".repeat(n));
    let palindrome = 0;
  
    for(let i=maxNumber; i>0; i--) {
      for(let j=maxNumber; j>0; j--) {
        const sum = i*j;
        const reversed = sum.toString().split("").reverse().join("");
        if (sum.toString() === reversed && sum > palindrome) {
          palindrome = sum;
        }
      }
    }
  
    return palindrome;
  }

  console.log('The largest palindrome made from the product of two 2-digit numbers is: ', largestPalindromeProduct(2)); // 9009
  console.log('The largest palindrome made from the product of two 3-digit numbers is: ', largestPalindromeProduct(3)); // 906609
  console.log('The largest palindrome made from the product of two 4-digit numbers is: ', largestPalindromeProduct(4)); // 99000099
