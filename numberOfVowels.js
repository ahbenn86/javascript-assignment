function numberOfVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1){
        count++;
    }
  }

  return count;
}
console.log(numberOfVowels("The quick brown fox"));
