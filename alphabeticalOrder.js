function sortChar(str){

    let stringArr = str.split('');
    let sortedArr = stringArr.sort();
    let finalStr = sortedArr.join('');

    return finalStr;
}

console.log(sortChar("webmaster")) //abeemrstw