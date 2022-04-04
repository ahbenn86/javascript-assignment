function argumentType(data) {
  let values = [Function, Number, String, Boolean, Object],
    i,
    len;

  if (typeof data === "object" || typeof data === "function") {
    for (let i = 0, arrLength = values.length; i < arrLength; i++) {
      if (data instanceof values[i]) {
        return values[i];
      }
    }
  }

  return typeof data;
}
console.log(argumentType(1));
