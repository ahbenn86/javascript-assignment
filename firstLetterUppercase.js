function firstLetterUppercase(str) {
  var capedStr = (str) => str[0].toUpperCase() + str.slice(1);

  var words = str.split(" ").map(capedStr);

  capedWords = words.join(" ");

  return capedWords
}

console.log(firstLetterUppercase("the quick brown fox")); //The Quick Brown Fox
