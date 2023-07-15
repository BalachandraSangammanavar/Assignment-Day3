// Print odd numbers in an array

var numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11];
var oddNumbers = [];
let i = 0;
while (i < numbers.length) {
    if (numbers[i] % 2 === 1) {
        oddNumbers.push(numbers[i]);
    }
    i++;
}
console.log(oddNumbers);
