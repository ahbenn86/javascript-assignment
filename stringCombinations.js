function stringCombinations(str) {
  
  let characters = [];

 
  for (let i = 0; i < str.length; i++) {
 
    for(let j = i+1; j< str.length+1; j++){
    
        characters.push(str.slice(i,j))
    }
  }
  return characters
}

console.log(stringCombinations("dog"));
//d, do, dog, o, og, g
