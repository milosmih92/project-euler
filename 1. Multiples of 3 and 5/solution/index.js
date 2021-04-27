function sumMultiplesTillLimit(limit) {
    let sum = 0;
    for (let i=1; i<limit; i++) {
        if (i%3===0 || i%5===0) {
            sum += i;
        }
    }

    return sum;
}

console.log('Sum of multiples of 3 and 5 till 10 are: ', sumMultiplesTillLimit(10));        // 23
console.log('Sum of multiples of 3 and 5 till 1000 are: ', sumMultiplesTillLimit(1000));    // 233168
