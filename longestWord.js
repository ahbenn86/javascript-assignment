function longestWord(str) {
  let stringArr = str.split(" ");
  let sortedArr = stringArr.sort((str1, str2) => {
    return str2.length - str1.length;
  });

  let finalWord = sortedArr[0];

  return finalWord;
}
console.log(longestWord("Web Development Tutorial")); //Development
