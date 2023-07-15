// Return all the palindromes in an array

const array = ["level", "hello", "racecar", "world", "madam", "343"];

const palindromeArray = array.filter((word) => {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
});

console.log(palindromeArray);