function numberReverse(num) { //32243

//.toString converts a number to a string //.split returns an array of chartacters of a string
let arr = num.toString().split(""); 
//.reverse reverses the order of the elements in an array // .join returns a string of array values
let reversedArr = arr.reverse().join("")

return reversedArr;

}

console.log(numberReverse(32243)); //34223

