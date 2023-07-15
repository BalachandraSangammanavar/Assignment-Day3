// Remove duplicates from an array

const array = [1, 2, 3, 2, 3];
let uniqueArr = [];
function getUnique(arr) {

    for (let i of arr) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
getUnique(array);