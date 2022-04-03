function palindromeCheck(str) {
    //regualr expression for removing spaces from the input string
    let reg = /[\W]/g;

    //replaces any spaces in the string with an empty string
    let strCheck = str.replace(reg, "");

  //splits the current string into an array of characters, reverses them and joins them back together
  let reversedStr = strCheck.split("").reverse().join("");
  
  //if the reversedStr is identical to the final string, return true. Otherwise, false. 
  if (reversedStr === strCheck) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeCheck("nurses run"));
