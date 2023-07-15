// Return all the prime numbers in an array

var Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 19];
let primeNumbers = [];
let i = 0;

while (i < Arr.length) {
    let num = Arr[i];
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        primeNumbers.push(num);
    }

    i++;
}

console.log(primeNumbers);