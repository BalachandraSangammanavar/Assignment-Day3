// Convert all the strings to title caps in a string array

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    var i = 0;
    while (i < str.length) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        i++
    }
    return str.join(' ');
}
console.log(titleCase("bala Sang"));
