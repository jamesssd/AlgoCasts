// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for(let i = 0; i <= n; i++){ 
        //check to see if the number is multiple of 3
        if(i % 3 ===0){
            console.log("fizz");
        } //check to see if the number is multiple of 5 
        else if( i % 5 === 0){
            console.log("buzz");
        } //check to see if the number is multiple of 3 and 5?
        else if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        } //if number is neither, print number 
        else{
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;
