// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let arr = [];
    let index = 0;

    while(index < array.length){
        arr.push(array.slice(index, index + size));
        index += size;
    }
    return arr;
}

module.exports = chunk;

//Solution 1
// function chunk(array, size) {
//     let arr = [];

//     for (let element of array){
//         let last = arr[arr.length -1];

//         if (!last || last.length === size){
//             arr.push([element]);
//         } 
//         else{
//             last.push(element);
//         }
//     }
//     return arr;

// }

//Solution 2
// function chunk(array, size) {
//     let arr = [];
//     let index = 0;

//     while(index < array.length){
//         arr.push(array.slice(index, index + size));
//         index += size;
//     }
//     return arr;
// }
