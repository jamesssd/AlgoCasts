// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let rev ="";
    
    for(let char of str){
        str.split("").reverse().join("");
    }if(str === rev){
        return true
    } else{
        return false
    }
    
}

module.exports = palindrome;
//Solution #1
// function palindrome(str){
//     const reversed = str.split("").reverse().join("");

//     return str == reversed;
// }

// Solution #2
// function palindrome(str) {
//     //Slution #2
//     return str.split("").every((char, i)=>{
//         return char === str[str.length-i-1];
//     });
// }

//my solution    
// let rev = "";

// for(let char of str){
//     rev = char + rev;
// } if(rev === str){
//     return true;
// } 
// else {
//     return false;
// }