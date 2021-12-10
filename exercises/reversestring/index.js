// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
}

module.exports = reverse;
    
//Solution #1
// return str
// .split('')
// .reverse()
// .join("");

//Solution #2
// let reversed = " ";
    
// for (let character of str){
//     reversed = character + reversed;
// }

// return reversed;

//Solution 3
 //Solution 3
//  return str.split(" ").reduce((rev, char) =>{
//     char + rev;
// }, " ");
